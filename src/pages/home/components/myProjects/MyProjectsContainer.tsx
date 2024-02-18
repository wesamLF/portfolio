import { Code, Code2 } from "lucide-react"
import MyProject from "./MyProject"
import { projectsData } from "../../../../../public/local_data/projectsData"
const MyProjectsContainer = () => {

    return (
        <section className='pt-10 md:pt-32' id="projects">
            <h1 className='text-center text-2xl font-bold mb-10'><Code className='inline  text-custom-inverted' /> Projects <Code2 className='inline text-custom-inverted' /></h1>

            {projectsData.map((projectData , i)=> <MyProject key={i} projectData={projectData}/>)}

        </section >
    )
}

export default MyProjectsContainer