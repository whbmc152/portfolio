import React, {useEffect} from "react";

import Intro from "../components/intro";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

import ScrollReveal from "scrollreveal";

const Home = () => {
    
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '40px',
      duration: 1500,
      delay: 300,
    })
  
    //intro page
    sr.reveal('.intro_avatar', {origin: 'right'})
    sr.reveal('.intro_avatar_shadow', {opacity: 1, origin: 'right'})
    sr.reveal('.intro_greeting', {origin: 'left'})
    sr.reveal('.intro_curvedarrow, .intro_randomlines, .intro_geometricbox', {distance: '0px', delay: 1000})
  
    //about page
    sr.reveal('.about_title, .about_info', {origin: 'right'})
    sr.reveal('.about_perfil_container', {origin: 'left'})
  
    //projects
    sr.reveal('.projects_grid_item', {origin: 'top', interval: 200})
  
    //contact page
    sr.reveal('.contact_mailbox', {origin: 'bottom'})
    sr.reveal('.contact_title, .contact_note, .contact_note_social', {origin:'top'})
  })

    return (
    <div className="h-full w-full flex-col justify-center items-center m-0 bg-[var(--body-color)]">
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>)
}

export default Home;