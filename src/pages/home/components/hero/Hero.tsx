import MainBTN from "../../../../components/MainBTN"
import SocialsIcons from "../../../../components/SocialsIcons"

const Hero = () => {
    return (
        <section className='flex flex-col lg:flex-row  relative ' id="home">
            <div className=" flex-1 z-10 py-16 lg:px-0 lg:py-48">
                <div className=" text-lg">
                    <p className=' text-custom-inverted'>Hello, my name is:</p>
                    <p className='text-xl md:text-4xl font-medium'>Wesam and I am a <span className='bg-gradient-to-r from-[#FC4508] to-[#4c8003] bg-clip-text text-transparent'>
                        web developer </span> with computer science degree, passionate and experienced programmer</p>
                </div>
                <div className="py-5">

                    <SocialsIcons variant={"colored"} />
                </div>
                <div className=" flex gap-3">
                  
                    <MainBTN name="Contact Me" url={".#contact"}/>

                    <MainBTN name="More About Me" url={".#aboutme"}/>
                </div>
            </div>
            <div className="flex-1 z-10">
                <div className="h-full flex justify-center items-center">
                    <img src="../../../svgs/hero-illus.svg" alt="main image" className='h-auto w-full md:max-w-md ' />
                </div>
            </div>
            <img
                className=' absolute bg-redd-300 w-full max-h-full opacity-35'
                src="../../../svgs/hero-bg-desktopScreen.svg"
                alt="background" />
        </section>
    )
}

export default Hero