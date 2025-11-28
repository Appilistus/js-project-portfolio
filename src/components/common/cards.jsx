import styled from "styled-components"
import { Button } from "./button"
import { Heading3, Heading4, Paragraph } from "./typography"

export const ProjectCard = ({ image, title, description, netlify, github, index }) => {
    return (
        <Card 
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={index * 250}
        >
            <Content>
                <img 
                    src={image} 
                    alt="project image" 
                />
                <Heading3>{title}</Heading3>
                <Paragraph>{description}</Paragraph>
            </Content>

            <ProjectLinks>
                <Button 
                    href={netlify} 
                    target="_blank"
                    variant="live"
                    ariaLabel={`Open live demo for ${title}`}
                >
                    Live Demo
                </Button>
                <Button
                    href={github} 
                    target="_blank"
                    variant="code"
                    ariaLabel={`Open GitHub for ${title} `}
                >
                    View Code
                </Button>
            </ProjectLinks>
        </Card>
    )
}

export const JourneyCard = ({ image, date, title, text, link, index }) => {
    return (
        <Card
            data-aos="fade-up"
            data-aos-delay={index * 250}
        >
            <Content>
                <img
                    src={image}
                    alt=""
                />
                <Heading4 as="h2">{date}</Heading4>
                <Heading3>{title}</Heading3>
                <Paragraph>{text}</Paragraph>
            </Content>
            <ButtonWrapper>
                <Button 
                    href={link}
                    target="_blank"
                    ariaLabel={`Open article for ${title} `}
                >
                    Read Article
                </Button>
            </ButtonWrapper>
        </Card>
    )
}

// Styled Component bellow

const Card = styled.div`
    width: 400px;
    height: 625px;
    flex-shrink: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 744px) {
        width: 300px;
        height: 555px;
        gap: 16px;

        ${Paragraph} {
            display: none;
        }
    }

    &:hover {
        transform: translateY(-9px) scale(1.08);
    }

    @media (max-width: 1440px) {
        .project-card:hover {
            transform: none;
        }
    }

    img {
        width: 400px;
        height:300px;
        object-fit: cover;
        margin-bottom: 20px;
    }

    @media (max-width: 744px) {
        img {
            width: 300px;
        }
    }

    &.project-card img {
        filter: blur(5px);
        transition: filter 0.6s ease;
    }

    &.project-card:hover img {
        filter: blur(0);
    } 
`
const Content = styled.div`
    flex: 1;
`

const ProjectLinks = styled.div`
    display:flex;
    justify-content: space-between;
    gap: 16px;

    @media (max-width: 1440px) {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
`

const ButtonWrapper = styled.div`
    margin-top: auto;
`