"use client"

import { categoryLists } from "@/hooks/product";
import { useState } from 'react';
import HeaderMenu from "./HeaderMenu";
import PopupMenu from "./PopupMenu";

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-main lg:min-w-full max-w-screen-xl flex flex-wrap flex-col lg:md:w-auto lg:max-w-fit justify-between px-8">
      <div className="text-2xl font-bold pt-8 text-black lg:ml-auto lg:mr-auto">
        <div className="text-black text-2xl font-bold pb-8 text-center">Artadewana</div>
        <span className="block w-screen h-1 bg-white border-b-4 border-white" />
      </div>
      <button data-collapse-toggle="navbar-hamburger" type="button" className="lg:hidden p-2 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-gray-200 dark:text-gray-400" aria-controls="navbar-hamburger" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div className="items-center justify-center flex-row mr-auto ml-auto">
        <ul className="flex flex-row font-medium my-2 rounded-lg bgt-main">
        {categoryLists.map((category, index) => {
          return (
            <>
              <li>
                <HeaderMenu props={category} title={category} navigateTo="/products" />
              </li>
            </>
          )
        })}
          <li>
        <HeaderMenu title="Hubungi Kami" onClick={() => {
          openPopup()
            }} />
          </li>
        <HeaderMenu title="Tentang Kami" />
              {isPopupOpen && (
          <PopupMenu onClick={closePopup} />
          )}
        </ul>
      </div>
      <div className="hidden w-full" id="navbar-hamburger">
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        {categoryLists.map((category, index) => {
          return (
            <>
              <li>
                <HeaderMenu props={category} title={category} navigateTo="/products" />
              </li>
            </>
          )
        })}
          <li>
        <HeaderMenu title="Hubungi Kami" onClick={() => {
          openPopup()
            }} />
          </li>
          <li>
        <HeaderMenu title="Tentang Kami" />
              {isPopupOpen && (
          <PopupMenu onClick={closePopup} />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}