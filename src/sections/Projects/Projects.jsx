import { useEffect, useRef } from 'react'
import ProjectCard from '../../components/ui/ProjectCard'
import './Projects.css'

const PROJECTS = [
    {
        num: '01',
        title: 'Library Management API',
        desc: 'A layered ASP.NET Core Web API for book lending: Admin/Member roles, loan rules that block deleting books with history, DTOs with AutoMapper, and book status computed from active loans.',
        tags: ['C#', 'ASP.NET Core', 'EF Core', 'PostgreSQL', 'AutoMapper'],
        link: 'https://github.com/BeratTansu/Library-Management-API',
        linkLabel: 'View Code',
    },
    {
        num: '02',
        title: 'Daily Islamic Art',
        desc: 'An Islamic art discovery mobile app built during my internship at Goldframer (Macellan Venture Studio) with an AI-assisted workflow. Daily artwork feed, collections, wallpapers and an Android home-screen widget, backed by a NestJS API and a Next.js admin panel. Not yet published.',
        tags: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'React Native', 'Cloudflare R2'],
        link: 'https://github.com/BeratTansu/daily-islamic-art',
        linkLabel: 'View Code',
    },
    {
        num: '03',
        title: 'Tnsup',
        desc: 'A full-stack social platform for organizing sports events, built with an AI-assisted workflow. Users can create listings, apply, chat in real-time, and follow each other.',
        tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'WebSocket', 'JWT'],
        link: 'https://github.com/BeratTansu/tnsup',
        linkLabel: 'View Code',
    },
    {
        num: '04',
        title: 'Summarize.ai',
        desc: 'An AI-powered text summarizer that supports multiple languages, PDF upload, and user authentication with summary history.',
        tags: ['FastAPI', 'React', 'Tailwind CSS', 'Hugging Face AI', 'JWT', 'Docker'],
        link: 'https://ai-summarizer-chi-six.vercel.app',
    },
    {
        num: '05',
        title: 'FasTravel',
        desc: 'A travel tracking web application for managing and exploring locations. Built as a team project with RESTful API integration.',
        tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'REST API', 'Git'],
        link: 'https://github.com/BeratTansu/FasTravel',
        linkLabel: 'View Code',
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
