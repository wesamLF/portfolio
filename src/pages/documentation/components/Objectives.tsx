
const Objectives = ({ objectives }: { objectives: string[] }) => {
    return (
        <div className="">
            <h3 className=" text-2xl md:text-3xl font-medium leading-tight text-primary">
                Objectives
            </h3>
            <div className="mt-5 text-base md:text-xl  font-normal leading-relaxed">

                <ul className=" list-disc list-inside">
                    {objectives.map((ob, i) => (
                        <li key={i}>
                            {ob}
                        </li>
                    ))}

                </ul>

            </div>

        </div>
    )
}

export default Objectives