import { Link, NavLink } from "@remix-run/react";

import me from "~/assets/images/me-sq-lg.jpg";

export const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-full flex-none overflow-y-auto bg-slate-100 scrollbar:!h-1.5 scrollbar:!w-1 scrollbar:bg-transparent scrollbar-track:!rounded scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-400 dark:bg-slate-800 xl:relative xl:w-1/4">
      <div className="mx-auto flex flex-col py-8 px-10 text-2xl dark:text-white">
        <Link to="/" className="text-center">
          <h1>Duncan Brown</h1>
        </Link>
        <img
          src={me}
          alt="Me"
          className="mx-auto my-8 h-64 w-64 rounded-full ring-2 ring-slate-300 dark:ring-slate-700"
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
