import { useEffect, useRef } from 'react'
import profilePhoto from '../../assets/profilePhoto.jpeg'
import './Hero.css'

const TECH_STACK = ['Java', 'Spring Boot', 'Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'Git']

function Hero() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const elements = sectionRef.current.querySelectorAll('.fade-up')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 }
        )

        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="hero" ref={sectionRef}>
            <div className="hero__container">
                {/* Left content */}
                <div>
                    <div className="fade-up">
                        <div className="hero__badge">
                            <span className="hero__badge-dot" />
                            Available for opportunities
                        </div>
                    </div>

                    <div className="fade-up" style={{ transitionDelay: '0.1s' }}>
                        <h1 className="hero__name">
                            Berat Tansu<br />
                            <span className="hero__name-accent">Çabuk.</span>
                        </h1>
                    </div>

                    <div className="fade-up" style={{ transitionDelay: '0.18s' }}>
                        <p className="hero__role">Backend Developer & Software Engineer</p>
                    </div>

                    <div className="fade-up" style={{ transitionDelay: '0.24s' }}>
                        <p className="hero__desc">
                            Backend Developer who picks the hard problems on purpose.
                        </p>
                    </div>

                    <div className="fade-up" style={{ transitionDelay: '0.32s' }}>
                        <div className="hero__actions">
                            <a href="#projects" className="hero__btn-primary">
                                See My Projects
                            </a>
                            <a href="#contact" className="hero__btn-secondary">
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right photo */}
                <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
                    <div className="hero__photo-wrapper">
                        <div className="hero__photo">
                            <img src={profilePhoto} alt="Berat Tansu Çabuk" />
                        </div>
                        <div className="hero__deco-frame" />
                        <div className="hero__deco-square" />
                        <div className="hero__deco-dots">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <span key={i} className="hero__deco-dot" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech strip */}
            <div style={{ position: 'absolute', bottom: 0, left: '3rem', right: '3rem' }}>
                <div className="hero__tech-strip fade-up" style={{ transitionDelay: '0.5s' }}>
                    <span className="hero__tech-label">Tech Stack</span>
                    <span className="hero__tech-divider" />
                    {TECH_STACK.map((tech) => (
                        <span key={tech} className="hero__tech-item">{tech}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
