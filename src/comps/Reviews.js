import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    
    return (
        <section className='px-10 pb-10'>
            <div className='px-10 font-bold'>
                <p className='text-xl text-code_help_blue'>WHAT STUDENT SAYS</p>
                <h1 className='text-5xl'>Recent Reviews</h1>
            </div>

            <div className="my-6 m-auto">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    // slidesPerGroup={3}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide> <ReviewCard /> </SwiperSlide>
                    <SwiperSlide> <ReviewCard /> </SwiperSlide>
                    <SwiperSlide> <ReviewCard /> </SwiperSlide>
                    <SwiperSlide> <ReviewCard /> </SwiperSlide>
                    <SwiperSlide> <ReviewCard /> </SwiperSlide>
                    

                </Swiper>

                {console.log()}
            </div>

        </section>
    )
}

export default Reviews