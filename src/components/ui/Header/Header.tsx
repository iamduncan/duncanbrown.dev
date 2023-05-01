'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="nav-section w-full p-4">
      <div className="container mx-auto">
        <div className="flex- flex flex-wrap content-center items-center justify-between px-0 py-2 lg:px-0 lg:py-0">
          <Link href="/" className={`${menuOpen && 'hidden'}`}>
            Duncan Brown
          </Link>

          <div className="hidden md:block">
            <ul className="flex- flex gap-3">
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Link href={'/about'}>About</Link>
              </li>
              <li>
                <Link href={'/blog'}>Blog</Link>
              </li>
              <li className={`nav-item signup px-2`}>
                <Link
                  className="cursor-pointer rounded border border-blue-600 bg-blue-500 px-3 py-2 font-semibold text-gray-900 shadow transition duration-500 ease-in-out hover:bg-blue-600"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <button
            className={`hamburger-menu block px-2 py-1 ${
              menuOpen && 'hidden'
            } rounded border border-gray-500 uppercase md:hidden`}
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
          <div
            className={`navbar mobile-nav mx-0 px-0 ${
              !menuOpen && 'hidden'
            } fixed left-0 top-0 z-50 h-screen w-full bg-white p-3 md:hidden`}
          >
            <div className="flex- flex justify-between px-3 py-2">
              Duncan Brown
              <div
                className="close-menu flex content-center items-center justify-center rounded bg-black px-2 py-1 uppercase text-white"
                onClick={() => setMenuOpen(false)}
              >
                Close
              </div>
            </div>
            <ul className="mt-2 flex w-full flex-col pt-2 text-center">
              <li className="active w-full">
                <Link
                  className="block w-full border-t border-gray-200 py-3 text-lg font-bold"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href={'/projects'}>Projects</Link>
              </li>
              <li>
                <Link href={'/about'}>About</Link>
              </li>
              <li>
                <Link href={'/blog'}>Blog</Link>
              </li>

              <li className="w-full">
                <Link
                  className="block w-full border-t border-gray-200 py-3 text-lg"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
