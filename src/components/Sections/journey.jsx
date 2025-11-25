import journey from "../../data/journey.json"
import { JourneyCard } from "../common/cards";
import { Heading2 } from "../common/typography";


export const Journey = () => {
    return (
        <>
            <Heading2>My Journey</Heading2>
            <div className="journey-cards">
                {journey.journey.map((post) => {
                    return (
                        <JourneyCard
                            key={post.title}
                            image={post.image}
                            date={post.date}
                            title={post.title}
                            text={post.text}
                            link={post.link}
                        />
                    )
                })}
            </div>
        </>
    )
}