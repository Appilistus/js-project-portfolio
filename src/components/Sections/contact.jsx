import styled from "styled-components"
import profileImage from "../../images/hello3.png"
import { Icon } from "../common/icons"
import { Heading2, Paragraph } from "../common/typography"

export const Contact = () => {
    return (
        <ContactContainer>
            <img 
                src={profileImage} 
                alt="Asako Kanno profile picture"
                className="contact-image"
            />
            <ContactInfo>
                <Heading2>Let's talk</Heading2>
                <Paragraph>Asako Kanno</Paragraph>
                <Paragraph>asako.k1317@outlook.com</Paragraph>
                <Icon name="linkedin" size={28} />
                <Icon name="github" size={28} />
            </ContactInfo>
        </ContactContainer>
    )
}

// Styled component below

const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    img {
        width: 300px;
        height: auto;
    }
`

const ContactInfo = styled.div`
    padding-top: 20px; 
`