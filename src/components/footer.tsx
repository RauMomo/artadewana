import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
  <footer className={`bg-main py-4 text-justify ${className}`}>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="lg:flex lg:items-start lg:gap-8">
      <div className="mt-8 grid grid-cols-3 gap-8 lg:mt-0 lg:grid-cols-3 lg:gap-y-16">
        <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <p className="font-large text-gray-900">Menu</p>
          <nav aria-label="Footer Navigation - Menu" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Tentang Kami
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <p className="font-large text-gray-900">Kategori</p>
          <nav aria-label="Footer Navigation - Kategori" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Gerabak
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Keramik
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Porcelin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Bata & Genteng
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <p className="font-large text-gray-900 ml-auto">Kontak</p>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
