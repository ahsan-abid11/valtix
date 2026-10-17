'use client';

import React, { useState, useEffect, useRef } from 'react';

/* ─── Service nodes ─── */
const SERVICES = [
  {
    id: 'bookkeeping',
    label: 'Virtual Bookkeeping',
    sub: 'Daily reconciliation',
    color: '#15803d',
    colorLight: '#f0fdf4',
    border: 'rgba(21,128,61,0.30)',
    angle: 270,
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="9" y1="8" x2="16" y2="8" />
        <line x1="9" y1="12" x2="14" y2="12" />
      </svg>
    ),
  },
  {
    id: 'vat',
    label: 'UAE VAT Filing',
    sub: 'FTA Form 201',
    color: '#c2410c',
    colorLight: '#fff7ed',
    border: 'rgba(194,65,12,0.30)',
    angle: 342,
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
  {
    id: 'tax',
    label: 'Corporate Tax CT',
    sub: 'EmaraTax 9%',
    color: '#0f766e',
    colorLight: '#f0fdfa',
    border: 'rgba(15,118,110,0.30)',
    angle: 54,
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'payroll',
    label: 'WPS Payroll & SIF',
    sub: 'MoHRE automated',
    color: '#6d28d9',
    colorLight: '#faf5ff',
    border: 'rgba(109,40,217,0.30)',
    angle: 126,
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'web',
    label: 'Web Engineering',
    sub: 'Bespoke Next.js',
    color: '#1d4ed8',
    colorLight: '#eff6ff',
    border: 'rgba(29,78,216,0.30)',
    angle: 198,
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const DEG = Math.PI / 180;
const SIZE = 580;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = 200;  // orbit radius (bigger)
const HR = 88;   // hub radius
const NW = 64;   // node card width
const NH = 64;   // node card height

function pos(angleDeg) {
  const a = angleDeg * DEG;
  return { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) };
}

export default function OrbitShowcase() {
  const [active, setActive] = useState(null);
  const [rot, setRot] = useState(0);
  const paused = useRef(false);
  const raf = useRef(null);
  const last = useRef(null);

  useEffect(() => {
    const tick = (t) => {
      if (!last.current) last.current = t;
      const dt = t - last.current;
      last.current = t;
      if (!paused.current) setRot(r => (r + dt * 0.005) % 360);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const enter = (id) => { setActive(id); paused.current = true; };
  const leave = () => { setActive(null); paused.current = false; };

  return (
    <div className="olc-wrap" aria-label="Valtix Services Orbit">
      <div className="olc-ambient" aria-hidden="true" />

      <svg
        className="olc-svg"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle dot grid */}
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="rgba(15,23,42,0.07)" />
          </pattern>

          {/* Orbit ring gradient */}
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#15803d" stopOpacity="0.55" />
            <stop offset="30%" stopColor="#c2410c" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#1d4ed8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#15803d" stopOpacity="0.55" />
          </linearGradient>

          {/* Hub drop shadow */}
          <filter id="hubSh" x="-35%" y="-35%" width="170%" height="170%">
            <feDropShadow dx="0" dy="6" stdDeviation="14" floodColor="rgba(15,23,42,0.12)" />
          </filter>

          {/* Node card shadow */}
          <filter id="nodeSh" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(15,23,42,0.10)" />
          </filter>

          {/* Active node elevated shadow */}
          <filter id="nodeShActive" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="rgba(15,23,42,0.18)" />
          </filter>
        </defs>

        {/* Dot grid background */}
        <rect width={SIZE} height={SIZE} fill="url(#dots)" rx="28" opacity="0.7" />

        {/* Outermost decorative rings */}
        <circle cx={CX} cy={CY} r={R + 52}
          fill="none" stroke="rgba(15,23,42,0.05)" strokeWidth="1" strokeDasharray="4 10" />
        <circle cx={CX} cy={CY} r={R + 100}
          fill="none" stroke="rgba(15,23,42,0.03)" strokeWidth="1" strokeDasharray="2 14" />

        {/* Main orbit dashed track */}
        <circle cx={CX} cy={CY} r={R}
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="1.5"
          strokeDasharray="7 7"
        />

        {/* Rotating arc highlight */}
        <g style={{ transform: `rotate(${rot}deg)`, transformOrigin: `${CX}px ${CY}px` }}>
          <circle cx={CX} cy={CY} r={R}
            fill="none"
            stroke="rgba(21,128,61,0.55)"
            strokeWidth="3"
            strokeDasharray={`${R * 0.65} ${R * 10}`}
            strokeLinecap="round"
          />
        </g>

        {/* ── Spoke lines hub → node ── */}
        {SERVICES.map((s) => {
          const p = pos(s.angle + rot);
          const isOn = active === s.id;
          const dx = p.x - CX, dy = p.y - CY;
          const d = Math.sqrt(dx * dx + dy * dy);
          const nx = dx / d, ny = dy / d;
          return (
            <line key={`spoke-${s.id}`}
              x1={CX + nx * (HR + 2)} y1={CY + ny * (HR + 2)}
              x2={p.x - nx * (NW / 2 + 4)} y2={p.y - ny * (NH / 2 + 4)}
              stroke={s.color}
              strokeWidth={isOn ? 1.8 : 1}
              strokeOpacity={isOn ? 0.65 : 0.18}
              strokeDasharray={isOn ? '0' : '3 6'}
              style={{ transition: 'stroke-opacity 0.4s ease, stroke-width 0.4s ease' }}
            />
          );
        })}

        {/* ── Service nodes ── */}
        {SERVICES.map((s) => {
          const p = pos(s.angle + rot);
          const isOn = active === s.id;
          const rx = p.x - NW / 2;
          const ry = p.y - NH / 2;

          return (
            <g key={s.id}
              style={{ cursor: 'pointer' }}
              filter={isOn ? 'url(#nodeShActive)' : 'url(#nodeSh)'}
              onMouseEnter={() => enter(s.id)}
              onMouseLeave={leave}
            >
              {/* Pulse outer ring on hover */}
              {isOn && (
                <circle cx={p.x} cy={p.y} r={NW / 2 + 12}
                  fill="none"
                  stroke={s.color}
                  strokeWidth="1.5"
                  strokeOpacity="0.3"
                  className="olc-pulse"
                />
              )}

              {/* Card background — light color fill when active */}
              <rect
                x={rx} y={ry} width={NW} height={NH} rx="16"
                fill={isOn ? s.colorLight : '#ffffff'}
                stroke={s.color}
                strokeWidth={isOn ? 2 : 1.5}
                strokeOpacity={isOn ? 0.9 : 0.35}
                style={{ transition: 'fill 0.35s ease, stroke-opacity 0.35s ease, stroke-width 0.35s ease' }}
              />

              {/* Top color accent bar */}
              <rect
                x={rx + 10} y={ry} width={NW - 20} height="3" rx="1.5"
                fill={s.color}
                fillOpacity={isOn ? 1 : 0.5}
                style={{ transition: 'fill-opacity 0.35s ease' }}
              />

              {/* Icon via foreignObject */}
              <foreignObject x={p.x - 15} y={p.y - 17} width="30" height="30">
                <div xmlns="http://www.w3.org/1999/xhtml" style={{
                  color: s.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '30px', height: '30px',
                }}>
                  {s.icon}
                </div>
              </foreignObject>

              {/* Mini label inside card */}
              <text
                x={p.x} y={p.y + NH / 2 - 10}
                textAnchor="middle"
                fontFamily="var(--font-mono), monospace"
                fontSize="7.5"
                fontWeight="700"
                fill={s.color}
                letterSpacing="0.5"
                textTransform="uppercase"
              >
                {s.id === 'bookkeeping' ? 'BOOKS' :
                  s.id === 'vat' ? 'VAT' :
                    s.id === 'tax' ? 'CT 9%' :
                      s.id === 'payroll' ? 'WPS' : 'DEV'}
              </text>

              {/* Label below node */}
              <text
                x={p.x} y={p.y + NH / 2 + 16}
                textAnchor="middle"
                fontFamily="var(--font-heading), system-ui"
                fontSize="11" fontWeight="750"
                fill={isOn ? s.color : '#1e293b'}
                letterSpacing="-0.3"
                style={{ transition: 'fill 0.35s ease' }}
              >
                {s.label}
              </text>
              <text
                x={p.x} y={p.y + NH / 2 + 30}
                textAnchor="middle"
                fontFamily="var(--font-mono), monospace"
                fontSize="9" fill={isOn ? s.color : '#94a3b8'}
                letterSpacing="0.2"
                style={{ transition: 'fill 0.35s ease', fillOpacity: 0.85 }}
              >
                {s.sub}
              </text>
            </g>
          );
        })}

        {/* ── Center Hub ── */}
        <g filter="url(#hubSh)">
          {/* Hub outer dashed halo */}
          <circle cx={CX} cy={CY} r={HR + 20}
            fill="none"
            stroke="rgba(21,128,61,0.18)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          {/* Hub background */}
          <circle cx={CX} cy={CY} r={HR}
            fill="#ffffff"
            stroke="rgba(15,23,42,0.09)"
            strokeWidth="1.5"
          />
          {/* Inner accent ring */}
          <circle cx={CX} cy={CY} r={HR - 12}
            fill="none"
            stroke="rgba(21,128,61,0.14)"
            strokeWidth="1"
          />

          {/* Logo image */}
          <foreignObject x={CX - 46} y={CY - 44} width="92" height="88">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              width: '92px', height: '88px', gap: '6px',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/tlogo.png"
                alt="Valtix"
                style={{ width: '56px', height: 'auto', objectFit: 'contain' }}
              />
              <span style={{
                fontFamily: 'var(--font-heading), system-ui',
                fontSize: '9.5px', fontWeight: '800',
                color: '#0f172a', letterSpacing: '0.12em',
                lineHeight: '1', textTransform: 'uppercase',
              }}>
                VALTIX
              </span>
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  );
}
