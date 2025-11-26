import styled from "styled-components"
import githubIcon from "../../images/github.png"
import linkedinIcon from "../../images/linkedin.png"

export const Icon = ({ name, size= 28 }) => {
    const icons = {
        github: githubIcon,
        linkedin: linkedinIcon,
    }

    const selectedIcon = icons[name]

    return (
        <img
            src={selectedIcon}
            alt={name + " icon"}
            style={{ width: size, height: size}}
            className="icon"
        />
    )
}

export const IconRow = styled.div`
    display:flex;
    gap: 18px;
    margin-top: 30px;
`