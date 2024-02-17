import { Code, Code2 } from 'lucide-react'
import FrontEndSkills from './FrontEndSkills'
import BackEndSkills from './BackEndSkills'
import RelativeSkills from './RelativeSkills'

const TechSkillsContainer = () => {
    return (
        <section className='pt-10 px-5 md:px-24 md:pt-32" mt-10 glass' id="techSkills">
            <h1 className='text-center text-2xl font-bold'><Code className='inline  text-custom-inverted' /> Tech Skills <Code2 className='inline text-custom-inverted' /></h1>
            <div className="mt-14">
                <div className="relative inldine-block">
                    <div className="absolute w-full h-3 bg-custom-primary opacity-35 bottom-0"></div>
                    <h2 className=' relative text-xl font-bold z-10'>
                        Front-End:
                    </h2>
                </div>
                
                    <FrontEndSkills />
               
            </div>
            <div className="">
                <div className="relative inlidne-block">
                    <div className="absolute w-full h-3 bg-custom-primary opacity-35 bottom-0"></div>
                    <h2 className=' relative text-xl font-bold z-10'>
                        Back-End:
                    </h2>
                </div>
                <BackEndSkills />
            </div>
            <div className="">
                <div className="relative ">
                    <div className="absolute w-full h-3 bg-custom-primary opacity-35 bottom-0"></div>
                    <h2 className=' relative text-xl font-bold z-10'>
                        Relative Skills:
                    </h2>
                </div>
                <RelativeSkills />
            </div>
        </section>
    )
}

export default TechSkillsContainer