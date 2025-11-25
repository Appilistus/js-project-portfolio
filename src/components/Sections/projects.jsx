import styled from "styled-components"
import projects from "../../data/projects.json"
import { ProjectCard } from "../common/cards"
import { Heading2 } from "../common/typography"

export const Projects = () => {
    return (
        <>
            <Heading2>Featured Projects</Heading2>
            <ProjectWrapper>
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
            </ProjectWrapper>
        </>
    )
}

// Styled component below

const ProjectWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin-top: 40px;
`