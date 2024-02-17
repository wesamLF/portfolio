import { docsType } from "..";



export const projectTwoDocs: docsType =
{
    id: 2,
    last_update:"2024/1/25",
    abstraction: "Full-stack platform that automate the process of generating catchy and engaging titles for YouTube videos. The system collects relevant data and utilizes the power of GPT3.5-turbo.",
    project_desc: "Full-stack platform that automate the process of generating catchy and engaging titles for YouTube videos. The system collects relevant data and utilizes the power of GPT3.5-turbo.",
    github_link:"https://github.com/wesamLF/TitlesGenerator",
    live_link:"https://65cef4eea30c9b79cea98cd4--bright-ganache-2eada3.netlify.app/home",
    goals: [
       
        "Reusable components",
        "Clean code and easy to maintain and integrate new features to it",
        "Good Architecture & File Structure"
    ],
    objectives: [
        "Collecting data of trending videos on YouTube",
        "Allowing the user to download the data as CSV files",
        "Connecting to ChatGPT and generate titles based on (Trending videos or Most viewed)",
        "Analyze the given data and display the best genres as suited.",
        "Responsive and user friendly UI"
    ],
    tech_and_libraries: [
        {
            name: "TypeScript",
            desc: "TypeScript is a programming language that extends JavaScript by adding static typing to it. Used to enforce types for variables, function parameters, and return values. This helps catching potential errors during development "
        },
        {
            name: "Express",
            desc: "Is a web application framework for Node.js. It provides a set of features and tools to build REST API."
        },
        {
            name: "React",
            desc: ` Open-source front-end JavaScript library used to build the reusable user interfaces components.
            This project took an advantage of react hooks
            such as <span>useState</span>, <span>useRef</span>, <span>useReducer</span>, <span>useContext</span>.`
        },
        {
            name: "Shadcn UI",
            desc: "A collection of reusable components that we can copy and paste into our apps.” This reusable component collection are flexible and easy to style, scale and maintain"
        },
        {
            name: "Puppeteer",
            desc: "Puppeteer is a Node.js library developed by Google that provides a high-level API for controlling headless browsers or browsers through the DevTools Protocol. Mainly used for web scraping, automating web tasks, and taking screenshots or generating PDFs of web pages. "
        },
        {
            name: "Tailwind CSS",
            desc: "Tailwind CSS is a utility-first CSS framework that provides a set of pre-designed, low-level utility classes that you can use directly in your HTML markup to style your elements"
        },
        {
            name: "GPT-3.5-turbo",
            desc: "GPT-3.5-turbo is one of the most powerful language models created by OpenAI.It used for analyzing the given data and generate data as needed. "
        },
        {
            name: "lucide-react",
            desc: "Used for the icons"
        },
        {
            name: "Zod",
            desc: "Zod is a TypeScript-first schema declaration and validation library. From a simple string to a complex nested object. Zod is designed to be as developer-friendly as possible to eliminate duplicative type declarations"
        }
    ],
    Functionalities: {
        front_end: [
        
            {
                title: "Loading & Error handling",
                desc: "The table should display the trending videos, each element of the table should give the user the ability to open a new tab of that video or its channel owner with ease",
                features: [
                    
                ],
                images: [
                    "../projectsData/projectTwoData/projectTwoImages/loading-error-handling.gif",
                    
                ]
            },{
                title: "Trending videos table",
                desc: "The table should display the trending videos, each element of the table should give the user the ability to open a new tab of that video or its channel owner with ease",
                features: [
                    "Post the youtube genre (gaming, movies, etc) videos to the API"
                    
                ],
                images: [
                    "../projectsData/projectTwoData/projectTwoImages/trending-videos.png",
                   
                ]
            },
            {
                title: "Trending videos genres",
                desc: "The system post the current trending videos to our Restful API to analyze it and send back the top 5 trending genres based on the received data.",
                features: [
                    "Post the trending videos to the API",
                    "Display genres in ascending order",
                    "Display a description for each genre",
                ],
                images: [
                    "../projectsData/projectTwoData/projectTwoImages/trending-genres.png",

                ]
            },
            {
                title: "Generate titles from Most viewed videos table",
                desc: `In this case the system should provide a table to display each generated title these elements are <span>Accordion<span> to show the related video information.`,
                features: [
                    "Post the tobic of the videos to the API ",
                    "Display generated titles",
                    "Display related video information",
                    "Give the user the ability to copy the title with one click. For mobile users accessibility",
                  
                ],
                images: [
                    "../projectsData/projectTwoData/projectTwoImages/gtfmv1.png",
                    "../projectsData/projectTwoData/projectTwoImages/gtfmv2.png",

                ]
            },
            {
                title: "Generate titles from Ai videos table",
                desc: "Similar to the above but we don't need the table to display the related video information",
                features: [
                    "Post the topic of the videos to the API ",
                    "Display generated titles",
                ],
                images: [
                    "../projectsData/projectTwoData/projectTwoImages/gtfai.png",

                ]
            },
            
        ],
        back_end: [
            {
                title: "RESTful api",
                desc: " The system offers a secure RESTful API (Representational State Transfer), enabling seamless communication and integration with external applications.",
                features: [
                    "Retrieve plain or filtered cooked data",
                    "Post data to the server form more processing",
                    "Rate Limiting. For more secure api"
                ],
                images: [
                    

                ]
            },
            {
                title: "Scrape trending videos",
                desc: "Using Puppeteer the system is able to scrape YouTube trending video and filter them. And the system provides an api to manage the data within the system or to send it to another 3rd party services for more processing.",
                features: [
                    "Scrape trending (movies, gaming, music, etc.) videos ",
                    "Filter data",
                ],
                images: [
                   
                ]
            },

            {
                title: "Connecting to GPT3.5-turbo",
                desc: "OpenAI provides an API for chatgpt chatcompletion that can be easily trained. The system sends to GPT:",
                features: [
                    "Prompts",
                    "The context",
                    'The previous chat for more training"',
                    "Data (trending videos, most viewed videos, etc) For further analysis",
                    "The Data format",
                ],
                images: [
                   

                ]
            },
            {
                title: "Generate titles",
                desc: "After providing OpenAI chatcompletion API with specific data and prompts the titles generation begins",
                features: [
                    "Titles from most viewed videos",
                    "Titles from most trending videos",
                    "Titles from chatGPT AI prompts"
                ],
                images: [
                   

                ]
            },
            {
                title: "Downloadable data",
                desc: "The end-user can easily download the data as (.CSV) files using our API endpoints",
                features: [
                    "Download .CSV file",
                ],
                images: [
                    

                ]
            },
           
        ]
    },
    workflow: [{
        title: "Planning",
        desc: "I have been always interested in web scraping and browser automation, so the initial idea was to create a system that scrape youtube trending and download it as .CSV files"
    }, {
        title: "Setting up the back-end ( Express, Puppeteer, TypeScript )",
        desc: "I build the server with Express using TypeScript because it makes it easier to develop safe and more maintainable code. Puppeteer is a library developed by Google that provides you with headless browsers and other tools to automate browser functionality to scrape data and filter it."

    },
    {
        title: "Setting up OpenAi api ",
        desc: "After finishing scraping data I needed to do something useful with the data, so I hooked the server to ChatGPT via their API to analyze the data and generate some data via prompts messages. "
    }, {
        title: "Testing the API in POSTMAN",
        desc: ""
    }, {
        title: "Creating the Front-end",
        desc: "Setting up and installing all the dependency: React, TypeScript, Tailwind, Shadcn ui."
    },
    {
        title: "Tables",
        desc: "It was a straight forward task thanks to Shadcn ui, it made this task much easier and more fun."
    },
     {
        title: "version v0.1.0",
        desc: "Testing the website in local machine Updating the back-end and front-end as needed along the way..."
    },
    {
        title: "deploying version v1.0.0",
        desc: `I chose <a href="https://render.com/" target="_blank">Render's</a> web service for the backend to create an environment for puppeteer. 
        And <a href="https://www.netlify.com/" target="_blank">netlify</a> for the front-end static site. You can see the website live at 
        <a href="https://65cef4eea30c9b79cea98cd4--bright-ganache-2eada3.netlify.app/home" target="_blank">wee titles.</a>`
    },

    ],
    futrue_goals: [
       
        {
            title: "Generate thumbnails",
            isFinished: false
        },
        {
            title: "Generate video intros",
            isFinished: false
        },
        {
            title: "Authentication system",
            isFinished: false
        },
        {
            title: "Making the project stand alone SaaS (software as a service) with payment gateways",
            isFinished: false
        }
    ]

}
