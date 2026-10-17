'use client';

import React, { useRef, useEffect } from 'react';

/**
 * PixelCanvas
 * Interactive Retro-Digital Pixel Grid Canvas:
 * - Replaces 3D cubes with an ultra-clean, modern digital pixel grid.
 * - Under mouse hover, pixels illuminate with electric ruby/teal digital particles,
 *   fading out with a crisp retro-matrix decay trail.
 * - Perfectly works on both light and dark themes.
 */
export default function PixelCanvas({ isLight = true, pixelSize = 28 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    const gap = 3;
    const step = pixelSize + gap;
    const pixelStates = new Map();
    let mouse = { x: -2000, y: -2000, active: false };

    const resize = () => {
      width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.parentElement.offsetHeight || 800;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener('resize', resize);

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouse = { x, y, active: true };
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.x = -2000;
      mouse.y = -2000;
    };

    window.addEventListener('mousemove', handlePointerMove);
    canvas.addEventListener('mouseleave', handlePointerLeave);

    // Compact, tight hover spotlight radius (sirf cursor ke theek neeche chand pixels activate honge)
    const glowRadius = 95;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / step) + 1;
      const rows = Math.ceil(height / step) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const px = c * step;
          const py = r * step;
          const centerX = px + pixelSize / 2;
          const centerY = py + pixelSize / 2;
          const key = `${r}_${c}`;

          const dist = Math.hypot(centerX - mouse.x, centerY - mouse.y);
          let targetVal = 0;
          if (dist < glowRadius) {
            const factor = 1 - (dist / glowRadius);
            targetVal = Math.pow(factor, 2.0); // Tighter exponential cutoff
          }

          const currentVal = pixelStates.get(key) || 0;
          let nextVal;

          // Snappy fast digital attack & rapid decay
          if (targetVal > currentVal) {
            nextVal = currentVal + (targetVal - currentVal) * 0.6;
          } else {
            nextVal = currentVal + (targetVal - currentVal) * 0.22;
          }

          if (nextVal < 0.015) {
            nextVal = 0;
            pixelStates.delete(key);
          } else {
            pixelStates.set(key, nextVal);
          }

          // Draw individual pixel tile
          if (nextVal > 0.015) {
            // Soft Light Amber-Orange Glow Shadow
            ctx.save();
            ctx.shadowColor = `rgba(251, 146, 60, ${0.45 + nextVal * 0.35})`;
            ctx.shadowBlur = Math.round(6 + nextVal * 10);
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 1;

            // Light Soft Warm Amber/Peach Orange (#FB923C / #FDBA74)
            const alpha = 0.38 + nextVal * 0.42;
            ctx.fillStyle = `rgba(251, 146, 60, ${alpha})`;
            ctx.fillRect(px, py, pixelSize, pixelSize);

            // Soft delicate edge highlight
            ctx.strokeStyle = `rgba(254, 215, 170, ${0.35 + nextVal * 0.45})`;
            ctx.lineWidth = 1;
            ctx.strokeRect(px + 0.5, py + 0.5, pixelSize - 1, pixelSize - 1);
            ctx.restore();
          } else {
            // Idle Pixel Tile (Dark Mode Slate)
            ctx.fillStyle = isLight ? '#FAF9F5' : '#0B1513';
            ctx.fillRect(px, py, pixelSize, pixelSize);

            // Subtle border grid between idle pixels
            ctx.strokeStyle = isLight ? 'rgba(0, 0, 0, 0.055)' : 'rgba(255, 255, 255, 0.035)';
            ctx.lineWidth = 1;
            ctx.strokeRect(px + 0.5, py + 0.5, pixelSize - 1, pixelSize - 1);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handlePointerMove);
      canvas.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, [isLight, pixelSize]);

  return (
    <canvas
      ref={canvasRef}
      className="wd-pixel-interactive-canvas"
      aria-hidden="true"
    />
  );
}
