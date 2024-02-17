import { techAndLibrariesType } from "../../../../public/projectsData"

const TechAndLibr = ({ tech_and_libraries }: {
    tech_and_libraries: techAndLibrariesType[]
}) => {
    return (
        <div className="">
            <h3 className=" text-2xl md:text-3xl font-medium leading-tight text-primary">
                Technologies & Libraries used

            </h3>
            <div className=" mt-7">
                <ul className="text-base md:text-xl leading-relaxed  space-y-3 list-disc list-inside ">
                    {tech_and_libraries.map((ele, i) => (
                        <li key={i}>
                            <span className="text-xl md:text-2xl font-semibold">{ele.name}</span>
                            <p className=" font-normal ps-5 mt-1 [&>span]:underline" 
                            dangerouslySetInnerHTML={{__html:ele.desc}}>

                            </p>
                        </li>
                    ))}

                </ul>

            </div>
        </div>
    )
}

export default TechAndLibr