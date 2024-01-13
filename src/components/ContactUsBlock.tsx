"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function ContactUsBlock() {
  const message = "Здравствуйте, пишу по поводу...";
  return (
    <div id="contactUs" className="bg-white">
      <section className="container  lg:max-w-6xl mx-auto py-20 justify-center space-y-10 flex flex-col items-center">
        <div>
          <h1>Контакты</h1>
        </div>
        <div className="flex items-center flex-col sm:flex-row justify-center w-full  sm:w-4/5">
          <img src={"./images/contact us.jpg"} className="w-3/4 sm:w-1/2" />
          <div className="w-3/4 sm:w-1/2 flex flex-col space-y-4 items-center justify-center">
            <h2>Связаться со мной</h2>
            <div className="flex flex-col space-y-2 justify-center w-full sm:w-4/5">
              <a
                href={`https://api.whatsapp.com/send?phone=77079596887&text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer flex-row justify-center items-center gap-2 text-white bg-[#56cd6c] hover:bg-[#50b863] font-normal py-2 px-2 rounded"
              >
                <FaWhatsapp className="w-6 h-6" />
                Получить консультацию
              </a>
              <a
                href="https://t.me/EnergyAnalytics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer flex-row justify-center items-center gap-2  text-white bg-[#61a8de] hover:bg-[#5a9acb] font-normal py-2 px-2 rounded"
              >
                <FaTelegramPlane className="w-6 h-6" />
                Подписаться на Telegram-канал
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUsBlock;
