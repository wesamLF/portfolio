
const BackEndFun = () => {
    return (
        <div className=" my-7 bg-slate-50 md:border-2 border-gray-500 md:p-3 md:rounded-md">
            <h4 className='text-xl md:text-2xl text-center font-medium leading-tight text-primary bg-black text-white rounded-md'>Back-End</h4>
            <div className=" text-base md:text-xl font-normal leading-relaxed mt-10 md:mt-16">
                <ol className="space-y-10 list-decimal list-inside ">
                    <li className='' >
                        <span className="text-xl md:text-2xl"> Cart System</span>
                        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
                            <div className="flex-1">
                                <p className=" px-1 md:px-5 mt-1 ">
                                    The website has complete shopping cart system, the user can :
                                    <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside ">
                                        <li>
                                            Add to cart
                                        </li>
                                        <li>
                                            Delete from cart
                                        </li>
                                        <li>
                                            Display their cart
                                        </li>
                                    </ul>
                                    From anywhere on the website
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col  gap-5 justify-center items-center  ">

                                <img src="./projects_images/test/test.png" alt="image" className='h-auto w-full ' />
                                <img src="./projects_images/test/test.png" alt="image" className='h-auto w-full ' />
                            </div>

                        </div>
                    </li>
                    <li className='' >
                        <span className=" text-xl md:text-2xl ">Login Logout UI</span>
                        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
                            <div className="flex-1">
                                <p className=" px-1 md:px-5 mt-1 ">
                                    The system should be displaying either login, signin or logout buttons and routes depending on the context,
                                    the user login session and tokens are saved in the localstorage and cookies.
                                    <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside ">
                                        <li>
                                            Retrieve user data from localstorage and set the context.
                                        </li>
                                        <li>
                                            Display toast notification if (login, logout) successfully
                                        </li>

                                    </ul>
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col  gap-5 justify-center items-center">
                                <img src="./projects_images/test/test.png" alt="main image" className='h-auto w-full ' />
                            </div>
                        </div>
                    </li>
                    <li className='' >
                        <span className=" text-xl md:text-2xl ">Market Page</span>
                        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
                            <div className="flex-1">
                                <p className=" px-1 md:px-5 mt-1 ">
                                    the main component responsible for displaying the
                                    products and handling searching, filters, pagination
                                    <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside ">
                                        <li>
                                            Retrieve products data and displaying them
                                        </li>
                                        <li>
                                            Filtering by "category, genre, ..."
                                           
                                        </li>
                                        <li>
                                            Searching and displaying the searched products
                                        </li>
                                        <li>
                                            Display removie from cart button if the product is already in the cart
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col  gap-5 justify-center items-center">
                                <img src="./projects_images/test/test.png" alt="main image" className='h-auto w-full ' />
                            </div>
                        </div>
                    </li>
                    <li className='' >
                        <span className=" text-xl md:text-2xl ">Product Page</span>
                        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
                            <div className="flex-1">
                                <p className=" px-1 md:px-5 mt-1 ">
                                    This component responsible for displaying the
                                    product details.
                                    <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside ">
                                        <li>
                                            Retrieve product data and display it
                                        </li>
                                        <li>
                                            Disable cart button if the product out of stock
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col  gap-5 justify-center items-center">
                                <img src="./projects_images/test/test.png" alt="main image" className='h-auto w-full ' />
                            </div>
                        </div>
                    </li>
                    <li className='' >
                        <span className=" text-xl md:text-2xl ">Reviews system</span>
                        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
                            <div className="flex-1">
                                <p className=" px-1 md:px-5 mt-1 ">
                                    Allows the user to post new reviews for any product or retrieve his/her old reviews and delete them or edit them
                                    <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside ">
                                        <li>
                                            Create a review
                                        </li>
                                        <li>
                                            Delete a review
                                        </li>
                                        <li>
                                            Retrieve all user`s reviews and display them chronological from newest to oldest
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div className="h-full flex flex-col gap-2 justify-center items-center  flex-1">
                                <img src="./projects_images/test/test.png" alt="main image" className='h-auto w-full ' />


                            </div>
                        </div>
                    </li>
                </ol>

            </div>
        </div>
    )
}

export default BackEndFun