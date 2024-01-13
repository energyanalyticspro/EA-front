"use client";
import React from "react";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

function CardBox({ data }: any) {
  return (
    <div className="w-full flex flex-col space-y-4 border border-black rounded-md p-6 h-[100%]">
      <div></div>
      <div className="border p-1 w-10 h-10 flex items-center justify-center">
        {data.icon}
      </div>
      <h3>{data.title}</h3>
      <p className="text-sm mt-auto text-gray-500">{data.desc}</p>
    </div>
  );
}

export default CardBox;
