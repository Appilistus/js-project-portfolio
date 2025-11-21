import projects from "../data/projects.json"
import { ProjectCard } from "./cards"

export const Project = () => {
    return (
        <>
            <h2 className="section-title">Featured Projects</h2>
            <div className="project-cards">
                {projects.projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        netlify={project.netlify}
                        github={project.github}
                    />
                ))}
            </div>
        </>
    )
}