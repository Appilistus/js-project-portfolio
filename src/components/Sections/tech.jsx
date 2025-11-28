import styled from "styled-components"
import { Heading2, Paragraph } from "../common/typography"

export const Tech = () => {
    return (
        <TechSkills data-aos="fade-up">
            <Heading2>Tech</Heading2>
            <Paragraph>
                HTML, CSS, JavaScript, React, Node.js, Mongo DB, <br />
                Web Accessibility, APIs, mob-programming, <br />
                pair-programming, GitHub.
            </Paragraph>
        </TechSkills>
    )
}

// Styled component below

const TechSkills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`