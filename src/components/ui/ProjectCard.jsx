import { useState } from 'react'
import NavIcon from './NavIcon'
import './ProjectCard.css'

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`project-card ${hovered ? 'project-card--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-card__header">
        <div className="project-card__title-group">
          <span className="project-card__number">{project.num}</span>
          <h3 className="project-card__title">{project.title}</h3>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__demo-btn"
          >
            Live Demo <NavIcon type="arrow" size={14} />
          </a>
        )}
      </div>

      <p className="project-card__desc">{project.desc}</p>

      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-card__tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
