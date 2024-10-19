import React from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay,FreeMode,Navigation,Pagination } from 'swiper/modules'

import Course_Card from './Course_Card'

const CourseSlider = ({Courses}) => {
    return (
        <>
            {Courses?.length ? (
                <Swiper
                spaceBetween={25}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                className="mySwiper max-h-[30rem]"
                breakpoints={{
                    // Large screens (>= 1024px)
                    1024: {
                        slidesPerView: 3, // Show 3 slides on large screens
                    },
                    // Medium screens (>= 768px and < 1024px)
                    768: {
                        slidesPerView: 2, // Show 2 slides on medium screens
                    },
                    // Small screens (< 768px)
                    0: {
                        slidesPerView: 1, // Show 1 slide on small screens
                    },
                }}
                >
            
            
                {Courses?.map((course, i) => (
                    <SwiperSlide key={i}>
                    <Course_Card course={course} Height={"h-[250px]"} />
                    </SwiperSlide>
                ))}
                
                </Swiper>
            ) : (
                <p className="text-xl text-richblack-5">No Course Found</p>
            )}
        </>
    )
}

export default CourseSlider
