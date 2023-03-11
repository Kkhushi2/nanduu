import React, { useState } from 'react'


export const Navbar = () => {
    const [show, setshow] = useState("0")
    const [a, seta] = useState(false)

    const handleShowTrue = () => {
        setshow("2/12")
        seta(!a)
    }
    const handleShowFalse = () => {
        setshow("0")
        seta(!a)
    }
    return (
        <>
            <div className="fixed left-0 top-0 z-50 py-1 px-2 bg-sky-200 h-screen">
                <img src='https://cdn-icons-png.flaticon.com/512/2516/2516745.png' className='w-8 h-8 ' onMouseEnter={handleShowTrue}  />
            </div>
            <div className={`fixed left-0 h-screen  bg-white-100 w-${show}  transition-all transition-slowest ease duration-500 ease-in-out z-50 `} onMouseLeave={handleShowFalse}>
                <div className='flex justify-end'>

                    <img src='https://cdn-icons-png.flaticon.com/512/3018/3018465.png' className='w-14 h-14 ' onClick={handleShowFalse}  />
                </div>
                <div className={a ? "w-full flex flex-col gap-3  pt-10 pl-10 text-gray-500 " : "hidden"}>

                    <a href='#home' onClick={handleShowFalse}> <p className='hover:text-gray-900 cursor-pointer hover:text-xl transition-all duration-150 ease-in-out'>Home</p></a>
                    <a href='#about' onClick={handleShowFalse}>  <p className='hover:text-gray-900 cursor-pointer hover:text-xl transition-all duration-150 ease-in-out'>About</p></a>
                    <a href='#wws' onClick={handleShowFalse}> <p className='hover:text-gray-900 cursor-pointer hover:text-xl transition-all duration-150 ease-in-out'>Whom We Serve</p></a>
                    <a href='#contact' onClick={handleShowFalse}> <p className='hover:text-gray-900 cursor-pointer hover:text-xl transition-all duration-150 ease-in-out'>Contact Us</p></a>


                </div>
                <div>

                </div>
            </div>

        </>

    )
}