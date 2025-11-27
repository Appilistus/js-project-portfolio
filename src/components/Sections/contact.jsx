import styled from "styled-components"
import profileImage from "../../images/hello4.png"
import { Icon, IconRow } from "../common/icons"
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
                <Heading2>Let's talk</Heading2>
                <Paragraph>Asako Kanno</Paragraph>
                <Paragraph>asako.k1317@outlook.com</Paragraph>
                <IconRow>
                    <Icon name="linkedin" size={28} />
                    <Icon name="github" size={28} />
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
    /* padding: 120px; */

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