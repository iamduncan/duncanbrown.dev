import { Form, Link } from "@remix-run/react";
import { InstagramIcon, LinkedInIcon, TwitterIcon } from "./icons";

export function Footer({ categories }: { categories?: string[] }) {
  return (
    <footer className="content-container my-8 flex flex-col border-2 dark:border-slate-700 dark:text-slate-400 lg:mx-auto lg:my-16 lg:max-w-7xl lg:rounded-3xl lg:p-20">
      <div className="pb-3 text-lg md:flex md:pb-8">
        <div className="w-full gap-4 md:w-1/2 lg:flex lg:w-2/3">
          <div className="w-full gap-4 lg:w-1/2">
            <h3 className="mb-4 text-2xl font-medium">DuncanBrown.dev</h3>
            <p>
              I'm a software engineer and designer based in Wiltshire, UK. I'm
              currently working at{" "}
              <a
                href="https://www.wessexdigitalsolutions.co.uk/"
                className="underline"
              >
                Wessex Digital Solutions
              </a>
              .
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="mb-4 text-2xl font-semibold">Categories</h3>
            <ul className="flex flex-col gap-2">
              {categories &&
                categories.map((category) => (
                  <li key={category}>
                    <Link to={`/category/${category}`} className="capitalize">
                      {category}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h3 className="mb-4 text-2xl font-semibold">Newsletter</h3>
          <p>
            Sign up to be first to receive the latest stories inspiring us, case
            studies, and industry news.
          </p>
          <Form method="post" action="/newsletter">
            <input
              type="text"
              name="name"
              placeholder="First Name"
              className="mt-4 w-full border-b-2 border-slate-400 bg-transparent px-4 py-2 focus-visible:outline-0"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="mt-4 w-full border-b-2 border-slate-400 bg-transparent px-4 py-2 focus-visible:outline-0"
            />
            <button
              type="submit"
              className="mt-4 rounded bg-slate-500 from-slate-500 to-slate-600 px-4 py-2 text-white shadow-slate-100 hover:bg-gradient-to-r hover:drop-shadow-lg dark:text-slate-200"
            >
              Subscribe
            </button>
          </Form>
        </div>
      </div>
      <div className="flex flex-1 flex-col-reverse gap-2 border-t pt-3 text-sm dark:border-slate-700 md:flex-row md:pt-8">
        <div className="w-full md:w-1/2">
          Copyright &copy; {new Date().getFullYear()} Duncan Brown
        </div>
        <div className="w-full items-center justify-end gap-4 text-lg text-slate-500 md:flex md:w-1/2">
          <a
            href="https://twitter.com/iamDuncanBrown"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center gap-2 transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:text-blue-500">
              <TwitterIcon className="h-4 w-4" /> Twitter
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/duncanjbrown/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center gap-2 transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:text-blue-500">
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </span>
          </a>
          <a
            href="https://www.instagram.com/iamduncan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="group flex items-center gap-2 from-yellow-500 via-orange-500 to-purple-500 bg-clip-text transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:bg-gradient-to-tr hover:text-transparent">
              <InstagramIcon className="h-4 w-4 text-slate-500 group-hover:text-orange-400" />{" "}
              Instagram
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
