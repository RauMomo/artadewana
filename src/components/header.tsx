"use client"

import { categoryLists } from '@/hooks/product';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import HeaderMenu from './HeaderMenu';
import PopupMenu from './PopupMenu';

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
  const [menuClass, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const router = useRouter();

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible bg-main")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

  return (
    <div className="bg-main min-w-fit max-w-screen-xl w-full flex flex-nowrap flex-col md:w-auto lg:max-w-fit container flex-shrink-0 lg:min-w-full z-10">
      <div className="flex flex-row justify-between items-center px-4 lg:px-0 lg:justify-center">
        <div className="flex flex-col items-start justify-between">
          <div className="text-2xl font-bold pt-8 text-black lg:ml-auto lg:mr-auto flex-nowrap">
            <div className="text-black text-2xl font-bold lg:pb-8 text-center lg:ml-auto">Artadewana</div>
            <div className="inline-flex lg:hidden" />
          </div>
        </div>
        <button data-collapse-toggle="navbar-hamburger" type="button" onClick={updateMenu} className="lg:hidden p-2 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-gray-200 dark:text-gray-400" aria-controls="navbar-hamburger" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div className="h-1 min-w-screen bg-white border-white" />
      <div className={menuClass}>
        <div className='min-w-fit max-w-screen-xl w-full flex flex-nowrap flex-col'>
        <div className="flex flex-row justify-between items-center px-4 lg:px-0 lg:justify-center">
        <div className="flex flex-col items-start justify-between">
          <div className="text-2xl font-bold pt-8 text-black lg:ml-auto lg:mr-auto flex-nowrap">
            <div className="text-black text-2xl font-bold lg:pb-8 text-center lg:ml-auto">Artadewana</div>
            <div className="inline-flex lg:hidden" />
          </div>
        </div>
        <button data-collapse-toggle="navbar-hamburger" type="button" onClick={updateMenu} className="lg:hidden p-2 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-gray-200 dark:text-gray-400" aria-controls="navbar-hamburger" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        </div>
        <ul className="block font-medium mt-4 rounded-lg align-middle text-white">
        {categoryLists.map((category, index) => {
          return (
            <li className="h-20 hover:text-orange-800" onClick={() => {
                var encodedQuery = encodeURIComponent(category);
                router.push(`/products/?category=${encodedQuery}`)
              }}>
                  <div className="align-middle px-4 text-black">{category}</div>
              </li>
          )
        })}
          <li className="h-20">
              <div className="align-middle px-4 text-black" onClick={() => {
                openPopup()
              }}>Hubungi Kami</div>
          </li>
            <li className="h-20">
              <div className="align-middle px-4 text-black" onClick={() => {
                openPopup()
              }}>Tentang Kami</div>
              {isPopupOpen && (
                <PopupMenu onClick={closePopup} />
              )}
        </li>
        </ul>
        </div>
      </div>
      <div className="items-center justify-center flex-row mr-auto ml-auto">
        <ul className="nav-bar" key={'ul'}>
        {categoryLists.map((category, index) => {
          return (
            <>
              <li key={index}>
                <HeaderMenu props={category} title={category} navigateTo="/products" key={index} />
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
      <nav>
      <div className="hidden w-full" id="navbar-hamburger">
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        {categoryLists.map((category, index) => {
          return (
              <li className="block">
                  <HeaderMenu props={category} title={category} navigateTo="/products" />
              </li>
          )
        })}
        <li className="block">
            <HeaderMenu title="Hubungi Kami" onClick={() => {
              openPopup()
              }} />
        </li>
          <li className="block">
          <HeaderMenu title="Tentang Kami" />
              {isPopupOpen && (
                <PopupMenu onClick={closePopup} />
              )}
        </li>
        </ul>
        </div>
      </nav>
    </div>
  );
}