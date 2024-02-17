import { workflowType } from "../../../../public/projectsData"

const Workflow = ({ workflow }: {
    workflow: workflowType[]
}) => {
    return (
        <div>
            <h3 className=" text-2xl md:text-3xl font-medium leading-tight text-primary">
                Workflow
            </h3>
            <ol className="border-l border-neutral-300  mt-2 md:mt-7">
                {workflow.map((wf, i) => (
                    <li key={i}>
                        <div className="flex-start flex items-center pt-3">
                            <div
                                className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 "></div>

                        </div>
                        <div className="mb-6 ml-4 mt-2">
                            <h4 className="mb-1.5 text-xl font-semibold">{wf.title}</h4>
                            <p className="mb-3 text-neutral-500 text-base md:text-lg [&>a]:text-blue-500 [&>a]:underline [&>a]:cursor-pointer	" dangerouslySetInnerHTML={{ __html: wf.desc }}>

                            </p>
                        </div>
                    </li>
                ))}


            </ol></div>
    )
}

export default Workflow