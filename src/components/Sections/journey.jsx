import styled from "styled-components";
import journey from "../../data/journey.json"
import img1 from "../../images/img1.png"
import img2 from "../../images/img2.png"
import img3 from "../../images/img3.png"
import { JourneyCard } from "../common/cards";
import { Heading2 } from "../common/typography";
import { Carousel } from "../../styles/carousel"


export const Journey = () => {
    return (
        <>
            <JourneySection>
                <Heading2>My Journey</Heading2>
                
                <Carousel 
                    data={journey.journey}
                    renderItem={(item) => (
                        <JourneyCard 
                            {...item} 
                            image={imageMap[item.image]}
                        />
                    )}
                />
            </JourneySection>
        </>
    )
}

// Styled component below

const JourneySection = styled.div`
    margin: 64px 0;
`

const imageMap = {
    img1,
    img2,
    img3
}