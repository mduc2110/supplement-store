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
                >
                <SwiperSlide>
                    <img src="/banner1.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/banner2.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/banner3.jpg" alt=""/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HomeBanner
