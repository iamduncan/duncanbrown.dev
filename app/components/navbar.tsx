import { Link, NavLink } from "@remix-run/react";
import { SunIcon, MoonIcon, MenuIcon } from "@heroicons/react/outline";

export const Navbar = () => {
  return (
    <div className="sticky top-0 w-full px-10 py-8 text-2xl mx-auto flex z-50 justify-between bg-white dark:text-white dark:bg-gray-900">
      <Link to="/" className="text-center">
        <h1>Duncan Brown</h1>
      </Link>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="flex gap-2">
        <SunIcon className="h-8 w-8" />
        {/* <MoonIcon className='h-8 w-8' /> */}
        <MenuIcon className="h-8 w-8 xl:hidden" />
      </div>
    </div>
  );
};
