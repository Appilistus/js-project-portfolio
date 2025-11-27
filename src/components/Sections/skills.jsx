import styled from "styled-components"
import skills from "../../data/skills.json"
import { Heading2, Heading3 } from "../common/typography"
import { StyledUl } from "../../styles/theme"

export const Skills = () => {
    return (
        <>
            <Heading2>Skills</Heading2>
            <MySkills>
                {skills.skills.map((category) => {
                    return (
                        <SkillColumn
                            key={category.title}
                        >
                            <Heading3>{category.title}</Heading3>
                            <StyledUl>
                                {category.skills.map((skill) => {
                                    return (
                                        <li
                                            key={skill}
                                            className="all-skills"
                                        >
                                            {skill}
                                        </li>
                                    )
                                })}
                            </StyledUl>
                        </SkillColumn>
                    )
                })}
            </MySkills>
        </>
    )
}

// Styled component below

const MySkills = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;

    @media (max-width: 1440px) {
        flex-direction: column;
        align-items: center;
    }
`

const SkillColumn = styled.div`
    text-align: center;
    width: 180px;
    padding-right: 30px;

    &:not(:last-child) {
        border-right: 2px solid #1d5c5a;
    }

    @media (max-width: 1440px) {
        &:not(:last-child) {
            border-right: none;
            border-bottom: 2px solid #1d5c5a;
            padding-bottom: 20px;
            margin-bottom: 20px;
        }
    }
`