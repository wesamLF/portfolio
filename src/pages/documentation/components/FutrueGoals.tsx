import { futrueGoals } from "../../../../public/projectsData"

const FutrueGoals = ({ futrue_goals }: { futrue_goals: futrueGoals[] }) => {
    return (

        <div className="">
            <h3 className=" text-3xl font-medium leading-tight text-primary">
                Futrue goals
            </h3>

            <div className=" text-xl font-normal leading-relaxed mt-7 " >
                <p className="text-gray-500 text-lg mb-3 ">NOTE: some of these goals are Short-Term Goals but can exceed to be Mid/Long-Term Goals depending on the business requirements.</p>

                <ul className=" space-y-1 list-inside ">
                    {futrue_goals.map((goal, i) => (
                        <li key={i} className="flex items-center text-black">
                            <svg
                                className={`w-3.5 h-3.5 me-2  flex-shrink-0 ${goal.isFinished ? "text-green-500" : "text-gray-500"}`}
                                aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            {goal.title}
                        </li>
                    ))}

                </ul>

            </div>
        </div >
    )
}

export default FutrueGoals