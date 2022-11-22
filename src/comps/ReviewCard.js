import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const ReviewCard = () => {
    const dp = 'https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FIMG_20220930_WA_0000_02_Swastik_Vasistha_f53028ec2b.jpg&w=1920&q=75'
    return (
        
            <div className="h-80 rounded-lg shadow-xl p-4 m-10 w-80 flex items-center justify-center">
                <div className="flex flex-col py-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos placeat quis officiis expedita quidem repudiandae minima nobis, similique aut praesentium, soluta iste, quam doloremque impedit esse doloribus suscipit id.</p>
                    <div className="flex flex-row justify-between px-2 py-10">
                        <div className="flex justify-center items-center">

                            <img src={dp} alt="" className='rounded-full h-12 w-12' />

                            <div className="flex flex-col px-2 items-start">
                                <p className='font-bold text-md'>Swastik Vasistha</p>
                                <p className='text-sm text-gray-500'>DSA Course</p>
                            </div>

                        </div>
                        <div className="text-orange-500 flex flex-row">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default ReviewCard