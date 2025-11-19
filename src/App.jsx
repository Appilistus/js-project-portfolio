// import { button } from "../src/components/button";
// import { cards } from "../src/components/cards";
// import { contact } from "../src/components/contact";
// import { font } from "../src/components/font";
// import { hero } from "../src/components/hero";
// import { journey } from "../src/components/journey";
// import { skills } from "../src/components/skills";
// import { tech } from "../src/components/tech";

import Icon from "./components/icons"

export const App = () => {
  return (
    <>
      <hero>
        <div className="hero-text">
          <h3>Hi, I'm Asako!</h3>
          <h1>Frontend<br />Developer</h1>
          <p>Creating friendly experiences for everyday life.</p>
          <p>I like building web experiences that feel clear, warm, and supportive.</p>
          <p>I care about usability and thoughtful design, and I believe technology should simply help people feel at ease in their daily lives.</p>
        </div>
        <div>
          <img src="#" alt="" />
        </div>
        <Icon></Icon>
        <Icon></Icon>
      </hero>

      <div className="skills">
        <h2>Skills</h2>
      </div>

      <div className="projects">
        <h2>Featured Projects</h2>

      </div>

      <div className="tech">
        <h2>Tech</h2>
      </div>

      <div className="journey">
        <h2>My Journey</h2>
      </div>

      <div className="contact">
        <h2>Let's talk</h2>
      </div>
    </>
  )
}
