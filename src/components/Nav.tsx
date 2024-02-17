import { NavHashLink } from 'react-router-hash-link'
import SocialsIcons from './SocialsIcons'

const Nav = () => {


  return (
    <nav className=' text-lg md:text-xl font-semibold flex flex-col justify-center items-center pt-0 md:pt-6 md:sticky top-0 z-20'>
      <div className="glass py-2 inline-block ">
        <ul className='flex justify-between items-center flex-wrap gap-5 md:gap-10 px-5 md:px-10'>
          <li className='py-1 hover:text-custom-secondary'>
            <NavHashLink
              to=".#home"
              smooth   
            >
              Home
            </NavHashLink >
          </li>
          <li className='py-1 hover:text-custom-secondary'>
            <NavHashLink
              to=".#aboutme"
              smooth
            >
              About Me
            </NavHashLink >
          </li>
          <li className='py-1 hover:text-custom-secondary'>
            <NavHashLink
              to=".#projects"
              smooth 
            >
              Projects
            </NavHashLink >
          </li>
          <li className='py-1 hover:text-custom-secondary'>
            <NavHashLink
              to=".#contact"
              smooth 
            >
              Contact
            </NavHashLink >
          </li>

        </ul>
      </div>
      <div className=" md:absolute top-8 right-1 lg:right-8 py-5 lg:py-0">
        <SocialsIcons variant="colored"/>
      </div>

    </nav >
  )
}

export default Nav