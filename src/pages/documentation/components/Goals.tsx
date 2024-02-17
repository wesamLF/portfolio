
const Goals = ({ goals }: { goals: string[] }) => {
    return (
        <div className="">
            <h3 className=" text-2xl md:text-3xl font-medium leading-tight text-primary">
                Goals <span className=' text-base md:text-lg text-gray-500 font-light'>( personal goals )</span>
            </h3>
            <div className="mt-5 text-base md:text-xl  font-normal leading-relaxed">

                <ul className=" list-disc list-inside">
                    {goals.map((goal , i)=>(
                        <li key={i} className="[&>a]:text-blue-500" dangerouslySetInnerHTML={{__html:goal}}>    
                        </li>
                    ))}

                </ul>

            </div>

        </div>
    )
}

export default Goals