import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useState } from "react";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";

import styles from "./styles/tailwind.css";
import { getAllCategories } from "./utils/blog.server";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Duncan Brown",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = async () => {
  const categories = await getAllCategories();
  return json({ categories });
};

export default function App() {
  const { categories } = useLoaderData<typeof loader>();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body
        className={`custom-scrollbar bg-slate-100 dark:bg-slate-900 ${
          menuOpen ? "overflow-hidden" : ""
        }`}
      >
        <div>
          <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
          <div className="mx-auto max-w-6xl">
            <Outlet />
          </div>
        </div>
        <Footer categories={categories} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
