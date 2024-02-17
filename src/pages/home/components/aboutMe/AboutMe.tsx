import { Clapperboard,  } from "lucide-react"
import Timeline from "./Timeline"
const AboutMe = () => {
  return (
    <section className="px-0 pt-10 md:px-10 md:pt-32" id="aboutme">
            <h1 className='text-center text-2xl font-bold'>
                <Clapperboard className='inline text-custom-inverted' />  My Story  <Clapperboard className='inline text-custom-inverted' /></h1>
        <Timeline />
    </section>
  )
}

export default AboutMe