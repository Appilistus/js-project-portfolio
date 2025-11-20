import journey from "../data/journey.json"
import { JourneyCard } from "./cards";


export const Journey = () => {
    return (
        <>
            <h2>My Journey</h2>
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