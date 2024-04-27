import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-content text-center">
          <Link href="/" className="logo">
            <img src="/assets/logo/small.gif" alt="Logo" />
          </Link>
          <ul className="footer-menu">
            <li>
              <Link href="/">Twitter</Link>
            </li>
            <li>
              <Link href="/bio">Telegram</Link>
            </li>
          </ul>
          <p className="copyright">
             <span>$GhostFace Token</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
