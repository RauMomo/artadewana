"use client"
import Image from "next/image";
import { useState } from 'react';
import fbLogo from "../public/fb-logo.png";
import igLogo from "../public/ig-logo.png";
import twtLogo from "../public/twitter-logo.png";
import waLogo from "../public/wa-logo.png";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-main min-w-full max-w-fit ">
      <div className="flex items-center mx-auto text-2xl font-bold place-content-center py-10 text-black border-b-4 border-white">Artadewana</div>
      <div className="flex items-center justify-center">
        <HeaderMenu navigateTo="/" title="Gerabah" />
        <HeaderMenu navigateTo="/" title="Keramik" />
        <HeaderMenu navigateTo="/" title="Porcelain" />
        <HeaderMenu navigateTo="/" title="Bata & Genteng" />
        <HeaderMenu navigateTo="/" title="Hubungi Kami" onClick={() => {
          openPopup()
        }}/>
        <HeaderMenu navigateTo="/" title="Tentang Kami" />
              {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-40">
          <div className="bg-white rounded-lg h-3/5 w-1/3 relative flex flex-col items-center text-white">
              {/* Pop-up content */}
              <div className='flex items-center justify-center bg-main w-full p-6 text-2xl font-semibold text-black'>HUBUNGI KAMI</div>
              <ul className="w-3/5">
              <li className="bg-whatsappColor my-8 p-5">
                <div className="flex flex-auto flex-nowrap">
                    <div className="flex-small mr-3">
                      {<>
                        <Image src={waLogo} alt={"Icon Whatsapp"} width={40} height={40} />
                      </>}
                    </div>
                  <div className='text-inherit text-2xl flex-large leading-none align-middle mt-2'>WHATSAPP</div>
                </div>
              </li>
              <li className="bg-instaColor my-8 p-5">
                <div className="flex flex-auto flex-nowrap">
                    <div className="flex-small mr-3">
                      {<>
                        <Image src={igLogo} alt={"Icon Instagram"} width={40} height={40} />
                      </>}
                    </div>
                  <div className='text-inherit text-2xl flex-large leading-none align-middle mt-2'>INSTAGRAM</div>
                </div>
              </li>
              <li className="bg-twitterColor my-8 p-5">
                <div className="flex flex-auto flex-nowrap">
                    <div className="flex-small mr-3">
                      {<>
                        <Image src={twtLogo} alt={"Icon Twitter"} width={40} height={40} />
                      </>}
                    </div>
                  <div className='text-inherit text-2xl flex-large leading-none align-middle mt-2'>TWITTER</div>
                </div>
              </li>
              <li className="bg-fbcolor my-8 p-5">
                <div className="flex flex-auto flex-nowrap">
                    <div className="flex-small mr-3">
                      {<>
                        <Image src={fbLogo} alt={"Icon Facebook"} width={40} height={40} />
                      </>}
                    </div>
                  <div className='text-inherit text-2xl flex-large leading-none align-middle mt-2'>FACEBOOK</div>
                </div>
                </li>
              </ul>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-8 rounded" onClick={closePopup}>
              Tutup
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}