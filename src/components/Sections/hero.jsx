import styled, { keyframes } from "styled-components"
import ProfileImg from "../../images/profile4.png"
import { Icon } from "../common/icons"
import { iconLinks } from "../../data/iconLinks.json"
import { Heading1, Heading3, Paragraph } from "../common/typography"
import { IconRow } from "../common/icons"

export const Hero = () => {
    return (
        <HeroSection>
            <VisuallyHiddenH1>Asako Kanno - Frontend Developer</VisuallyHiddenH1>

            <div>
                <Heading3 as="h2">Hi, I'm Asako!</Heading3>
                <AnimatedHeading1 
                    as="h3" 
                    className="hero-title"
                >
                    Frontend <br />Developer
                </AnimatedHeading1>
                <Paragraph>Creating friendly experiences for everyday life.<br /><br />
                    I like building web experiences that feel clear, warm, and supportive.<br /><br />
                    I care about usability and thoughtful design, and I believe technology should simply help people feel at ease in their daily lives.
                </Paragraph>
                <IconRow>
                    {iconLinks.map((icon) => (
                        <Icon
                            key={icon.name}
                            name={icon.name}
                            href={icon.href}
                        />
                    ))}
                </IconRow>
            </div>
            <ImageContainer>
                <img
                    src={ProfileImg}
                    alt="Asako Kanno profile image"
                    className="hero-image"
                />
            </ImageContainer>
        </HeroSection>
    )
}

// Styled component below

const VisuallyHiddenH1 = styled.h1`
    position: absolute;
    left: -9999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
`

const HeroSection = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 128px 128px 0 128px;

    // fade-in animation
    opacity: 0;
    transform: translateY(24px);
    animation: fadeInHero 1.8s ease-out forwards;

    @keyframes fadeInHero {
        from {
            opacity: 0;
            transform: translateY(24px)
        }
        to {
            opacity: 1;
            transform: translateY(0)
        }
    }

    img {
        width: 500px;
        height: auto;
    }

    @media (max-width: 1440px) {
        flex-direction: column;
        padding: 64px 24px 0;
        
        img {
            justify-content: center;
        }
    }
`

const ImageContainer = styled.div`
    @media (max-width: 1440px) {
        display: flex;
        justify-content: center;
    }
`

const breathe = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.03); }
    100% { transform: scale(1); }
`
const AnimatedHeading1 = styled(Heading1)`
    animation: ${breathe} 3s ease-in-out infinite;
`