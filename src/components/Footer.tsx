import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import UnstyledLink from "./UnstyledLink";

const Footer = () => {
  const logo = "./images/logo2.png";
  return (
    <footer
      className="footer bg-white border-t relative pt-1 px-6"
      id="contacts"
    >
      <div className="container lg:max-w-6xl mx-auto px-4">
        <div className="py-8 flex flex-wrap items-center justify-between">
          <div className="sm:w-full flex flex-col sm:flex-row items-center w-full justify-between lg:space-y-0 space-y-8">
            <div className="flex">
              <img src={logo} alt="logo_2" className="h-[6rem] w-[6rem]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-center sm:text-start text-black uppercase md:mt-0 mb-2">
                Навигация
              </span>
              <div className="flex flex-row space-x-20">
                <div className="flex flex-col">
                  <span className="my-1">
                    <a
                      href="#services"
                      className="text-black text-md filter hover:brightness-110"
                    >
                      Услуги
                    </a>
                  </span>
                  <span className="my-1">
                    <a
                      href="#responsibilities"
                      className="text-black text-md filter hover:brightness-110"
                    >
                      Обязанности
                    </a>
                  </span>
                  <span className="my-1">
                    <a
                      href="#activity"
                      className="text-black text-md filter hover:brightness-110"
                    >
                      Деятельность
                    </a>
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="my-1">
                    <a
                      href="#certificates"
                      className="text-black text-md filter hover:brightness-110"
                    >
                      Сертификаты
                    </a>
                  </span>
                  <span className="my-1">
                    <a
                      href="#interview"
                      className="text-black text-md filter hover:brightness-110"
                    >
                      Интервью
                    </a>
                  </span>
                  <span className="my-1">
                    <a
                      href="#contactUs"
                      className="text-black text-md filter hover:brightness-110"
                    >
                      Контакты
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <span className="font-bold text-black text-center sm:text-start uppercase md:mt-0">
                Социальные сети
              </span>
              <div className="flex space-x-2">
                <UnstyledLink
                  href="https://www.facebook.com/a.narymbetov"
                  className="group flex items-center p-3 border rounded-md text-[#1059b2]"
                >
                  <FaFacebookF className="group-hover:scale-150 transition transform duration-200 ease-out" />
                </UnstyledLink>
                <UnstyledLink
                  href="https://www.instagram.com/energy_analytics/"
                  className="group p-3 border rounded-md text-[#f00075]"
                >
                  <FaInstagram className="group-hover:scale-150 transition transform duration-200 ease-out" />
                </UnstyledLink>
                <UnstyledLink
                  href="https://t.me/EnergyAnalytics"
                  className="group p-3 border rounded-md text-[#61a8de]"
                >
                  <FaTelegramPlane className="group-hover:scale-150 transition transform duration-200 ease-out" />
                </UnstyledLink>
              </div>
              <div className="flex space-x-2">
                <UnstyledLink
                  href="https://www.linkedin.com/in/abzal/"
                  className="group p-3 border rounded-md text-[#027bb5]"
                >
                  <FaLinkedin className="group-hover:scale-150 transition transform duration-200 ease-out" />
                </UnstyledLink>
                <UnstyledLink
                  href="mailto:narymbetov@gmail.com"
                  className="group p-3 border rounded-md text-black"
                >
                  <IoMail className="group-hover:scale-150 transition transform duration-200 ease-out" />
                </UnstyledLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
