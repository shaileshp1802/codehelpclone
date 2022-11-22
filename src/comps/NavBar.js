import React from 'react'
import { BiMoon } from 'react-icons/bi'

const NavBar = () => {

    const logo = 'https://res.cloudinary.com/codehelp/image/upload/v1664350403/codehelpFinalAssets/qdo970k2vrxj8kefd1zt.svg'

    return (
        <>
            <div className="fixed w-full z-[1000]">
                <div className="fixed top-0 left-0 right-0 w-full h-20 backdrop-blur-md shadow-md">
                    <nav className='fixed top-0 left-0 right-0 flex justify-around h-20 text-lg'>
                        <div className=" flex items-center justify-center h-full">
                            <img src={logo} alt="" />
                        </div>

                            <ul className='hidden lg:flex h-full items-center justify-center gap-x-6'>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Courses</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>

                        <div className="hidden lg:flex h-full items-center justify-center gap-x-6">
                            <a href="/" className='px-7 py-2  rounded-md outline-code_help_blue outline outline-1'>Dashboard</a>
                            <a href="/" className='px-7 py-2 bg-code_help_blue rounded-md text-white'>Start Learning</a>
                            <a href="/" className='text-code_help_blue'><BiMoon size={30} /></a>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar