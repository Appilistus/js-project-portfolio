import { Project } from "../src/components/projects";
import { Contact } from "../src/components/contact";
// import { font } from "../src/components/font";
import { Hero } from "../src/components/hero";
import { Journey } from "../src/components/journey";
import { Skills } from "../src/components/skills";
import { Tech } from "../src/components/tech";

export const App = () => {
  return (
    <>
      <Hero />

      <Skills />

      <Project />

      <Tech />

      <Journey />

      <Contact />

    </>
  )
}
