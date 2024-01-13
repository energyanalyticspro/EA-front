"use client";

import React from "react";
import CardRes from "./CardRes";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { Pagination, Autoplay } from "swiper/modules";

const images = [
  {
    src: "./images/carousel/img1.png",
  },
  {
    src: "./images/carousel/img2.png",
  },
  {
    src: "./images/carousel/img3.png",
  },
  {
    src: "./images/carousel/img4.png",
  },
];

const data = [
  {
    img: "./images/img1.jpg",
    title: "Сбор и анализ больших данных",
    desc: "Создание и управление базой данных",
  },
  {
    img: "./images/img1.jpg",
    title: "Маркетинговое исследование и анализ",
    desc: "Анализ цен на продукцию, потребительских тенденций и конкурентного окружения",
  },
  {
    img: "./images/img1.jpg",
    title: "Стратегическое планирование",
    desc: "Разработка стратегии, бизнес-плана и бизнес-процессов",
  },
  {
    img: "./images/img1.jpg",
    title: "Финансовый анализ",
    desc: "Выявление областей для оптимизации затрат и увеличения дохода",
  },
  {
    img: "./images/img1.jpg",
    title: "Оценка проектов и мониторинг",
    desc: "Оценка стоимости и рентабельности проектов (NPV, IRR, POT и т.д.)",
  },
  {
    img: "./images/img1.jpg",
    title: "Другие консультации",
    desc: "По индивидуальному запросу клиента",
  },
];

function ResponsBlock() {
  return (
    <section
      id="responsibilities"
      className="container lg:max-w-6xl mx-auto py-20 justify-center space-y-10 flex flex-col items-center"
    >
      <div className="flex flex-col justify-center items-center w-full space-y-10 px-6 md:w-4/5 md:px-0">
        <h1 className="">Что входит в работу?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data &&
            data.map((item, ind) => {
              return <CardRes key={ind} data={item} />;
            })}
        </div>
        <div className="flex flex-col justify-center items-center space-y-10 pt-10 w-full h-full">
          <h1>Индустрии</h1>
          <Swiper
            className="w-full h-[350px] sm:h-[450px]"
            loop
            slidesPerView={3}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {images &&
              images.map((item, ind) => {
                return (
                  <SwiperSlide key={ind}>
                    <div className="border rounded-md">
                      <img
                        className="rounded-t-md object-contain  "
                        src={item.src}
                        alt={`картинка${ind}`}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ResponsBlock;
