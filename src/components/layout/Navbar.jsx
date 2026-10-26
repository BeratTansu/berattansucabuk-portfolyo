import { useState, useEffect } from 'react'
import NavIcon from '../ui/NavIcon'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#" className="navbar__logo">BTC</a>

      <div className="navbar__right">
        <a href="#projects" className="navbar__link">Projects</a>
        <a href="#contact" className="navbar__link">Contact</a>
        <a href="/Berat_Tansu_Cabuk_CV.pdf" target="_blank" rel="noopener noreferrer" className="navbar__link">Resume</a>
        <div className="navbar__divider" />
        <a href="https://github.com/BeratTansu" target="_blank" rel="noopener noreferrer" className="navbar__social" aria-label="GitHub">
          <NavIcon type="github" size={18} />
        </a>
        <a href="https://www.linkedin.com/in/berat-tansu-cabuk/" target="_blank" rel="noopener noreferrer" className="navbar__social" aria-label="LinkedIn">
          <NavIcon type="linkedin" size={18} />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
