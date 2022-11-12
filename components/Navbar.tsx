import clsx from "clsx";
import { state } from "lib/state";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import site from "site";
import shallow from "zustand/shallow";

type NavLink = {
  text: string;
  href: string;
};

const links: NavLink[] = [
  { text: "Quick start", href: "/start" },
  { text: "Concepts", href: "/concepts" },
];

const Navbar = () => {
  const [system, setSystem] = state((s) => [s.system, s.setSystem], shallow);
  const [sys, setSys] = useState<string>();

  useEffect(() => {
    setSys(system);
  }, [system]);

  const { title } = site;

  const here = usePathname()!;

  return (
    <nav className="sticky top-0 bg-slate-100 py-4 px-6 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="text-xl font-semibold hover:text-blue-500">
            {title}
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className={clsx(
                here.startsWith(link.href) ? "font-bold" : "font-normal"
              )}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
