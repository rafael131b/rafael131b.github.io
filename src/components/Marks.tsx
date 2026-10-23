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


export function LinkedInMark({ size = 20 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.35h-4v-4.75c0-1.13-.02-2.6-1.58-2.6-1.59 0-1.83 1.24-1.83 2.52v4.83h-4v-11Z" />
    </svg>
  );
}

export function GitHubMark({ size = 20 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.1 10.1 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}
