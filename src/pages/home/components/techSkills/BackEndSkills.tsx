import { HelpCircle } from "lucide-react"

const BackEndSkills = () => {
    return (
        <div className=" py-16 flex flex-row justify-between flex-wrap gap-5">
            <div className=' flex justify-center items-center flex-col'>
                <img src="../../../tech_icons/express.svg" alt="main image" className='w-20 h-16 md:max-w-md ' />
                <span className=' font-semibold text-lg'>Express</span>
            </div>
            <div className=' flex justify-center items-center flex-col'>
                <img src="../../../tech_icons/python.svg" alt="main image" className='w-20 h-16 md:max-w-md ' />
                <span className=' font-semibold text-lg'>Python</span>
            </div>
            <div className=' flex justify-center items-center flex-col'>
                <img src="../../../tech_icons/mongodb-icon-1.svg" alt="main image" className='w-20 h-16 md:max-w-md ' />
                <span className=' font-semibold text-lg'>MongoDB</span>
            </div>
            <div className=' flex justify-center items-center flex-col'>
                <img src="../../../tech_icons/mysql.svg" alt="main image" className='w-20 h-16 md:max-w-md ' />
                <span className=' font-semibold text-lg'>Mysql</span>
            </div>
            <div className=' flex justify-center items-center flex-col'>
                <img src="../../../tech_icons/strapi-2.svg" alt="main image" className='w-20 h-16 md:max-w-md ' />


                <span className=' font-semibold text-lg '>strapi
                    <a href="https://strapi.io/faq" target="_blank">
                        <HelpCircle className="inline w-4 h-4 text-blue-600 cursor-pointer" />

                    </a>

                </span>

            </div>
            <div className=' flex justify-center items-center flex-col'>
                <img src="../../../tech_icons/rest-api.svg" alt="main image" className='w-20 h-16 md:max-w-md ' />
                <span className=' font-semibold text-lg'>Rest Api</span>
            </div>
        </div >)
}

export default BackEndSkills