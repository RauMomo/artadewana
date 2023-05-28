
export default function HeaderMenu({ title, navigateTo, onClick}: { title: string, navigateTo: string, onClick?: () => void}) {
  return (
    <a>
      <nav className="mx-4 my-4 lg:mx-6 text-black font-thin hover:text-amber-600 cursor-pointer" onClick={() => {
        onClick?.call(null)
      }}>
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </nav>
    </a>
  );
}