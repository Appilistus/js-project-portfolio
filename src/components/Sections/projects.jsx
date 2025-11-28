import styled from "styled-components"

import projects from "../../data/projects.json"
import { ProjectCard } from "../common/cards"
import { Heading2 } from "../common/typography"
import { Carousel } from "../../styles/carousel"
import business from "../../images/business.png"
import recipe from "../../images/recipe.png"
import weather from "../../images/weather.png"
import accessibility from "../../images/accessibility.png"

export const Projects = () => {
    return (
        <>
            <ProjectContainer>
                <Heading2>Featured Projects</Heading2>

                <Carousel
                    data={projects.projects}
                    renderItem={(project, index) => (
                        <ProjectCard
                            {...project}
                            image={imgMap[project.image]} 
                            index={index}
                        />
                    )}
                />
            </ProjectContainer>
        </>
    )
}

const imgMap = {
    business,
    recipe,
    weather,
    accessibility
}

const ProjectContainer = styled.div`
    width: 100%;

    @media (max-width: 1440px) {
        margin: 0;
        padding: 0;
    }
`