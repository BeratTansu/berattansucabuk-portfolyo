import { useEffect, useRef } from 'react'
import ProjectCard from '../../components/ui/ProjectCard'
import './Projects.css'

const PROJECTS = [
    {
        num: '01',
        title: 'Tnsup',
        desc: 'A full-stack social platform for organizing sports events. Users can create listings, apply, chat in real-time, and follow each other.',
        tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'WebSocket', 'JWT'],
        link: '#',
    },
]

function Projects() {
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
        <section id="projects" className="projects" ref={sectionRef}>
            <div className="projects__container">
                <div className="fade-up">
                    <p className="projects__label">Portfolio</p>
                </div>
                <div className="fade-up" style={{ transitionDelay: '0.08s' }}>
                    <h2 className="projects__title">
                        Selected <span>Works</span>
                    </h2>
                </div>
                <div className="projects__list">
                    {PROJECTS.map((project, index) => (
                        <div key={project.title} className="fade-up" style={{ transitionDelay: `${0.15 + index * 0.1}s` }}>
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
