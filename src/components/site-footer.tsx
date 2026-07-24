const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.4-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.37c.85 0 1.7.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.96-2.35 4.83-4.58 5.09.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10 10 0 0 0 12 2Z" />
  </svg>
);

export function SiteFooter() {
  return (
    <footer>
      <a className="logo" href="/" aria-label="ALLDAY PROJECT" />
      <code>// built by developers, for developers</code>
      <a aria-label="GitHub" href="https://github.com/ALLDAY-PROJECT-dev/allday-project" target="_blank" rel="noreferrer">
        <GithubIcon />
      </a>
    </footer>
  );
}
