import { Link, NavLink } from "@remix-run/react";

import me from "~/assets/images/me-sq-lg.jpg";

export const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 z-50 xl:relative w-full xl:w-1/4 h-screen flex-none bg-gray-100 overflow-y-auto dark:bg-gray-800 scrollbar:!h-1.5 scrollbar:!w-1 scrollbar:bg-transparent scrollbar-track:!rounded scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-400">
      <div className="py-8 px-10 text-2xl mx-auto flex flex-col dark:text-white">
        <Link to="/" className="text-center">
          <h1>Duncan Brown</h1>
        </Link>
        <img
          src={me}
          alt="Me"
          className="rounded-full h-64 w-64 mx-auto my-8 ring-2 ring-gray-300 dark:ring-gray-700"
        />
        <div className="flex flex-col gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div></div>
      </div>
    </div>
  );
};
