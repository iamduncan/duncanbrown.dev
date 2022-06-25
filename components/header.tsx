import { CMS_NAME } from '@libs/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <nav className='p-4 nav-section w-full max-w-screen-xl mx-auto'>
      <div className='container mx-auto'>
        <div className='flex justify-between flex- flex-wrap content-center items-center py-2 lg:py-0 px-0 lg:px-0'>
          <Link href='/'>
            <a className='text-xl font-bold'>{CMS_NAME}</a>
          </Link>

          <div className={`${!menuOpen && 'hidden'} md:block`}>
            <ul className='flex flex-row'>
              <li className='active'>
                <Link href='/'>
                  <a
                    className={`px-4 py-2 transition duration-500 ease-in-out hover:text-gray-900 hover:rounded hover:bg-gray-300 rounded ${
                      router.pathname === '/'
                        ? 'font-semibold text-gray-900'
                        : 'text-gray-700'
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  <a
                    className={`px-4 py-2 transition duration-500 ease-in-out hover:text-gray-900 hover:rounded hover:bg-gray-300 rounded ${
                      router.pathname === '/about'
                        ? 'font-semibold text-gray-900'
                        : 'text-gray-700'
                    }`}
                  >
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/social'>
                  <a
                    className={`px-4 py-2 transition duration-500 ease-in-out hover:text-gray-900 hover:rounded hover:bg-gray-300 rounded ${
                      router.pathname === '/social'
                        ? 'font-semibold text-gray-900'
                        : 'text-gray-700'
                    }`}
                  >
                    Social
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a
                    className={`px-4 py-2 transition duration-500 ease-in-out hover:text-gray-900 hover:rounded hover:bg-gray-300 rounded ${
                      router.pathname === '/contact'
                        ? 'font-semibold text-gray-900'
                        : 'text-gray-700'
                    }`}
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <button
            className={`hamburger-menu px-2 py-1 block ${
              menuOpen && 'hidden'
            } md:hidden rounded border border-gray-500 uppercase`}
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
          <div
            className={`navbar mobile-nav px-0 mx-0 ${
              !menuOpen && 'hidden'
            } md:hidden fixed top-0 left-0 w-full bg-white h-screen fixed z-50 p-3`}
          >
            <div className='flex flex- justify-between px-8 py-4'>
              <div className='text-xl font-bold'>{CMS_NAME}</div>
              <div
                className='close-menu flex items-center content-center justify-center px-2 py-1 bg-black rounded px-x py-1 text-white uppercase'
                onClick={() => setMenuOpen(false)}
              >
                Close
              </div>
            </div>
            <ul className='flex flex-col text-center mt-2 pt-2 w-full'>
              <li className='active w-full'>
                <a
                  className={`w-full text-lg border-t border-gray-200 block py-3 ${
                    router.pathname === '/' && ' font-bold'
                  }`}
                  href='/'
                >
                  Home
                </a>
              </li>
              <li className='w-full'>
                <Link href='/about'>
                  <a
                    className={`w-full text-lg border-t border-gray-200 block py-3 ${
                      router.pathname === '/about' && ' font-bold'
                    }`}
                    href='/about'
                  >
                    About
                  </a>
                </Link>
              </li>
              <li className='w-full'>
                <Link href='/social'>
                  <a
                    className={`w-full text-lg border-t border-gray-200 block py-3 ${
                      router.pathname === '/social' && ' font-bold'
                    }`}
                    href='/social'
                  >
                    Social
                  </a>
                </Link>
              </li>
              <li className='w-full'>
                <Link href='/contact'>
                  <a
                    className={`w-full text-lg border-t border-gray-200 block py-3 ${
                      router.pathname === '/contact' && ' font-bold'
                    }`}
                    href='/contact'
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
