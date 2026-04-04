import ProjectCard from "../../components/ui/ProjectCard"

const projects = [
    {
        title: "Tnsup",
        description: "A full-stack social platform for organizing sports events.",
        technologies: "Spring Boot · Angular · PostgreSQL · Docker · WebSocket · JWT",
        link: "https://tnsup.app"
    }
]

function Projects() {
    return (
        <section className="bg-gray-900 py-20 px-8" id="projects">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Projects</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
                {projects.map((project, index) => <ProjectCard key={index} title={project.title} description={project.description} technologies={project.technologies} link={project.link} />)}
            </div>
        </section>
    )
}

export default Projects