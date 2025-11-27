import styled from "styled-components"
import githubIcon from "../../images/github.png"
import linkedinIcon from "../../images/linkedin.png"

export const Icon = ({ name, size= 28, href }) => {
    const icons = {
        github: githubIcon,
        linkedin: linkedinIcon,
    }

    const labels = {
        github: "Open Github profile",
        linkedin: "Open Linkedin profile",
    }

    const selectedIcon = icons[name]
    const label = labels[name]

    return (
        <a
            href={href}
            target="_blank"
            aria-label={label}
        >
            <img
                src={selectedIcon}
                alt={`${name} icon`}
                style={{ width: size, height: size}}
            />
        </a>
    )
}

export const IconRow = styled.div`
    display:flex;
    gap: 18px;
    margin-top: 30px;

    @media (max-width: 1440px) {
        display: flex;
        justify-content: center;
    }
`