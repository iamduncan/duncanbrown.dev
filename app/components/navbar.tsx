import { Link, NavLink } from "@remix-run/react";
import { SunIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const threshold = 140;
    setIsSticky(window.scrollY > threshold);
    const handleScroll = (event: Event) => {
      if (window.scrollY > threshold) {
        setIsSticky(true);
      } else if (window.scrollY <= threshold - 20) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`top-0 z-50 mx-auto mb-4 flex w-full border-zinc-700 bg-white px-4 text-2xl shadow-zinc-800 transition-colors duration-200 ease-in-out dark:text-white md:mb-8 md:px-10 ${
        isSticky
          ? "sticky border-b py-6 shadow-md dark:bg-zinc-900"
          : "top-auto border-b-0 py-8 dark:bg-slate-800"
      }`}
    >
      <div className="flex-grow md:w-1/3">
        <Link to="/" className="whitespace-nowrap">
          <h1>Duncan Brown</h1>
        </Link>
      </div>
      <div className="hidden w-full text-center md:block md:w-1/3">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="flex w-full justify-end gap-2 md:w-1/3">
        <SunIcon className="hidden h-8 w-8 lg:block" />
        {/* <MoonIcon className='h-8 w-8' /> */}
        <Bars3Icon className="h-8 w-8 xl:hidden" />
      </div>
    </div>
  );
};
