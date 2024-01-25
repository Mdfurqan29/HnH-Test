import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import style from './style.module.css'
import { Pagination } from 'swiper/modules';
import SliderCards from '../SliderCards/SliderCards';

export default function Section5Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
        }}
        modules={[Pagination]}
        className={style.mySwiper}
      >
        <SwiperSlide className={style.dot}><SliderCards/></SwiperSlide>
        <SwiperSlide><SliderCards/></SwiperSlide>
        <SwiperSlide><SliderCards/></SwiperSlide>
        <SwiperSlide><SliderCards/></SwiperSlide>
        <SwiperSlide><SliderCards/></SwiperSlide>
        <SwiperSlide><SliderCards/></SwiperSlide>
      </Swiper>
    </>
  );
}
