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

export const JourneyCard = ({image, date, title, text, link }) => {
    return (
        <Card>
            <div>
                <img
                    src={image}
                    alt=""
                    className="card-image"
                />
                <Heading4>{date}</Heading4>
                <Heading3>{title}</Heading3>
                <Paragraph>{text}</Paragraph>
            </div>
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
    height: 950px;
    flex-shrink: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
        width: 400px;
        height:300px;
        object-fit: cover;
        margin-bottom: 20px;
    }
`
const ProjectLinks = styled.div`
    display:flex;
    justify-content: space-between;
    gap: 16px;
`

const ButtonWrapper = styled.div`
    margin-top: auto;
`