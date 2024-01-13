"use client";
import React from "react";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import { MdOutlineConstruction } from "react-icons/md";
import { MdAgriculture } from "react-icons/md";

function ServicesBlock() {
  return (
    <section
      id="services"
      className="container lg:max-w-6xl mx-auto py-20 justify-center space-y-10 flex flex-col items-center"
    >
      <div className="flex flex-col justify-center items-center w-full px-6 md:px-0 md:w-4/5 space-y-4 sm:space-y-10">
        <h1 className="flex">Услуги в 4 направлениях</h1>

        <div className="flex flex-col sm:flex-row justify-between w-full space-x-0 space-y-4 sm:space-y-0 sm:space-x-10">
          <div className="w-full flex flex-row justify-center items-center space-x-3 border border-gray-300 px-4 py-2 rounded-md bg-gray-50 text-[#8EC741]">
            <MdOutlineEnergySavingsLeaf className="w-6 h-6" />
            <h6 className="text-sm sm:text-lg font-semibold">
              Аналитика в энергетике
            </h6>
          </div>
          <div className="w-full flex flex-row justify-center items-center space-x-3 border border-gray-300 px-4 py-2 rounded-md bg-gray-50 text-[#2B3991]">
            <TbSchool className="w-6 h-6" />
            <h4 className="text-sm sm:text-lg font-semibold">
              Аналитика в образовании
            </h4>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full space-x-0 space-y-4 sm:space-y-0 sm:space-x-10">
          <div className="w-full flex flex-row justify-center items-center space-x-3 border border-gray-300 px-4 py-2 rounded-md bg-gray-50 text-[#1D75BB]">
            <MdOutlineConstruction className="w-6 h-6" />
            <h4 className="text-sm sm:text-lg font-semibold">
              Аналитика в строительстве
            </h4>
          </div>
          <div className="w-full flex flex-row justify-center items-center space-x-3 border border-gray-300 px-4 py-2 rounded-md bg-gray-50 text-[#F7C135]">
            <MdAgriculture className="w-6 h-6" />
            <h4 className="text-sm sm:text-lg font-semibold">
              Аналитика в сельском хозяйстве
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesBlock;
