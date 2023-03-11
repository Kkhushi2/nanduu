import React from 'react'
import { Navbar } from './Navbar'

export const Home = () => {
    return (
        <div className="relative w-full " >
            <Navbar />
            <div id="home" className="p-50 bg-white relative lg: dark:bg-white h-screen" style={{ display: "flex", justifyContent: 'center', alignItems: "center" }} >
                <img src="logoo.jpg" width={900} style={{ marginLeft: 220 }} />
                <div className="relative xl:container m-auto px-6 md:px-12 lg:px-full overflow-hidden"  >


                    <div className="lg:flex">
                        <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">

                            <span className="block font-semibold text-gray-500 dark:text-gray-400">

                            </span>
                            <div className="md:mt-0 lg:absolute -left-0 -top-0 lg:w-6/12">
                                <div className="relative w-full">
                                    <div
                                        aria-hidden="true"
                                        className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 "
                                    />
                                    {/* <img
  src="pills.png"
  className="absolute top-0 left-0 bottom-0 "
  alt="wath illustration"
  loading="lazy"
  width={320}
  height={280}
/>
          */}
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}