interface IconListProps {
  isDropped?: boolean;
}

export const IconList = ({ isDropped }: IconListProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={6}
    fill="none"
    style={{
      transform: isDropped ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s ease-in-out',
    }}
  >
    <path
      fill="#1E1E1E"
      fillRule="evenodd"
      d="M4.986 5.31a.7.7 0 0 1-.478.19.7.7 0 0 1-.478-.19L.206 1.62A.65.65 0 0 1 0 1.159.63.63 0 0 1 .198.69.68.68 0 0 1 .682.5a.7.7 0 0 1 .48.199l3.346 3.227L7.854.7a.69.69 0 0 1 .948.008.64.64 0 0 1 .198.455.64.64 0 0 1-.19.459z"
      clipRule="evenodd"
    />
  </svg>
);
