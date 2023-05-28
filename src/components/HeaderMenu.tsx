import Link from "next/link";

export default function HeaderMenu({ title, props, onClick}: { title: string, props?: string | undefined, onClick?: () => void}) {
  return (
    <Link href={{pathname: '/products/', query: { category: props}}}>
      <nav className="mx-4 my-4 lg:mx-6 text-black font-thin hover:text-amber-600 cursor-pointer" onClick={() => {
        onClick?.call(null)
      }}>
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </nav>
    </Link>
  );
}