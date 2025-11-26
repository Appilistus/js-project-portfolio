import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/scrollbar"
import { Scrollbar, Mousewheel } from "swiper/modules"

import projects from "../../data/projects.json"
import { ProjectCard } from "../common/cards"
import { Heading2 } from "../common/typography"
import { Carousel } from "../../styles/carousel"

export const Projects = () => {
    return (
        <>
            <Heading2>Featured Projects</Heading2>

            <Carousel
                data={projects.projects}
                renderItem={(project) => (
                    <ProjectCard {...project} />
                )}
            />
        </>
    )
}
