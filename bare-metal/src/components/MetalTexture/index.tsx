interface MetalTextureProps {
  id: string;
  className?: string;
}

export function MetalTexture({ id, className }: MetalTextureProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Brushed metal effect with noise */}
        <filter id={`metalNoise-${id}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            seed="2"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="1 1" />
          </feComponentTransfer>
          <feColorMatrix
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 0.15 0"
          />
        </filter>

        {/* Brushed metal lines */}
        <pattern
          id={`brushedMetal-${id}`}
          x="0"
          y="0"
          width="4"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <rect width="4" height="100" fill="rgba(0,0,0,0.02)" />
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="100"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.5"
          />
          <line
            x1="2"
            y1="0"
            x2="2"
            y2="100"
            stroke="rgba(0,0,0,0.03)"
            strokeWidth="0.5"
          />
        </pattern>

        {/* Scratches and wear */}
        <pattern
          id={`scratches-${id}`}
          x="0"
          y="0"
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M10,30 Q50,25 90,35"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M120,60 Q140,58 160,62"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.3"
            fill="none"
          />
          <path
            d="M30,100 L180,110"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="0.4"
            fill="none"
          />
          <path
            d="M15,150 Q60,145 95,155"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="0.6"
            fill="none"
          />
          <path
            d="M140,180 L190,175"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.3"
            fill="none"
          />
        </pattern>

        {/* Blur filter for rust */}
        <filter id={`blur-${id}`}>
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>

        {/* Rust spots */}
        <pattern
          id={`rustSpots-${id}`}
          x="0"
          y="0"
          width="150"
          height="150"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="30"
            cy="40"
            r="8"
            fill="rgba(160, 82, 45, 0.12)"
            filter={`url(#blur-${id})`}
          />
          <circle
            cx="100"
            cy="80"
            r="5"
            fill="rgba(160, 82, 45, 0.08)"
            filter={`url(#blur-${id})`}
          />
          <circle
            cx="60"
            cy="120"
            r="6"
            fill="rgba(139, 69, 19, 0.1)"
            filter={`url(#blur-${id})`}
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#brushedMetal-${id})`} />
      <rect width="100%" height="100%" fill={`url(#scratches-${id})`} />
      <rect width="100%" height="100%" fill={`url(#rustSpots-${id})`} />
      <rect width="100%" height="100%" filter={`url(#metalNoise-${id})`} />
    </svg>
  );
}
