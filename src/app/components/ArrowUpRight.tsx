type ArrowUpRightProps = {
  className?: string;
  size?: number;
};

export function ArrowUpRight({ className, size = 13 }: ArrowUpRightProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      data-arr="1"
      fill="currentColor"
      height={size}
      viewBox="0 0 13 13"
      width={size}
    >
      <path d="M 1.4 13 L 0 11.6 L 9.6 2 L 1 2 L 1 0 L 13 0 L 13 12 L 11 12 L 11 3.4 L 1.4 13 Z" />
    </svg>
  );
}
