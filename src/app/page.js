"use client";

// Components
import Header from "./components/Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles
import s from "./home.module.css";
import "swiper/css";

export default function Home() {
  return (
    <div className={s.page}>
      {/* <Swiper
        className={s.swiperContainer}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={true}
      >
        <SwiperSlide>
          <div className={s.slideOne}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.slideTwo}>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.slideThree}>
          </div>
        </SwiperSlide>
      </Swiper> */}
      <section className={s.firstSection}>
        <div className={s.wrapper}>
          <div className={s.textBlock}>
            <h1 className={s.title}>Официальный дилер ICI Caldaie в России</h1>
            <p className={s.subTitle}>
              ТСК МЕРА с гордостью представляет европейского лидера по
              производству котельного оборудования для промышленного и жилого
              сектора
            </p>
            <button>Перейти в каталог</button>
          </div>
        </div>
      </section>
    </div>
  );
}
