import { Github, Linkedin, Twitter } from "lucide-react"
import { NavLink } from "react-router-dom"


type socialsIconsType = "dark" | "colored"


const SocialsIcons = ({ variant }: { variant: socialsIconsType }) => {
    return (
        <div className={`${variant == "dark" ? "text-black" : "text-custom-inverted"}`}>

            <div className=" flex items-center flex-row gap-4 ">
                <div  className="hover:text-gray-800">
                    <a href="/files/web-developer.pdf" className=" text-xl font-extrabold" target="_blank" > CV</a>


                </div>
                <NavLink to={"https://github.com/wesamLF"} target="_blank" className="hover:text-gray-800">

                    <Github />
                </NavLink>

                <NavLink to={"https://twitter.com/WesamLF"} target="_blank" className="hover:text-gray-800">

                    <Twitter />
                </NavLink>
                <NavLink to={"https://www.linkedin.com/in/wesam-lafi-0623521b7/"} target="_blank" className="hover:text-gray-800">

                    <Linkedin />
                </NavLink>



            </div>
        </div>
    )
}

export default SocialsIcons