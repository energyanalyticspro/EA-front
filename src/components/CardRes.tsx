import React from "react";
import { useRouter } from "next/navigation";

function CardRes({ data }: any) {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col border border-gray-300 rounded-md h-full relative">
      <div className="w-full">
        <img
          src={"./images/img1.jpg"}
          className="h-[200px] w-full rounded-t-md object-cover"
        />
      </div>
      <div className="flex flex-col space-y-2 p-6 h-full">
        <h4>{data.title}</h4>
        <p>{data.desc}</p>
        <div className="pt-14 flex w-full justify-end">
          <button
            onClick={() => router.push("#contactUs")}
            className="absolute bottom-4 flex justify-center text-center items-center gap-2 text-white bg-[#2B3991] hover:bg-[#232a55] font-normal w-1/2 px-2 py-1 rounded"
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardRes;
