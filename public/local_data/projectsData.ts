import { variantProps } from "../../src/components/Badge";

export type projectType = {
    id:number;
    project_title: string;
    project_desc: string;
    project_main_teck_skills: variantProps[];
    
  
    github_link: string;
    live_link: string;
    thumbnail:string;
}


export const projectsData: projectType[] = [
    {
        id:1,
        project_title: `Wee Games `,
        project_desc: "Full-stack e-commerce website specializing in selling digital game codes, offering users a seamless experience to browse, purchase, and manage their cart. The system includes registration system, and a user feedback system with ratings and comments.",

       
        project_main_teck_skills: [
            "react", "strapi", "bulma", "js","SQLite"
        ],
        github_link:"https://github.com/wesamLF/wee-reviews",
        live_link:"https://65cef2b61813bf7d170ae630--strong-muffin-827b05.netlify.app/home",
        thumbnail:"../../../projectsData/projectOneData/projectOneImages/main.png"

    },
    {
        id:2,
        project_title: `Titles Generater`,
        project_desc: "Full-stack platform that automate the process of generating catchy and engaging titles for YouTube videos. The system collects relevant data and utilizes the power of GPT3.5-turbo.",

       
        project_main_teck_skills: [
            "react", "express", "tailwind", "ts","shadcn"
        ],
        github_link:"https://github.com/wesamLF/wee-titles",
        live_link:"https://65cef4eea30c9b79cea98cd4--bright-ganache-2eada3.netlify.app/home",
        thumbnail:"../../../projectsData/projectTwoData/projectTwoImages/main.png"


    },
    
]