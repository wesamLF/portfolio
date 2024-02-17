import { docsType } from "..";



export const projectOneDocs: docsType =
{
    id:1,
    last_update:"2024/2/2",
    abstraction: "Full-stack e-commerce platform specializing in selling digital game codes, offering users a seamless experience to browse, purchase, and manage their cart. The system includes registration system, and a user feedback system with ratings and comments. Allowing them to easily interact with the platform, leaving comments and ratings for games, and have the flexibility to edit or delete their feedback when ever they want. The website ensures that these feedback are instant and accessible to all users.",
    project_desc: "first project desc",
    github_link:"https://github.com/wesamLF/gamesReviews-frontEnd",
    live_link:"https://65cef2b61813bf7d170ae630--strong-muffin-827b05.netlify.app/home",
    goals: [
        `Exposing myself to a real life "complex project"`,
        "Reusable components",
        "Clean code and easy to maintain and integrate new features to it",
        "Good Architecture & File Structure",
    ],
    objectives: [
        "Secure Authentication and Authorization",
        "Responsive and user friendly interface",
        "Scalable database",
        "Reviews and Ratings system so the customers can share their experiences through reviews and ratings",
    ],
    tech_and_libraries: [
        {
            name: "React",
            desc: ` Open-source front-end JavaScript library used to build the reusable user interfaces components.
            This project took an advantage of react hooks
            such as <span>useState</span>, <span>useRef</span>, <span>useReducer</span>, <span>useContext</span>.`
        },
        {
            name: "Strapi",
            desc: ` Strapi is an open-source headless content management system (CMS) that empowers developers to build flexible and scalable APIs quickly.
            I love strapi becuase it uses <a>KOA</a> node.js and it gives you the freedom to custom controller, policies and routes as you need.`
        },
        {
            name: "Bulma",
            desc: "Bulma is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces."
        },
        {
            name: "TanStack FKA (react-query)",
            desc: "TanStack Query is fan favorite by me and a lot of developers, its a powerful and versatile data-fetching library designed for frontend applications. It provides a streamlined, efficient, and flexible way to handle fetching, caching, and updating data from RESTful APIs. Used for fetching and caching data from the back via axios, Also managing the loading, errors states."
        },
        {
            name: "Material-ui",
            desc: "Used for beautiful customizable icons all through the project."
        },
        {
            name: "React-toastify",
            desc: "Allows the system to push easy, customizable toast notifications. For example in case the user logged in successfully or logged out, posted a comment ...etc"
        }
    ],
    Functionalities: {
        front_end: [
            {
                title: "Cart System",
                desc: " The website has complete shopping cart system, the user can:",
                features: [
                    "Add to cart",
                    "Delete from cart",
                    "Display their cart"
                ],
                images: [
                    "../projectsData/projectOneData/projectOneImages/cart.png"
                ]
            },
            {
                title: "Login & Logout system",
                desc: " The system should be displaying either login, signin or logout buttons and routes depending on the context, the user login session and tokens are saved in the localstorage and cookies.",
                features: [
                    "Retrieve user data from localstorage and set the context",
                    "Display toast notification if (login, logout) successfully",
                ],
                images: [
                    "../projectsData/projectOneData/projectOneImages/login1.png",
                    "../projectsData/projectOneData/projectOneImages/login2.gif",
                    

                ]
            },
            {
                title: "Market Page",
                desc: "Market component responsible for displaying the products and handling searching, filters, pagination.",
                features: [
                    "Retrieve products data and displaying them",
                    "Pagination",
                    'Filtering by "category, genre, ..."',
                    "Searching and displaying the searched products",
                    "Display cart icon or remove from cart button if the product is already in the cart",
                ],
                images: [
                    "../projectsData/projectOneData/projectOneImages/market-search.gif"

                ]
            },
            {
                title: "Product Page",
                desc: "This component responsible for displaying the product details.",
                features: [
                    "Retrieve product data and display it",
                    "Disable cart button if the product out of stock",
                ],
                images: [
                    "../projectsData/projectOneData/projectOneImages/product-screenshot.png"

                ]
            },
            {
                title: "Reviews system",
                desc: "Allows the user to post new reviews for any product or retrieve his/her old reviews and delete them or edit them.",
                features: [
                    "Create reviews",
                    "Delete reviews",
                    "Retrieve all user`s reviews and display them chronological from newest to oldest"
                ],
                images: [
                    "../projectsData/projectOneData/projectOneImages/add-review.gif",
                    "../projectsData/projectOneData/projectOneImages/delete-review.gif"

                ]
            }
        ],
        back_end: [
            {
                title: "Store and Retrieve data (products, catgories, reviews, ...)",
                desc: "Strapi made this job easy, by storing the data using SQLite databases and give you UI admin panle to interact with it. Also it provides a public secure RESTful API to do CRUD operation safelly. It provides end-points to:",
                features: [
                    "Post new data",
                    "Get data ",
                    "Delete data",
                    "Update data"
                ],
                images: [
                    "../projectsData/projectOneData/projectOneImages/strapi-adminpanel.png"

                ]
            },
            {
                title: "Authentication and Authorization",
                desc: " Strapi includes built-in authentication and authorization mechanisms to ensure secure access to your API. Strapi uses JWT by default for token-based authentication.",
                features: [
                    "Login & Signin",
                    "JWT authorization",
                    "Unique Emails and Usernames",
                ],
                images: [
                   

                ]
            },
            {
                title: "Custom Controllers and policies",
                desc: "Controllers represent the C in the model-view-controller (MVC) pattern that Strapi uses.This is what I love the most about Strapi, it gives you full control of the back-end. Some of the custom controllers and policies that I created was for:",
                features: [
                    "Ensure that only the owner of the Review can edit, delete and update its own review",
                    "Authorized users can only retrieve their own reviews all at once",
                ],
                images: [
                  

                ]
            },
            
        ]
    },
    workflow: [{
        title: "Planning",
        desc: "planning and picking an idea of a project that is interesting yet challenging, to expose myself to real life project"
    }, {
        title: "Setting up the back-end ( Strapi )",
        desc: ` installing the backend environment and all necessary libraries and tools. creating dummy data, and testing the API using <a>postman</a>.`

    },
    {
        title: "Setting up the front-end ( React + Bulma )",
        desc: "After picking the main colors and the fonts, i started building the file structure and creating the main pages (as files) I created the home page then the market page and testing the API on it, after that i created the product page and so on and so forth until i finished with it"
    }, {
        title: "Creating the cart system",
        desc: "Creating a cart component with the functionality of adding and deleting and store the data into the localstorage of the user using useContext and custom hooks.Integrating the cart system with the market and product component"
    }, {
        title: "Creating the login & sigin system",
        desc: "First i created the user interface and all necessary Forms and Hooks Sending the user info to the back-end api and handle the errors and loading states using (TanStack , axios) Storing the user info and tokens that were recived from the back-end into the website context and the localstorage, For later use when we need to add reviews or to complete an order."
    }, {
        title: "Reviews System",
        desc: `I created a review page so the user can see his/her own reviews. And another separate section in the product page to show the product reviews and allowing the user to create new review.
        strapi provides secure authentication but unfortunately authorization not so much so i had to create custom controller and policies for strapi
                            using <a className="text-blue-500" href="https://koajs.com/" target="_blank">KOA</a>,
                            To ensure that the user can only create a review only by his/her name.`
    }, {
        title: "version v0.1.0",
        desc: "Testing the website in local machine Updating the back-end and front-end as needed along the way"
    },
    {
        title: "deploying version v1.0.0",
        desc: `For the back-end "Strapi" I went with <a href="https://www.digitalocean.com/" target="_blank">Digitalocean</a>. 
        And <a href="https://www.netlify.com/" target="_blank">netlify</a> for the front-end static site. You can see the website live at 
        <a href="https://65cef2b61813bf7d170ae630--strong-muffin-827b05.netlify.app/home" target="_blank">wee games.</a>`
    },



    ],
    futrue_goals: [
        {
            title: "Give the user the ability to change his/her password, email and profile icon.",
            isFinished: false
        },
        {
            title: "Orders management system ",
            isFinished: false
        },
        {
            title: "Payment gateway",
            isFinished: false
        },
       
    ]

}
