type Props = { size?: number };

export function ReactMark({ size = 20 }: Props) {
  return (
    <svg width={size} height={size} viewBox="-12 -12 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle r="2" fill="currentColor" stroke="none" />
      <ellipse rx="10.5" ry="4.2" />
      <ellipse rx="10.5" ry="4.2" transform="rotate(60)" />
      <ellipse rx="10.5" ry="4.2" transform="rotate(120)" />
    </svg>
  );
}

export function AngularMark({ size = 20 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" fillRule="evenodd">
      <path d="M12 1.5 2.2 5l1.5 13L12 22.5l8.3-4.5L21.8 5 12 1.5Zm0 2.3 6.4 14.3h-2.4l-1.3-3.2H9.3L8 18.1H5.6L12 3.8Zm0 4.6-1.9 4.5h3.8L12 8.4Z" />
    </svg>
  );
}
