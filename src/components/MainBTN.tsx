

import { NavHashLink  } from 'react-router-hash-link';


const MainBTN = ({ name, url }: { name: string, url: string }) => {


    return (

        <NavHashLink
            to={url}
            smooth
            className="w-full relative inline-flex items-center justify-center p-0.5 
             text-base md:text-xl font-medium rounded-lg  bg-gradient-to-br from-[#FC4508]  to-[#4c80037a] "
             
        >
            <span className="w-full h-full flex justify-center items-center relative px-5 py-1 transition-all ease-in duration-75 bg-custom-base rounded-md hover:bg-transparent">
                {name}
            </span></NavHashLink >

    )
}

export default MainBTN