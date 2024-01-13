"use client";

import React, { useState } from "react";

function CardVideo({ src }: any) {
  const [showVideo, setShowVideo] = useState(false);
  const play = "./images/play.svg";
  return (
    <div className="">
      {!showVideo && (
        <div
          className="flex items-center justify-center"
          onClick={() => {
            setShowVideo(true);
          }}
        >
          <img
            className="absolute w-8 sm:w-20 cursor-pointer "
            width={100}
            height={100}
            src={play}
            alt={"play button"}
          />
          <img
            className="h-full w-full object-cover bg-gray aspect-video rounded-lg "
            src={`https://img.youtube.com/vi/${src}/0.jpg`}
            width={1280}
            height={720}
            alt="image"
          />
        </div>
      )}
      {showVideo && (
        <iframe
          src={`https://www.youtube.com/embed/${src}?autoplay=1`}
          className="w-full object-cover bg-gray aspect-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      )}
    </div>
  );
}

export default CardVideo;
