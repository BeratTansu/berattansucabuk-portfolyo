import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <span className="footer__logo">BTC</span>
        <span className="footer__divider">|</span>
        <span className="footer__copy">&copy; 2026 Berat Tansu Çabuk</span>
      </div>
      <span className="footer__tech">Built with React & Tailwind</span>
    </footer>
  )
}

export default Footer
