import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";

import styles from "./styles/tailwind.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Duncan Brown",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-screen bg-white transition duration-500 dark:bg-gray-900 dark:text-gray-50">
        <div className="flex flex-col-reverse xl:flex-row xl:h-full">
          <Sidebar />
          <div className="flex-grow overflow-y-auto scrollbar:!h-1.5 scrollbar:!w-1 scrollbar:bg-transparent scrollbar-track:!rounded scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-400">
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
