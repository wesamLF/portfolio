import { functionalityType } from "../../../../public/projectsData"

const FunctionalityContent = ({ sectionTitle, data }: {
    sectionTitle: string,
    data: functionalityType[]
}) => {
    return (
        <div className=" my-7 bg-slate-50 md:border-2 border-gray-500 md:p-3 md:rounded-md">
            <h4 className='text-xl md:text-2xl text-center font-medium leading-tight text-primary bg-black text-white rounded-md'>{sectionTitle}</h4>
            <div className=" text-base md:text-xl font-normal leading-relaxed mt-10 md:mt-16">
                <ol className="space-y-10 list-decimal list-inside ">
                    {data.map((ele, i) => (
                        <li key={i} className='' >
                            <span className="text-xl md:text-2xl">{ele.title}</span>
                            <div className="flex flex-col  xl:flex-row gap-5 xl:gap-0">
                                <div className="flex-1 ">
                                    <div className=" px-1 md:px-5 mt-1 ">
                                        {ele.desc}
                                        <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside ">

                                            {ele.features.map((feature, i) => (
                                                <li key={i}>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col  gap-5 justify-center items-center  ">

                                    {ele.images?.map((imageSrc, i) => (
                                        <img key={i} src={imageSrc} alt="image" className='h-auto w-full ' />
                                    ))}
                                </div>

                            </div>
                        </li>
                    ))}


                </ol>

            </div>
        </div>
    )
}

export default FunctionalityContent