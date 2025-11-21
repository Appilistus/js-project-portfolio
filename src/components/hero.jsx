import ProfileImg from "../images/profile3.png"
import { Icon } from "./icons"

export const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <h3>Hi, I'm Asako!</h3>
                <h1>Frontend <br />Developer</h1>
                <p>Creating friendly experiences for everyday life.</p>
                <p>I like building web experiences that feel clear, warm, and supportive.</p>
                <p>I care about usability and thoughtful design, and I believe technology should simply help people feel at ease in their daily lives.</p>
                <Icon name="linkedin" size={28} />
                <Icon name="github" size={28} />
            </div>
            <div className="hero-image">
                <img
                    src={ProfileImg}
                    alt="Asako Kanno profile image"
                    className="hero-image"
                />
            </div>
        </section>
    )
}
