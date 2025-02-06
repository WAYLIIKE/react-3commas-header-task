interface IconCloseProps {
  handleClick?: () => void;
}

export const IconClose = ({ handleClick }: IconCloseProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={32}
    fill="none"
    cursor="pointer"
    onClick={handleClick}
  >
    <rect
      width={40}
      height={4}
      x={6.828}
      y={0.5}
      fill="#1E1E1E"
      rx={2}
      transform="rotate(45 6.828 .5)"
    />
    <rect
      width={40}
      height={4}
      x={4}
      y={28.784}
      fill="#1E1E1E"
      rx={2}
      transform="rotate(-45 4 28.784)"
    />
  </svg>
);
