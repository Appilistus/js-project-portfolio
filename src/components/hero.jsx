import { ProfileImg } from "./profile"

export const hero = () => {
    return (
        <>
            <div className="hero-image">
                <ProfileImg />
            </div>
            <div className="hero-text">
                <h3>Hi, I'm Asako!</h3>
                <h1>Frontend <br />Developer</h1>
                <p>Creating friendly experiences for everyday life.</p>
                <p>I like building web experiences that feel clear, warm, and supportive.</p>
                <p>I care about usability and thoughtful design, and I believe technology should simply help people feel at ease in their daily lives.</p>
            </div>
        </>
    )
}

export default hero;


