import SocialsIcons from "../../../components/SocialsIcons"
import ProjectDocsContent from "./ProjectDocsContent"
import { useParams } from "react-router-dom"
import { getProjectData } from "../../../../public/projectsData/index"
import { useEffect } from "react"
import { NavHashLink } from "react-router-hash-link"

const Documentation = () => {


    const { id } = useParams()
    const data = getProjectData(id)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    return (
        <main className="bg-white border-2 border-gray-300 px-1 md:px-3 py-10 mx-0 lg:mx-44">
            <div className="w-full text-xl font-semibold border-2 border-black  py-2  shadow-lg shadow-gray-400">
                <ul className='mx-auto flex justify-center items-center flex-col md:flex-row'>
                    <li className='py-1 px-10'>
                        <NavHashLink
                            to="../home#home"
                            smooth
                        >
                            Home
                        </NavHashLink >
                    </li>
                    <li className='py-1 px-10'>
                        <NavHashLink
                            to="../home#contact"
                            smooth
                        >
                            Contact
                        </NavHashLink >
                    </li>
                    <div className="py-1 px-10">
                        <SocialsIcons variant="dark"/>
                    </div>
                </ul>
            </div>
            <div className="py-5 mt-5 flex justify-between">
                <h1 className="text-2xl font-semibold">Documentation, React website</h1>
                <p className="text-gray-500 text-base">Last update: 2024/1/02 </p>
            </div>
            <div className="flex flex-row border px-3 md:px-10 py-14 mb-5 border-gray-300 relative">
                {/* <div className=" flex-1 bg-redd-400  ">
                    <Aside />
                </div> */}
                <div className="">
                    {data ? <ProjectDocsContent projectDocs={data} /> :
                        <h1 className="text-red-700 text-4xl p-10 text-center">invalid params</h1>}
                </div>

            </div>
        </main>
    )
}


export default Documentation