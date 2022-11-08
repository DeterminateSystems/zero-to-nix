import clsx from "clsx";
import { state, systems } from "lib/state";
import Link from "next/link";
import { useEffect, useState } from "react";
import site from "site";
import shallow from "zustand/shallow";

const Navbar = () => {
  const [system, setSystem] = state((s) => [s.system, s.setSystem], shallow);
  const [sys, setSys] = useState<string>();

  useEffect(() => {
    setSys(system);
  }, [system]);

  const { title } = site;

  return (
    <nav className="bg-slate-100 py-4 px-6 shadow">
      <div className="mx-auto max-w-6xl flex justify-between items-center">
        <div>
          <Link href="/" className="text-xl font-semibold">
            {title} ❄️
          </Link>
        </div>

        <div className="flex space-x-2">
          {systems.map((s) => (
            <button
              key={s}
              className={clsx(s === sys ? "font-bold" : "font-normal")}
              onClick={(_e) => setSystem(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
