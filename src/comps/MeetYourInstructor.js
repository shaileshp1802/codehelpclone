import React from 'react'

const MeetYourInstructor = () => {
    const profilePic = 'https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FEllipse_392_6b9d901d07.png&w=1920&q=75'
    const amazon = 'https://codehelp.s3.ap-south-1.amazonaws.com/kisspng_amazon_com_logo_retail_brand_publishing_chat_room_logo_5ae868f5383535_1_a6b41bc3a9.png'
    const microsoft = 'https://codehelp.s3.ap-south-1.amazonaws.com/microsoft_logo_png_2398_1_6587a84ffc.png'
    const google = 'https://codehelp.s3.ap-south-1.amazonaws.com/pngegg_1_1_51b5432954.png'
    const bg = 'https://res.cloudinary.com/codehelp/image/upload/v1664480142/codehelpFinalAssets/ggcp5ffn7v6vdnrrd53d.svg'



    return (
        <section className='relative'>
            <div className="py-20 w-[90vw] m-auto ">
                <img src={bg} alt="" className='absolute top-[-95%] left-[-1%] -z-20' />


                <div className="px-10 flex flex-col ">

                    <div className="flex justify-between mb-6">
                        <h1 className='text-2xl font-bold lg:text-4xl'>Meet your<span className=' text-code_help_blue'> Instrutor</span></h1>
                        <a href="/" className='px-4 py-2 bg-code_help_blue rounded-md text-white'>Know more</a>
                    </div>

                    <div className="h-[1px] bg-black mb-6 w-full m-auto"></div>

                    <div className="flex flex-col items-center text-center my-10">
                        <div className="flex flex-col items-center ">
                            <img src={profilePic} alt="" />
                            <div className="text-2xl text-gray-600 my-4"><h1 className='font-bold'>Lover Babbar</h1><h1>Founder, Code-Help</h1></div>
                        </div>
                        <div className="my-20 w-full flex flex-col gap-10 lg:flex-row items-center justify-around">
                            <div className="flex flex-col items-center">
                                <img src={amazon} alt="" />
                                <h2 className='text-xl'>Ex-Amazon,SWE</h2>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={microsoft} alt="" />
                                <h2 className='text-xl'>Ex-Microsoft, SWE</h2>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={google} alt="" />
                                <h2 className='text-xl'>Google ASC, India</h2>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default MeetYourInstructor