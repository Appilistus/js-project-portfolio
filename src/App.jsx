import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import { GlobalStyle } from "./styles/globalStyles";
import { Projects } from "./components/Sections/projects";
import { Contact } from "./components/Sections/contact";
import { Hero } from "./components/Sections/hero";
import { Journey } from "./components/Sections/journey";
import { Skills } from "./components/Sections/skills";
import { Tech } from "./components/Sections/tech";

export const App = () => {

  useEffect(() => {
    AOS.init({ 
      duration: 2000 ,
      once: false,
      easing: "ease-out-cubic",
      offset: 200
    })
  }, [])


  return (
    <>

      <GlobalStyle />

      <Hero />

      <Skills />

      <Projects />

      <Tech />

      <Journey />

      <Contact />

    </>
  )
}