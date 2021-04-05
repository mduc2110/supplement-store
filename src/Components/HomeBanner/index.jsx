import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './homeBanner.css';
function HomeBanner() {

    return (
        <div className="home__banner">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <div className="overlay"></div>
                    <img src="https://images.unsplash.com/photo-1579722822163-0504256cf3a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="overlay"></div>
                    <img src="https://images.unsplash.com/photo-1579722822163-0504256cf3a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="overlay"></div>
                    <img src="https://images.unsplash.com/photo-1579722822163-0504256cf3a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt=""/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HomeBanner
