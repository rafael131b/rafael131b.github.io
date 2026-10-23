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

export function WhatsAppMark({ size = 20 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className="wa-mark">
      <path
        d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.3 21.7l4.8-1.3A9.8 9.8 0 1 0 12 2.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        fill="currentColor"
        d="M8.7 7.1c.2-.4.5-.4.8-.4h.6c.2 0 .4.1.5.4l.8 1.9c.1.2 0 .5-.1.7l-.6.7c-.1.1-.2.3-.1.5.6 1.1 1.5 2 2.6 2.6.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.3.4.5 0 .6-.2 1.4-.8 1.8-.6.4-1.5.6-2.5.3-1.6-.5-3.1-1.5-4.3-2.8-1.1-1.2-1.9-2.6-2.2-4-.2-1 .1-1.7.6-2.1Z"
      />
    </svg>
  );
}

export function DownloadMark({ size = 20 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14" />
    </svg>
  );
}
