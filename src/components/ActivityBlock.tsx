"use client";

import React from "react";
import CardBox from "./CardBox";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { GrCertificate } from "react-icons/gr";
import { BsBook } from "react-icons/bs";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { AiOutlineAudio } from "react-icons/ai";

const data = [
  {
    icon: <TbBrandGoogleAnalytics className="w-6 h-6" />,
    title: "БИЗНЕС-АНАЛИТИК",
    desc: "Консалтинг для компаний в сферах энергетики, образования, строительства, сельского хозяйства, ритейл и логистики",
  },
  {
    icon: <GrCertificate className="w-6 h-6" />,
    title: "СЕРТИФИЦИРОВАННЫЙ АУДИТОР ПО ПОДСЧЕТАМ ЗАПАСОВ",
    desc: "Оценка запасов нефти и газа по отечественным (ГКЗ) и международным стандартам (PRMS/SEC) в более 30 месторождений; \n Управление активами по нефтегазовым месторождениям: Кашаган, Карачаганак, Кожасай, Блок А, Толкын и Боранколь",
  },
  {
    icon: <BsBook className="w-6 h-6" />,
    title: "ЛЕКТОР",
    desc: "Опыт преподавания в университетах Казахстана и Испании: Назарбаев Университет, Сатпаев Университет, КазГЮУ, AlmaU, GBS Барселона и Астана, Атырауский университет нефти и газа",
  },
  {
    icon: <MdOutlineBusinessCenter className="w-6 h-6" />,
    title: "БИЗНЕС-ТРЕНЕР",
    desc: "Проведение семинаров в 50 компаниях по дисциплинам: Управление проектами и рисками, Бизнес-аналитика и Бизнес-статистика, Оценка запасов нефти и газа по PRMS/SEC/ГКЗ, Альтернативные экспортные маршруты нефти Казахстана и другие курсы по индивидуальным запросам клиента",
  },
  {
    icon: <AiOutlineAudio className="w-6 h-6" />,
    title: "АВТОР TELEGRAM-КАНАЛА ENERGY ANALYTICS",
    desc: "#1 Telegram-канал по энергетике и топ-10 по экономике среди казахстанских Telegram-каналов",
  },
];

function ActivityBlock() {
  const getGridItemClasses = (index: any) => {
    if (index <= 3) {
      return "col-span-1";
    }
    return "col-span-2";
  };
  return (
    <section
      id="activity"
      className="container lg:max-w-6xl mx-auto py-10 justify-center space-y-10 flex flex-col items-center"
    >
      <div>
        <h1>Моя деятельность</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center px-6 gap-2 sm:gap-4 w-full lg:w-4/5">
        {data &&
          data.map((item, index) => {
            return (
              <div key={index} className={`sm:${getGridItemClasses(index)}`}>
                <CardBox data={item} />
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default ActivityBlock;
