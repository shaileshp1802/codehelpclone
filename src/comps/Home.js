import React from 'react'

const Home = () => {
    const images = 'https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FIMG_20220930_WA_0000_02_Swastik_Vasistha_f53028ec2b.jpg&w=1920&q=75'
    const bg_img = 'https://res.cloudinary.com/codehelp/image/upload/v1664355274/codehelpFinalAssets/ggudduf7qmr7yvjwtcs1.svg'
    const sm_img1 = 'https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcodehelp%2Fimage%2Fupload%2Fv1664562237%2FcodehelpFinalAssets%2Filemyrzwca73s36nuylo.png&w=1920&q=100'
    const sm_img2 = 'https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcodehelp%2Fimage%2Fupload%2Fv1664562288%2FcodehelpFinalAssets%2Fgwpz1kmonhq9a5mtftjo.png&w=1920&q=100'
    const sm_img3 = 'https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcodehelp%2Fimage%2Fupload%2Fv1664562322%2FcodehelpFinalAssets%2Fenxuyvqanj9uvsbzwypn.png&w=1920&q=100'
    return (
        <section name="home" className=" bg-gradient-to-tr from-white via-white to-pink-200">

            <div className='flex flex-col-reverse justify-between items-center h-screen mx-16 xl:flex-row '>
                <div className='text-gray-600'>
                    <h1 className='text-4xl xl:text-6xl font-bold my-4'><span className=' text-code_help_blue'>Learn</span> With Love</h1>
                    <p className='text-2xl xl:text-4xl max-w-md my-4'>The Ultimate Guide To Ace SDE Interviews.</p>

                    <div className="flex gap-4">
                        <a href="/" className='px-9 py-4 bg-code_help_blue rounded-md text-white'>View Courses</a>
                        <a href="/" className='px-9 py-4  rounded-md outline-code_help_blue outline outline-1'>Watch Video</a>
                    </div>

                    <div className="flex gap-4 mt-12">
                        <div className="images flex relative w-40">
                            <div className="absolute top-0 left-0 overflow-hidden"><img src={images} alt="" className='h-12 w-12 rounded-full ' /></div>
                            <div className="absolute top-0 left-8 overflow-hidden"><img src={images} alt="" className='h-12 w-12 rounded-full ' /></div>
                            <div className="absolute top-0 left-16 overflow-hidden"><img src={images} alt="" className='h-12 w-12 rounded-full ' /></div>
                            <div className="absolute top-0 left-24 overflow-hidden"><img src={images} alt="" className='h-12 w-12 rounded-full ' /></div>
                        </div>
                        <div className=""><h2 className='text-black font-bold'>9000+</h2><h2>Happy Students</h2></div>
                    </div>
                </div>

                <div className="h-full flex items-center justify-center">
                    <div className="relative mt-40 lg:mt-0">
                        <img src={bg_img} alt="" />
                        <img src={sm_img1} alt="" className='h-20 lg:h-40 absolute -top-10 left-0 right-0 m-auto'/>
                        <img src={sm_img2} alt="" className='h-20 lg:h-40 absolute top-[50%] left-[15%] m-auto'/>
                        <img src={sm_img3} alt="" className='h-20 lg:h-40 absolute top-[40%]  right-[15%] m-auto'/>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Home