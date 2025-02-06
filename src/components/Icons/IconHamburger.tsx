interface IconHamburgerProps {
  handleClick?: () => void;
}

export const IconHamburger = ({ handleClick }: IconHamburgerProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={22}
    fill="none"
    cursor="pointer"
    onClick={handleClick}
  >
    <rect width={40} height={4} fill="#1E1E1E" rx={2} />
    <rect width={30} height={4} x={5} y={9} fill="#1E1E1E" rx={2} />
    <rect width={40} height={4} y={18} fill="#1E1E1E" rx={2} />
  </svg>
);
