import { Link, NavLink } from "@remix-run/react";
import { SunIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export const Navbar = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) => {
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
    <>
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
        <div className="hidden w-full text-center md:w-1/3 lg:block">
          <NavLink to="/blog">Blog</NavLink>
        </div>
        <div className="flex w-full justify-end gap-2 md:w-1/3">
          <SunIcon className="hidden h-8 w-8 lg:block" />
          {/* <MoonIcon className='h-8 w-8' /> */}
          <button
            className={`block px-2 py-1 lg:hidden`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
      </div>
      <div
        className={`${
          !menuOpen ? "hidden" : ""
        } fixed top-20 left-0 z-50 mx-0 h-screen w-screen bg-white px-0 dark:bg-slate-800 dark:text-slate-300 lg:hidden`}
      >
        <ul className="flex w-full flex-col text-center">
          <li className="active w-full">
            <Link
              className="block w-full border-t border-gray-200 py-3 text-lg font-bold"
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="block w-full border-t border-gray-200 py-3 text-lg"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
