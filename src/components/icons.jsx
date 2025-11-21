import githubIcon from "../images/github.png"
import linkedinIcon from "../images/linkedin.png"

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
