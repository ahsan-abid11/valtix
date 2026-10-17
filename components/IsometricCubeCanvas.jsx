'use client';

import React, { useRef, useEffect } from 'react';

/**
 * IsometricCubeCanvas
 * Renders large 3D isometric cubes with selectable color themes.
 * Supports: 'cyan' (Cyber Azure) | 'gold' (Solar Amber) | 'emerald' (Neon Mint) | 'magenta' (Electric Ruby) | 'purple' (Royal Violet)
 */
export default function IsometricCubeCanvas({ theme = 'cyan' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    const a = 64; // Large prominent scale
    const h = a * Math.sin(Math.PI / 3); // ~55.4px
    const w = a * Math.cos(Math.PI / 3); // 32px

    const colStep = h * 2;
    const rowStep = a * 1.5;

    const cubeStates = new Map();
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

    // Color definitions per theme
    const getThemeColors = (t) => {
      switch (theme) {
        case 'gold':
          return {
            top: `rgb(${Math.round(24 + t * (255 - 24))}, ${Math.round(30 + t * (190 - 30))}, ${Math.round(25 + t * (45 - 25))})`,
            left: `rgb(${Math.round(14 + t * (180 - 14))}, ${Math.round(20 + t * (120 - 20))}, ${Math.round(15 + t * (15 - 15))})`,
            right: `rgb(${Math.round(18 + t * (225 - 18))}, ${Math.round(24 + t * (155 - 24))}, ${Math.round(20 + t * (25 - 20))})`,
            strokeTop: `rgba(255, 215, 90, ${0.4 + t * 0.6})`,
            strokeLeft: `rgba(225, 160, 40, ${0.35 + t * 0.5})`,
            strokeRight: `rgba(245, 185, 60, ${0.4 + t * 0.55})`
          };
        case 'emerald':
          return {
            top: `rgb(${Math.round(20 + t * (45 - 20))}, ${Math.round(38 + t * (255 - 38))}, ${Math.round(35 + t * (155 - 35))})`,
            left: `rgb(${Math.round(10 + t * (12 - 10))}, ${Math.round(24 + t * (175 - 24))}, ${Math.round(22 + t * (105 - 22))})`,
            right: `rgb(${Math.round(14 + t * (25 - 14))}, ${Math.round(30 + t * (220 - 30))}, ${Math.round(28 + t * (135 - 28))})`,
            strokeTop: `rgba(74, 255, 170, ${0.4 + t * 0.6})`,
            strokeLeft: `rgba(20, 230, 130, ${0.35 + t * 0.5})`,
            strokeRight: `rgba(50, 245, 160, ${0.4 + t * 0.55})`
          };
        case 'purple':
          return {
            top: `rgb(${Math.round(24 + t * (195 - 24))}, ${Math.round(28 + t * (60 - 28))}, ${Math.round(38 + t * (255 - 38))})`,
            left: `rgb(${Math.round(14 + t * (120 - 14))}, ${Math.round(18 + t * (30 - 18))}, ${Math.round(24 + t * (180 - 24))})`,
            right: `rgb(${Math.round(18 + t * (155 - 18))}, ${Math.round(22 + t * (45 - 22))}, ${Math.round(30 + t * (220 - 30))})`,
            strokeTop: `rgba(215, 120, 255, ${0.4 + t * 0.6})`,
            strokeLeft: `rgba(160, 60, 230, ${0.35 + t * 0.5})`,
            strokeRight: `rgba(185, 90, 245, ${0.4 + t * 0.55})`
          };
        case 'magenta':
          return {
            top: `rgb(${Math.round(20 + t * (255 - 20))}, ${Math.round(30 + t * (45 - 30))}, ${Math.round(28 + t * (135 - 28))})`,
            left: `rgb(${Math.round(10 + t * (195 - 10))}, ${Math.round(18 + t * (20 - 18))}, ${Math.round(16 + t * (95 - 16))})`,
            right: `rgb(${Math.round(14 + t * (230 - 14))}, ${Math.round(22 + t * (30 - 22))}, ${Math.round(20 + t * (115 - 20))})`,
            strokeTop: `rgba(255, 90, 165, ${0.4 + t * 0.6})`,
            strokeLeft: `rgba(235, 45, 125, ${0.35 + t * 0.5})`,
            strokeRight: `rgba(255, 65, 145, ${0.4 + t * 0.55})`
          };
        case 'cyan':
        default:
          return {
            top: `rgb(${Math.round(18 + t * (35 - 18))}, ${Math.round(32 + t * (225 - 32))}, ${Math.round(36 + t * (255 - 36))})`,
            left: `rgb(${Math.round(10 + t * (12 - 10))}, ${Math.round(20 + t * (140 - 20))}, ${Math.round(26 + t * (195 - 26))})`,
            right: `rgb(${Math.round(14 + t * (20 - 14))}, ${Math.round(25 + t * (180 - 25))}, ${Math.round(30 + t * (235 - 30))})`,
            strokeTop: `rgba(60, 235, 255, ${0.45 + t * 0.55})`,
            strokeLeft: `rgba(20, 165, 240, ${0.35 + t * 0.5})`,
            strokeRight: `rgba(40, 200, 255, ${0.4 + t * 0.55})`
          };
      }
    };

    const drawCube = (cx, cy, t) => {
      const colors = getThemeColors(t);

      // 1. Top Rhombus Face
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + h, cy - w);
      ctx.lineTo(cx, cy - a);
      ctx.lineTo(cx - h, cy - w);
      ctx.closePath();
      ctx.fillStyle = t > 0.008 ? colors.top : '#132320';
      ctx.fill();
      ctx.strokeStyle = t > 0.05 ? colors.strokeTop : '#0A1311';
      ctx.lineWidth = t > 0.1 ? 1.8 : 1.0;
      ctx.stroke();

      // 2. Left Face
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx, cy + a);
      ctx.lineTo(cx - h, cy + w);
      ctx.lineTo(cx - h, cy - w);
      ctx.closePath();
      ctx.fillStyle = t > 0.008 ? colors.left : '#0A1412';
      ctx.fill();
      ctx.strokeStyle = t > 0.05 ? colors.strokeLeft : '#070D0C';
      ctx.lineWidth = t > 0.1 ? 1.8 : 1.0;
      ctx.stroke();

      // 3. Right Face
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + h, cy - w);
      ctx.lineTo(cx + h, cy + w);
      ctx.lineTo(cx, cy + a);
      ctx.closePath();
      ctx.fillStyle = t > 0.008 ? colors.right : '#0E1D1A';
      ctx.fill();
      ctx.strokeStyle = t > 0.05 ? colors.strokeRight : '#08100F';
      ctx.lineWidth = t > 0.1 ? 1.8 : 1.0;
      ctx.stroke();
    };

    const glowRadius = 240;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / colStep) + 3;
      const rows = Math.ceil(height / rowStep) + 3;

      for (let r = -2; r < rows; r++) {
        for (let c = -2; c < cols; c++) {
          const offsetX = (r % 2 === 0) ? 0 : h;
          const cx = Math.round(c * colStep + offsetX);
          const cy = Math.round(r * rowStep);
          const key = `${r}_${c}`;

          const dist = Math.hypot(cx - mouse.x, cy - mouse.y);
          let targetVal = 0;
          if (dist < glowRadius) {
            const factor = 1 - (dist / glowRadius);
            targetVal = Math.pow(factor, 1.5);
          }

          const currentVal = cubeStates.get(key) || 0;
          let nextVal;
          if (targetVal > currentVal) {
            nextVal = currentVal + (targetVal - currentVal) * 0.28;
          } else {
            nextVal = currentVal + (targetVal - currentVal) * 0.045;
          }

          if (nextVal < 0.005) {
            nextVal = 0;
            cubeStates.delete(key);
          } else {
            cubeStates.set(key, nextVal);
          }

          drawCube(cx, cy, nextVal);
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
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="wd-isometric-interactive-canvas"
      aria-hidden="true"
    />
  );
}
