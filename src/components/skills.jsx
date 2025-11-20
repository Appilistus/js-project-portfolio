import skills from "../data/skills.json"

export const Skills = () => {
    return (
        <section className="skills">
            <div className="skill-title">
                <h2>Skills</h2>
            </div>
            <div className="my-skills">
                {skills.skills.map((category) => {
                    return (
                        <div
                            key={category.title}
                            className="skills-column"
                        >
                            <h3>{category.title}</h3>
                            <ul>
                                {category.skills.map((skill) => {
                                    return (
                                        <li
                                            key={skill}
                                            className="all-skills"
                                        >
                                            {skill}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}