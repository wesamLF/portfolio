import { projectType } from "../../../../../public/local_data/projectsData"
import Badge from "../../../../components/Badge"
import MainBTN from "../../../../components/MainBTN"

const MyProject = ({ projectData }: { projectData: projectType }) => {
    return (
        <div className="flex flex-col  xl:flex-row-reverse glass2 mb-32 p-2 md:p-2">
            <div className=" flex-[1.4]">
                <div className="h-full flex justify-center items-center ">
                    <img src={projectData.thumbnail} alt="main image" className=' object-contain w-full rounded-2xl ' />
                </div>
            </div>
            <div className=" flex-1 py-2 md:py-10 px-2 md:px-5">
                <div className="h-full flex justify-between gap-3 md:gap-10 flex-col">
                    <div className="flex flex-col gap-1 md:gap-3">

                        <div className="text-xl md:text-4xl font-semibold ">
                            {projectData.project_title} </div>
                        <p className=" text-sm md:text-xl">
                            {projectData.project_desc}
                        </p>


                       
                        <div className="flex flex-wrap gap-1">
                            {projectData.project_main_teck_skills.map((skill , i) => (
                                <Badge key={i} name={skill} variant={skill} />
                            ))}


                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3">
                        <MainBTN name={"documentation"} url={`../docs/${projectData.id}`} blank={true} />


                        <MainBTN name={"github "} url={projectData.github_link} blank={true}/>


                        <MainBTN name={"Live"} url={projectData.live_link} blank={true}/>



                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyProject