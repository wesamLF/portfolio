
const RelativeSkills = () => {
    return (
        <div className="bg-blued-300 p-16 flex flex-row justify-start items-center flex-wrap gap-20">
            <div className='flex justify-center items-center flex-col '>
                <img src="../../../tech_icons/git.svg" alt="main image" className='w-20 h-16 md:max-w-md ' />
                <span className=' font-semibold text-lg'>Git</span>
            </div>
            <div className=' flex justify-center items-center flex-col '>
                <img src="../../../tech_icons/docker.svg" alt="main image" className='w-20 h-16 md:max-w-md ' />
                <span className=' font-semibold text-lg'>Docker</span>
            </div>
           
        </div >)
}

export default RelativeSkills