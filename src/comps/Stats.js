import React from 'react'

const Stats = () => {
    const img1 = 'https://res.cloudinary.com/codehelp/image/upload/v1665057951/codehelpFinalAssets/llyckc8wjy60b9bg3i8h.svg'
    const img2 = 'https://res.cloudinary.com/codehelp/image/upload/v1664561943/codehelpFinalAssets/m64udmyhucj2zb42uvyf.svg'
    return (
        <section name='stats' className=''>
            <div className="mt-10 bg-code_help_blue">
                <div className="relative">
                    <img src={img1} alt="" className='absolute top-0' />
                    <img src={img2} alt="" className='absolute top-0 right-0 rotate-180 ' />
                    <img src={img2} alt="" className='absolute bottom-0' />
                    <img src={img1} alt="" className='absolute bottom-0 right-0' />
                    <div className="grid gap-4 grid-cols-2 p-10 lg:grid-cols-4">
                        <div className="text-white font-bold mb-4 flex flex-col justify-center items-center xl:border-r-2">
                            <span className='text-4xl lg:text-5xl mb-3'>700K+</span>
                            <p className=''>Subscribers</p>
                            <a href="/" className='underline'>on Youtube</a>
                        </div>
                        <div className="text-white font-bold mb-4 flex flex-col justify-center items-center xl:border-r-2">
                            <span className='text-4xl lg:text-5xl mb-3'>3K+</span>
                            <p className=''>Subscribers</p>
                            <a href="/" className='underline'>on Youtube</a>
                        </div>
                        <div className="text-white font-bold mb-4 flex flex-col justify-center items-center xl:border-r-2">
                            <span className='text-4xl lg:text-5xl mb-3'>80K+</span>
                            <p className=''>Subscribers</p>
                            <a href="/" className='underline'>on Youtube</a>
                        </div>
                        <div className="text-white font-bold mb-4 flex flex-col justify-center items-center">
                            <span className='text-4xl lg:text-5xl mb-3'>260K+</span>
                            <p className=''>Subscribers</p>
                            <a href="/" className='underline'>on Youtube</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats