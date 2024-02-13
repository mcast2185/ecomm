import Link from "next/link";
import { usePathname } from "next/navigation";


export const dynamicLinks = (pageName: string, href: string) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === href ? (
        <Link
          className="text-lg font-semibold text-primary"
          href={href}
        >
          {pageName}
        </Link>) : (
        <Link
          href={href}
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
        >
          {pageName}
        </Link>
      )
      }
    </>
  );
};