import { useEffect, useRef } from 'react'
import profilePhoto from '../../assets/profilePhoto.jpeg'
import './Hero.css'

const TECH_STACK = ['C#', 'ASP.NET Core', 'EF Core', 'PostgreSQL', 'Java', 'Spring Boot', 'Docker', 'Git']

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
                            Open to internships · Feb 2027
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
                            <a href="/Berat_Tansu_Cabuk_CV.pdf" target="_blank" rel="noopener noreferrer" className="hero__btn-secondary">
                                Download Resume
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
            <div className="hero__tech-wrap">
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
