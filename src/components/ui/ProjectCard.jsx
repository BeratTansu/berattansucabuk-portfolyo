function ProjectCard({ title, description, technologies, link }) {
    return (
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <p className="text-orange-400 text-sm mb-4">{technologies}</p>
            <a href={link} className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm">Live Demo</a>
        </div>
    )
}

export default ProjectCard