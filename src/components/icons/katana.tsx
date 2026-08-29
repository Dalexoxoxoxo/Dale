import * as React from "react";

interface KatanaProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * A stylized katana SVG with curved blade, circular tsuba (guard),
 * wrapped tsuka (handle), and kashira (pommel).
 * Uses gradients so it looks great on both light and dark backgrounds.
 */
export function Katana({ className, ...props }: KatanaProps) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="presentation"
      {...props}
    >
      <defs>
        <linearGradient id="katana-blade" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="45%" stopColor="#e9d5ff" />
          <stop offset="100%" stopColor="#f0abfc" />
        </linearGradient>
        <linearGradient id="katana-handle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#581c87" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <linearGradient id="katana-tsuba" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* Curved blade (shinogi-zukuri style) */}
      <path
        d="M18 195 Q70 145 145 55 L155 62 Q82 152 28 200 Z"
        fill="url(#katana-blade)"
      />

      {/* Blade edge highlight (the ha) */}
      <path
        d="M20 193 Q72 143 147 53 L150 56 Q76 146 26 198 Z"
        fill="white"
        opacity="0.7"
      />

      {/* Hamon (temper line) — the wavy pattern along the blade */}
      <path
        d="M28 188 Q40 178 60 175 Q80 170 100 155 Q120 140 138 60"
        stroke="white"
        strokeWidth="0.8"
        opacity="0.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Boshi (tip) */}
      <path
        d="M145 55 L155 62 L150 50 Z"
        fill="url(#katana-blade)"
      />

      {/* Habaki (blade collar) */}
      <path
        d="M138 50 L150 62 L155 58 L143 46 Z"
        fill="url(#katana-tsuba)"
      />

      {/* Tsuba (guard) — circular, lotus style */}
      <circle
        cx="153"
        cy="58"
        r="11"
        fill="url(#katana-tsuba)"
        stroke="#1e1b4b"
        strokeWidth="1"
      />
      <circle cx="153" cy="58" r="7.5" fill="#1e1b4b" />
      <circle
        cx="153"
        cy="58"
        r="6"
        fill="none"
        stroke="url(#katana-tsuba)"
        strokeWidth="1"
      />

      {/* Handle (tsuka) */}
      <path
        d="M160 53 L195 18 L202 25 L167 60 Z"
        fill="url(#katana-handle)"
      />

      {/* Tsuka-maki (handle wrapping) — diamond pattern in gold */}
      <g
        stroke="url(#katana-tsuba)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      >
        <path d="M164 56 L171 49 L175 53 L168 60 Z" fill="url(#katana-tsuba)" opacity="0.9" />
        <path d="M172 48 L179 41 L183 45 L176 52 Z" fill="url(#katana-tsuba)" opacity="0.9" />
        <path d="M180 40 L187 33 L191 37 L184 44 Z" fill="url(#katana-tsuba)" opacity="0.9" />
        <path d="M188 32 L195 25 L199 29 L192 36 Z" fill="url(#katana-tsuba)" opacity="0.9" />
      </g>

      {/* Kashira (pommel) */}
      <circle
        cx="197"
        cy="23"
        r="5"
        fill="url(#katana-tsuba)"
        stroke="#1e1b4b"
        strokeWidth="0.8"
      />
      <circle cx="197" cy="23" r="2.5" fill="#1e1b4b" />

      {/* Menuki (handle ornament) — small katana emblem */}
      <g transform="translate(174, 47) rotate(45)">
        <path
          d="M-2 4 L2 -4 L3 -3 L-1 5 Z"
          fill="url(#katana-tsuba)"
          opacity="0.8"
        />
      </g>
    </svg>
  );
}
