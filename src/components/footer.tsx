import React from 'react';
import FooterMenu from "./FooterMenu";
import Image from 'next/image';
import igLogo from '@/public/ig-logo.png';
import fbLogo from '@/public/fb-logo.png';
import twtLogo from '@/public/twitter-logo.png';
import Link from 'next/link';

export default function Footer () {
  return (
  
  <div className="bg-main mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 min-w-full ">
      <div className="flex flex-row flex-auto container mx-auto">
        <div className="flex-1 relative items-start justify-items-start">
          <div className="flex-col flex-auto items-start align-baseline justify-items-start">
          <p className="my-4 mx-0.5 text-black font-thin hover:text-amber-600 text-left content-start">Menu</p>
          <nav aria-label="Footer Navigation - Menu" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  Tentang Kami
                </a>
              </li>
            </ul>
          </nav>
          </div>
        </div>
        <div className="flex-1 relative items-start justify-items-start">
          <p className="my-4 text-black font-thin hover:text-amber-600">Kategori</p>
          <nav aria-label="Footer Navigation - Kategori" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-amber-600 transition ">
                  Gerabak
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition ">
                  Keramik
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition ">
                  Porcelin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition ">
                  Bata & Genteng
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-3 relative items-end text-right justify-items-end">
          <p className="mx-4 my-4 lg:mx-6 text-black font-thin">Kontak</p>
          <div className="flex items-center justify-end mt-3">
            <a href="#" className="hover:text-amber-600 transition mx-1">
              <Image src={igLogo} alt="Instagram" height="30" width="30"/>
            </a>
            <a href="#" className="hover:text-amber-600 transition mx-1">
              <Image src={twtLogo} alt="Twitter" height="30" width="30"/>
            </a>
            <a href="#" className="hover:text-amber-600 transition mx-1">
              <Image src={fbLogo} alt="Facebook" height="30" width="30"/>
            </a>
          </div>
        </div>
      </div>
  </div>
  );
};

