import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <div className="bg-main min-w-full max-w-fit ">
      <div className="flex items-center mx-auto text-2xl font-bold place-content-center py-10 text-black border-b-4 border-white">Artadewana</div>
      <div className="flex items-center justify-center">
        <HeaderMenu navigateTo="/" title="Gerabah" />
        <HeaderMenu navigateTo="/" title="Keramik" />
        <HeaderMenu navigateTo="/" title="Porcelain" />
        <HeaderMenu navigateTo="/" title="Bata & Genteng" />
        <HeaderMenu navigateTo="/" title="Hubungi Kami" />
        <HeaderMenu navigateTo="/" title="Tentang Kami" />
      </div>
    </div>
  );
}