"use client";
import React from "react";
import { useRouter } from "next/navigation";

function HeroBlock() {
  const router = useRouter();
  return (
    <section
      className="w-full"
      id="top"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(./images/hero-background.png)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <div className="container flex flex-col sm:flex-row lg:max-w-6xl mx-auto px-6 py-20 justify-center items-center space-y-10 sm:space-y-0 sm:space-x-30">
        <div className="w-[260px] h-[260px] sm:w-96 sm:h-96 flex items-center justify-center sm:w-30 sm:h-30">
          <img
            src={"/images/person.png"}
            alt="person"
            className="h-[260px] w-[260px] sm:w-96 sm:h-96 object-cover"
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col text-center items-center space-y-3">
          <div>
            <h5 className="text-white font-extrabold text-2xl md:text-5xl leading-tight">
              ABZAL NARYMBETOV
            </h5>
            <p className="text-white font-extrabold text-sm sm:text-2xl md:text-lg leading-tight">
              Management Consultant
            </p>
            <p className="text-white font-extrabold text-sm sm:text-2xl md:text-lg leading-tight">
              ‌Бизнес-аналитик
            </p>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            accusantium dolorum magnam quis qui optio voluptas, commodi
            voluptatum impedit earum odio. Alias facere, suscipit provident
            placeat dignissimos veritatis ratione a!
          </p>
          <button
            onClick={() => router.push("#contactUs")}
            className="bg-[#2A3C90] w-1/2 text-white rounded px-2 py-2 text-sm md:text-lg mt-4 font-normal filter hover:brightness-105 transition duration-100"
          >
            Связаться
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroBlock;
