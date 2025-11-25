import styled from "styled-components"
import { Button } from "./button"
import { Heading3, Heading4, Paragraph } from "./typography"
import { StyledUl } from "../../styles/theme"

export const ProjectCard = ({image,title,description,tags,netlify,github}) => {
    return (
        <Card>
            <img 
                src={image} 
                alt="" 
                className="card-image"
            />
            <Heading3>{title}</Heading3>
            <Paragraph>{description}</Paragraph>
            <StyledUl>
                <li>{tags}</li>
            </StyledUl>

            <div className="project-links">
                <Button 
                    href={netlify} 
                    target="_blank"
                    className="live-link"
                >
                    Live
                </Button>
                <Button
                    href={github} 
                    target="_blank"
                    className="github-link"
                >
                    Code
                </Button>
            </div>
        </Card>
    )
}

export const JourneyCard = ({image, date, title, text, link }) => {
    return (
        <Card>
            <img
                src={image}
                alt=""
                className="card-image"
            />
            <Heading4>{date}</Heading4>
            <Heading3>{title}</Heading3>
            <Paragraph>{text}</Paragraph>
            <Button 
                href={link}
                target="_blank"
                className="article-link"
            >
                Read Article
            </Button>
        </Card>
    )
}

// Styled Component bellow

const Card = styled.div`
    background-color: #fff;
    border-radius: 30px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    flex-direction: center;

    img {
        width: 200px;
        height: auto;
        object-fit: cover;
        border-radius: 12px;
        margin-bottom: 20px;
    }
`
