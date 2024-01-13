import React from "react";
import CardVideo from "./CardVideo";
const data = [
  {
    link: "https://www.youtube.com/embed/JweYTB_km0o?si=0umaeuGGmfNDXhZY",
    src: "JweYTB_km0o",
  },
  {
    link: "https://www.youtube.com/embed/d3n8XYMuFM8?si=4Ab-JpKT9aZfyCn5",
    src: "d3n8XYMuFM8",
  },
  {
    link: "https://www.youtube.com/embed/S8YVeGvU4zM?si=H2KYcka5E3F0XMs7",
    src: "S8YVeGvU4zM",
  },
  {
    link: "https://www.youtube.com/embed/t-14DIIQBtY?si=EdCpGYmOD1KzlwSK",
    src: "t-14DIIQBtY",
  },
  {
    link: "https://www.youtube.com/embed/K_2I--b0Xw4?si=NrmigGsGaC68hgnG",
    src: "K_2I--b0Xw4",
  },
  {
    link: "https://www.youtube.com/embed/cHJhKVqb2pE?si=9IzDMJOlX6pXOdqH",
    src: "cHJhKVqb2pE",
  },
];

function InterviewBlock() {
  return (
    <section
      id="interview"
      className="container flex flex-col lg:max-w-6xl mx-auto px-6 py-16 justify-center items-center space-y-10"
    >
      <div>
        <h1>Интервью со мной</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data &&
          data.map((item, ind) => {
            return <CardVideo key={ind} src={item.src} />;
          })}
      </div>
    </section>
  );
}

export default InterviewBlock;
