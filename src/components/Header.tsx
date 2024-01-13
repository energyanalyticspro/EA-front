"use client";

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const logo = "./images/logo.png";
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-2 bg-white sticky left-0 top-0 shadow-md z-50">
        <div className="container lg:max-w-6xl px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <a href="#">
              <img src={logo} alt="Logo" className="h-[4.5rem] w-[4.5rem]" />
            </a>
            <button
              className="text-darkBlue cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <RxHamburgerMenu />
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center justify-center ${
              navbarOpen ? " flex" : " hidden"
            }`}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-x-0 space-y-4 list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm font-medium leading-snug text-black hover:opacity-75"
                  href="#services"
                >
                  УСЛУГИ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm font-medium leading-snug text-darkBlue hover:opacity-75"
                  href="#responsibilities"
                >
                  ОБЯЗАННОСТИ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm font-medium leading-snug text-darkBlue hover:opacity-75"
                  href="#activity"
                >
                  ДЕЯТЕЛЬНОСТЬ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm font-medium leading-snug text-darkBlue hover:opacity-75"
                  href="#certificates"
                >
                  СЕРТИФИКАТЫ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm font-medium leading-snug text-darkBlue hover:opacity-75"
                  href="#interview"
                >
                  ИНТЕРВЬЮ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm font-medium leading-snug text-darkBlue hover:opacity-75"
                  href="#contactUs"
                >
                  КОНТАКТЫ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
