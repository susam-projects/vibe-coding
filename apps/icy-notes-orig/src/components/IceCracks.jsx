// Subtle ice crack patterns
export const IceCracks = ({ severity = 'light', seed = 0 }) => {
  // Generate minimal, subtle crack paths
  const generateCrackPath = (startX, startY, angle, length, branches = 1, depth = 0) => {
    if (depth > 2 || length < 8) return []

    const variation = Math.sin(seed + depth) * 0.15
    const endX = startX + Math.cos(angle + variation) * length
    const endY = startY + Math.sin(angle + variation) * length

    const paths = [{
      d: `M ${startX} ${startY} L ${endX} ${endY}`,
      width: Math.max(0.15, 0.5 - depth * 0.15)
    }]

    // Minimal branching
    if (depth < 1 && branches > 0) {
      const branchAngle = angle + (Math.sin(seed * depth) - 0.5) * Math.PI / 3
      const branchLength = length * 0.4
      const branchStart = {
        x: startX + (endX - startX) * 0.6,
        y: startY + (endY - startY) * 0.6
      }

      paths.push(...generateCrackPath(
        branchStart.x,
        branchStart.y,
        branchAngle,
        branchLength,
        0,
        depth + 1
      ))
    }

    return paths
  }

  const generateCracks = () => {
    const cracks = []
    const numCracks = severity === 'heavy' ? 3 : severity === 'medium' ? 2 : 1

    for (let i = 0; i < numCracks; i++) {
      const startX = 15 + ((seed + i * 41) % 70)
      const startY = 15 + ((seed + i * 79) % 70)
      const angle = ((seed + i * 47) % 360) * (Math.PI / 180)
      const length = severity === 'heavy' ? 35 : severity === 'medium' ? 25 : 20

      cracks.push(...generateCrackPath(startX, startY, angle, length, 1, 0))
    }

    return cracks
  }

  const cracks = generateCracks()

  // Adjust overall opacity based on severity - made more visible
  const baseOpacity = severity === 'heavy' ? 0.6 : severity === 'medium' ? 0.45 : 0.3

  return (
    <svg
      className="ice-cracks-overlay"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
        opacity: baseOpacity
      }}
    >
      <defs>
        {/* Subtle blur for cracks */}
        <filter id={`crack-blur-${seed}`}>
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.2" />
        </filter>
      </defs>

      {cracks.map((crack, idx) => (
        <g key={idx}>
          {/* Shadow for depth */}
          <path
            d={crack.d}
            stroke="rgba(100, 140, 180, 0.6)"
            strokeWidth={crack.width + 0.25}
            fill="none"
            strokeLinecap="round"
            transform="translate(0.08, 0.08)"
          />
          {/* Main crack */}
          <path
            d={crack.d}
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth={crack.width}
            fill="none"
            strokeLinecap="round"
          />
          {/* Bright highlight */}
          <path
            d={crack.d}
            stroke="rgba(255, 255, 255, 1)"
            strokeWidth={crack.width * 0.5}
            fill="none"
            strokeLinecap="round"
          />
        </g>
      ))}
    </svg>
  )
}

export default IceCracks
