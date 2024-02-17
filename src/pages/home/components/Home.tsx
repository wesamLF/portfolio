import Nav from "../../../components/Nav"
import AboutMe from "./aboutMe/AboutMe"
import Contact from "./contact/Contact"
import Hero from "./hero/Hero"
import MyProjectsContainer from "./myProjects/MyProjectsContainer"
import TechSkillsContainer from "./techSkills/TechSkillsContainer"

const Home = () => {


  return (
    <>     
       <Nav />
      <section className='px-2 pb-16 md:px-40 max-w-[1800px] mx-auto'>
        <Hero />
        <TechSkillsContainer />
        <AboutMe />
        <MyProjectsContainer />
        <Contact />
      </section>

    </>


  )
}

export default Home