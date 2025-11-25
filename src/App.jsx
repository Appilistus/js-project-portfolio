// import { GlobalStyle } from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { Projects } from "./components/Sections/projects";
import { Contact } from "./components/Sections/contact";
import { Hero } from "./components/Sections/hero";
import { Journey } from "./components/Sections/journey";
import { Skills } from "./components/Sections/skills";
import { Tech } from "./components/Sections/tech";

export const App = () => {
  return (
    <>
      <Hero />

      <Skills />

      <Projects />

      <Tech />

      <Journey />

      <Contact />

    </>
  )
}
