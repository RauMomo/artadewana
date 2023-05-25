import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <div className="bg-main min-w-full max-w-fit ">
      <div className="flex items-center mx-auto text-2xl font-bold place-content-center py-10 text-black border-b-4 border-white">Artadewana</div>
      <div className="flex items-center justify-center">
        <HeaderMenu navigateTo="Gerabah" title="Gerabah" />
        <HeaderMenu navigateTo="Keramik" title="Keramik" />
        <HeaderMenu navigateTo="Porcelain" title="Porcelain" />
        <HeaderMenu navigateTo="Bata & Genteng" title="Bata & Genteng" />
        <HeaderMenu navigateTo="Hubungi Kami" title="Hubungi Kami" />
        <HeaderMenu navigateTo="Tentang Kami" title="Tentang Kami" />
      </div>
    </div>
  );
}