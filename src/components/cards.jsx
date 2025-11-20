import { Button } from "./button"

export const ProjectCard = ({image,title,description,tags,netlify,github}) => {
    return (
        <div className="card">
            <img 
                src={image} 
                alt="" 
                className="card-image"
            />
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                <li>{tags}</li>
            </ul>

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
        </div>
    )
}

export const JourneyCard = ({image, date, title, text, link }) => {
    return (
        <div className="card">
            <img
                src={image}
                alt=""
                className="card-image"
            />
            <h4>{date}</h4>
            <h3>{title}</h3>
            <p>{text}</p>
            <Button 
                href={link}
                target="_blank"
                className="article-link"
            >
                Read Article
            </Button>
        </div>
    )
}
