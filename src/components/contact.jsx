import profileImage from "../images/hello3.png"
import { Icon } from "./icons"

export const Contact = () => {
    return (
        <section className="contact-container">
            <img 
                src={profileImage} 
                alt=""
                className="contact-image"
            />
            <div className="contact-info">
                <h2>Let's talk</h2>
                <p>Asako Kanno</p>
                <p>asako.k1317@outlook.com</p>
                <Icon name="linkedin" size={28} />
                <Icon name="github" size={28} />
            </div>
        </section>
    )
}