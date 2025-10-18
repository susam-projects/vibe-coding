// Realistic ice texture using SVG filters and patterns
export const IceTexture = ({ intensity = 'medium', seed = 0 }) => {
  const filterId = `ice-texture-${seed}`
  const noiseId = `ice-noise-${seed}`
  const crystalId = `ice-crystal-${seed}`

  // Adjust values based on intensity
  const values = {
    light: { turbulence: 0.3, scale: 20, opacity: 0.3 },
    medium: { turbulence: 0.5, scale: 15, opacity: 0.5 },
    heavy: { turbulence: 0.8, scale: 10, opacity: 0.7 }
  }

  const config = values[intensity] || values.medium

  return (
    <svg
      className="ice-texture-overlay"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: config.opacity
      }}
    >
      <defs>
        {/* Turbulence noise for ice surface roughness */}
        <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={0.02 + seed * 0.001}
            numOctaves={4}
            seed={seed}
            result="turbulence"
          />
          <feColorMatrix
            in="turbulence"
            type="saturate"
            values="0"
            result="grayscale"
          />
          <feComponentTransfer in="grayscale" result="ice-base">
            <feFuncR type="linear" slope="1.5" intercept="0.3" />
            <feFuncG type="linear" slope="1.5" intercept="0.35" />
            <feFuncB type="linear" slope="1.8" intercept="0.4" />
            <feFuncA type="linear" slope="0.8" />
          </feComponentTransfer>
          <feGaussianBlur in="ice-base" stdDeviation="0.5" result="blurred" />
          <feComposite in="blurred" in2="SourceGraphic" operator="over" />
        </filter>

        {/* Fine grain pattern for ice surface */}
        <filter id={noiseId}>
          <feTurbulence
            type="turbulence"
            baseFrequency={0.9}
            numOctaves={3}
            seed={seed + 100}
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="saturate"
            values="0"
            result="mono"
          />
          <feComponentTransfer in="mono">
            <feFuncA type="discrete" tableValues="0 0 0 1 1" />
          </feComponentTransfer>
        </filter>

        {/* Ice crystal pattern */}
        <pattern
          id={crystalId}
          x="0"
          y="0"
          width={config.scale}
          height={config.scale}
          patternUnits="userSpaceOnUse"
        >
          <rect width={config.scale} height={config.scale} fill="none" />
          <path
            d={`M 0 ${config.scale / 2} L ${config.scale / 2} 0 L ${config.scale} ${config.scale / 2} L ${config.scale / 2} ${config.scale} Z`}
            fill="rgba(255, 255, 255, 0.15)"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="0.3"
          />
          <circle
            cx={config.scale / 2}
            cy={config.scale / 2}
            r={config.scale / 6}
            fill="rgba(230, 240, 255, 0.2)"
          />
        </pattern>
      </defs>

      {/* Base ice texture layer */}
      <rect
        width="100%"
        height="100%"
        filter={`url(#${filterId})`}
        opacity="0.6"
      />

      {/* Fine grain overlay */}
      <rect
        width="100%"
        height="100%"
        filter={`url(#${noiseId})`}
        opacity="0.15"
      />

      {/* Crystal pattern */}
      <rect
        width="100%"
        height="100%"
        fill={`url(#${crystalId})`}
        opacity="0.4"
      />

      {/* Irregular opacity patches - simulating ice thickness variations */}
      <g opacity="0.3">
        <ellipse
          cx="30%"
          cy="40%"
          rx="25%"
          ry="20%"
          fill="white"
          filter="blur(20px)"
        />
        <ellipse
          cx="70%"
          cy="60%"
          rx="20%"
          ry="25%"
          fill="rgba(240, 248, 255, 0.8)"
          filter="blur(25px)"
        />
        <ellipse
          cx="50%"
          cy="20%"
          rx="15%"
          ry="18%"
          fill="rgba(230, 245, 255, 0.6)"
          filter="blur(18px)"
        />
      </g>
    </svg>
  )
}

export default IceTexture
