import Link from "next/link";

export default function HeaderMenu({ title, navigateTo }: { title: string, navigateTo: string}) {
  return (
    <a>
      <Link href={navigateTo} className="mx-4 my-4 lg:mx-6 text-black font-thin hover:text-amber-600">
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </a>
  );
}