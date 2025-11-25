import styled from "styled-components"
import ProfileImg from "../../images/profile3.png"
import { Icon } from "../common/icons"
import { Heading1, Heading3, Paragraph } from "../common/typography"

export const Hero = () => {
    return (
        <HeroSection>
            <div>
                <Heading3>Hi, I'm Asako!</Heading3>
                <Heading1>Frontend <br />Developer</Heading1>
                <Paragraph>Creating friendly experiences for everyday life.</Paragraph>
                <Paragraph>I like building web experiences that feel clear, warm, and supportive.</Paragraph>
                <Paragraph>I care about usability and thoughtful design, and I believe technology should simply help people feel at ease in their daily lives.</Paragraph>
                <Icon name="linkedin" size={28} />
                <Icon name="github" size={28} />
            </div>
            <div>
                <img
                    src={ProfileImg}
                    alt="Asako Kanno profile image"
                    className="hero-image"
                />
            </div>
        </HeroSection>
    )
}

// Styled component below

const HeroSection = styled.div`
    display: flex;
    justify-content: space-around;

    img {
        width: 300px;
        height: auto;
    }

`