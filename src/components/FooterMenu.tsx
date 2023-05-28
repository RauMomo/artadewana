import Link from "next/link";

export default function FooterMenu({ title, navigateTo, subtitle }: { title: string, navigateTo: string, subtitle: string}) {
  return (
    <a>
      <Link href={navigateTo} className="mx-4 my-4 lg:mx-6 text-black font-thin hover:text-amber-600">
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
        <ul>
          <li>
            <Link href={navigateTo}>
              <p className="text-amber-600 hover:text-amber-600">{subtitle}</p>
            </Link>
          </li>
        </ul>
      </Link>
    </a>
  );
}