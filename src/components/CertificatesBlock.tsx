"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const certificates = [
  {
    src: "/images/certificates/cer1.jpg",
    title: "Членство SPEE по подсчетам запасов нефти и газа",
    sub: "Society of Petroleum Evaluation Engineers",
  },
  {
    src: "/images/certificates/cer2.png",
    title: "MBA, Major in Oil & Gas Management",
    sub: "Geneva Business School",
  },
  {
    src: "/images/certificates/cer3.jpg",
    title: "MSc in Reservoir Geosciences and Engineering",
    sub: "French Institute of Petroleum",
  },
  {
    src: "/images/certificates/cer4.png",
    title: "BSc in Petroleum & Natural Gas Engineering",
    sub: "Middle East Technical University",
  },
];

function CertificatesBlock() {
  return (
    <section
      id="certificates"
      className="container lg:max-w-6xl px-6 md:px-0 text-center mx-auto py-10 justify-center space-y-10 flex flex-col items-center"
    >
      <div>
        <h1>Мои дипломы и сертификаты</h1>
      </div>
      <div className="w-full h-full">
        <Swiper
          className="w-full md:w-3/5 h-[430px] sm:h-[520px]"
          loop
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
          {certificates &&
            certificates.map((item, ind) => {
              return (
                <SwiperSlide key={ind}>
                  <div className="flex flex-col border rounded-md">
                    <img
                      className="rounded-t-md"
                      src={item.src}
                      alt={`сертификат${ind}`}
                    />
                    <div className="flex flex-col p-3 bg-gray-50 rounded-b-md">
                      <h5 className="font-semibold ">{item.title}</h5>
                      <p className="font-normal">{item.sub}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
}

export default CertificatesBlock;
