import { useState, useEffect, useRef } from 'react'
import NavIcon from '../../components/ui/NavIcon'
import './Contact.css'

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
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

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <section id="contact" className="contact" ref={sectionRef}>
            <div className="contact__container">
                <div className="fade-up">
                    <p className="contact__label">Contact</p>
                </div>
                <div className="fade-up" style={{ transitionDelay: '0.08s' }}>
                    <h2 className="contact__title">
                        Let's <span>Talk</span>
                    </h2>
                </div>

                <div className="contact__grid">
                    {/* Form */}
                    <div className="fade-up" style={{ transitionDelay: '0.15s' }}>
                        <div className="contact__form">
                            <input
                                className="contact__input"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                            />
                            <input
                                className="contact__input"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                            />
                            <textarea
                                className="contact__textarea"
                                name="message"
                                placeholder="Your Message"
                                rows={6}
                                value={form.message}
                                onChange={handleChange}
                            />
                            <button className="contact__submit">
                                Send Message
                                <NavIcon type="arrow" size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="fade-up" style={{ transitionDelay: '0.25s' }}>
                        <div className="contact__info">
                            <div className="contact__info-group">
                                <p className="contact__info-label">Email</p>
                                <a href="mailto:berattansu00@gmail.com" className="contact__info-link">
                                    <NavIcon type="mail" size={16} />
                                    berat.tansu.cabuk@gmail.com
                                </a>
                            </div>

                            <div className="contact__info-group">
                                <p className="contact__info-label">Social</p>
                                <div className="contact__social-list">
                                    <a href="https://github.com/BeratTansu" target="_blank" rel="noopener noreferrer" className="contact__info-link">
                                        <NavIcon type="github" size={16} />
                                        GitHub
                                        <NavIcon type="arrow" size={12} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/berat-tansu-%C3%A7abuk-02b55b244/" target="_blank" rel="noopener noreferrer" className="contact__info-link">
                                        <NavIcon type="linkedin" size={16} />
                                        LinkedIn
                                        <NavIcon type="arrow" size={12} />
                                    </a>
                                </div>
                            </div>

                            <div className="contact__info-group">
                                <p className="contact__info-label">Location</p>
                                <p className="contact__info-value">
                                    <NavIcon type="map" size={16} />
                                    Istanbul, Turkey
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
