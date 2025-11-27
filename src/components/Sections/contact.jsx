import styled, { keyframes } from "styled-components"
import profileImage from "../../images/hello4.png"
import { Icon, IconRow } from "../common/icons"
import { iconLinks } from "../../data/iconLinks.json"
import { Heading2, Paragraph } from "../common/typography"


export const Contact = () => {
    return (
        <ContactContainer>
            <ImageContainer>
                <img 
                    src={profileImage} 
                    alt="Asako Kanno profile picture"
                    className="contact-image"
                />
            </ImageContainer>
            <ContactInfo>
                <AnimatedHeading>Let's talk</AnimatedHeading>
                <Paragraph>Asako Kanno</Paragraph>
                <Paragraph>asako.k1317@outlook.com</Paragraph>
                <IconRow>
                    {iconLinks.map((icon) => (
                        <Icon
                            key={icon.name}
                            name={icon.name}
                            href={icon.href}
                        />
                    ))}
                </IconRow>
            </ContactInfo>
        </ContactContainer>
    )
}

// Styled component below

const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 64px 0;

    img {
        width: 500px;
        height: auto;
    }

    @media (max-width: 1440px) {
        flex-direction: column;
    }
`

const ImageContainer = styled.div`
    @media (max-width: 1440px) {
        display: flex;
        justify-content: center;
    }
`

const ContactInfo = styled.div`
    padding-top: 20px; 

    @media (max-width: 1440px) {
        text-align: center;
    }
`

const wobble = keyframes`
    0% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(1.03) rotate(2deg); }
    50% { transform: scale(1.03) rotate(-2deg); }
    75% { transform: scale(1.03) rotate(1deg); }
    100% { transform: scale(1) rotate(0deg); }
`

const AnimatedHeading = styled(Heading2)`
    animation: ${wobble} 2s ease-in-out infinite;
    display: inline-block;
    transform-origin: center;
`