interface ScrewProps {
  className?: string;
}

export function Screw({ className }: ScrewProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="screwGradient" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#9a9a9a" />
          <stop offset="50%" stopColor="#6a6a6a" />
          <stop offset="100%" stopColor="#3a3a3a" />
        </radialGradient>
      </defs>
      <circle cx="10" cy="10" r="8" fill="url(#screwGradient)" />
      <circle cx="10" cy="10" r="6.5" fill="#4a4a4a" />
      <line x1="10" y1="5" x2="10" y2="15" stroke="#2a2a2a" strokeWidth="1.5" />
      <line x1="5" y1="10" x2="15" y2="10" stroke="#2a2a2a" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="2" fill="#5a5a5a" opacity="0.3" />
    </svg>
  );
}
