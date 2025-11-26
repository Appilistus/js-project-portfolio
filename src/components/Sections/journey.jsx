import styled from "styled-components";
import journey from "../../data/journey.json"
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
                        <JourneyCard {...item} />
                    )}
                />
            </JourneySection>
        </>
    )
}

// Styled component below

const JourneySection = styled.div`
    margin: 64px 0;
    padding: 0 120px;
`