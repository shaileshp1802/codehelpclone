import React from 'react'
import { FaReact } from 'react-icons/fa'

const Why = () => {
    const img = 'https://res.cloudinary.com/codehelp/image/upload/v1664557683/codehelpFinalAssets/bkzxjg9fxeaiuej76vdd.png'
    return (
        <section className=''>
            <div className="py-20 relative bg-gray-100">
                <div className="">
                    <img src={img} alt="" className='absolute top-20 z-10' />
                </div>
                <div className="p-10 text-xl text-gray-600 font-bold h-40 flex flex-col justify-center items-center text-center">
                    <p className=' text-code_help_blue text-sm'>WHY CODE-HELP?</p>
                    <h2>Making learning easier and more convenient for you.</h2>
                </div>

                <div className="grid grid-cols-1 gap-y-12 justify-items-center lg:grid-cols-3 lg:gap-x-6 lg:mx-28">

                        <div className=" p-10 w-96 flex flex-col justify-center items-center text-center bg-white rounded-md shadow-lg z-20 border-b-8 border-code_help_blue">
                            <div className="bg-code_help_blue rounded-full p-2 bg-opacity-80"><FaReact size={50} /></div>
                            <h2 className='text-2xl font-semibold my-3'>Data Structure</h2>
                            <div className=""><p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptas modi inventore, in dolor nostrum aspernatur sapiente ipsa et perspiciatis consequuntur dicta eaque id voluptate fuga iure quam labore cupiditate.</p></div>
                        </div>
                        <div className=" p-10 w-96 flex flex-col justify-center items-center text-center bg-white rounded-md shadow-lg z-20 border-b-8 border-code_help_blue">
                            <div className="bg-code_help_blue rounded-full p-2 bg-opacity-80"><FaReact size={50} /></div>
                            <h2 className='text-2xl font-semibold my-3'>Data Structure</h2>
                            <div className=""><p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptas modi inventore, in dolor nostrum aspernatur sapiente ipsa et perspiciatis consequuntur dicta eaque id voluptate fuga iure quam labore cupiditate.</p></div>
                        </div>
                        <div className=" p-10 w-96 flex flex-col justify-center items-center text-center bg-white rounded-md shadow-lg z-20 border-b-8 border-code_help_blue">
                            <div className="bg-code_help_blue rounded-full p-2 bg-opacity-80"><FaReact size={50} /></div>
                            <h2 className='text-2xl font-semibold my-3'>Data Structure</h2>
                            <div className=""><p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptas modi inventore, in dolor nostrum aspernatur sapiente ipsa et perspiciatis consequuntur dicta eaque id voluptate fuga iure quam labore cupiditate.</p></div>
                        </div>
                        <div className=" p-10 w-96 flex flex-col justify-center items-center text-center bg-white rounded-md shadow-lg z-20 border-b-8 border-code_help_blue">
                            <div className="bg-code_help_blue rounded-full p-2 bg-opacity-80"><FaReact size={50} /></div>
                            <h2 className='text-2xl font-semibold my-3'>Data Structure</h2>
                            <div className=""><p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptas modi inventore, in dolor nostrum aspernatur sapiente ipsa et perspiciatis consequuntur dicta eaque id voluptate fuga iure quam labore cupiditate.</p></div>
                        </div>
                        <div className=" p-10 w-96 flex flex-col justify-center items-center text-center bg-white rounded-md shadow-lg z-20 border-b-8 border-code_help_blue">
                            <div className="bg-code_help_blue rounded-full p-2 bg-opacity-80"><FaReact size={50} /></div>
                            <h2 className='text-2xl font-semibold my-3'>Data Structure</h2>
                            <div className=""><p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptas modi inventore, in dolor nostrum aspernatur sapiente ipsa et perspiciatis consequuntur dicta eaque id voluptate fuga iure quam labore cupiditate.</p></div>
                        </div>
                        <div className=" p-10 w-96 flex flex-col justify-center items-center text-center bg-white rounded-md shadow-lg z-20 border-b-8 border-code_help_blue">
                            <div className="bg-code_help_blue rounded-full p-2 bg-opacity-80"><FaReact size={50} /></div>
                            <h2 className='text-2xl font-semibold my-3'>Data Structure</h2>
                            <div className=""><p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptas modi inventore, in dolor nostrum aspernatur sapiente ipsa et perspiciatis consequuntur dicta eaque id voluptate fuga iure quam labore cupiditate.</p></div>
                        </div>

                </div>

            </div>
        </section>
    )
}

export default Why