import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

import 'swiper/css';
import ReviewCard from './ReviewCard';

const Reviews = () => {

    return (
        <section className='px-10 pb-10'>
            <div className='px-10 font-bold'>
                <p className='text-xl text-code_help_blue'>WHAT STUDENT SAYS</p>
                <h1 className='text-5xl'>Recent Reviews</h1>
            </div>

            <div className="my-6">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        820: {
                            slidesPerView: 3,
                            spaceBetween: 50
                        }
                    }
                    }
                    
                >
                    <SwiperSlide> <ReviewCard /> </SwiperSlide>
                    <SwiperSlide> <ReviewCard /> </SwiperSlide>
                    <SwiperSlide> <ReviewCard /> </SwiperSlide>


                </Swiper>

                {console.log()}
            </div>

        </section >
    )
}

export default Reviews