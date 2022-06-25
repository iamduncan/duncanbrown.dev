import { CMS_NAME } from '../lib/constants';

const Footer = () => {
  return (
    <footer className='border-t border-gray-300 bg-zinc-200'>
      <div
        className='
          container
          flex flex-wrap
          px-4
          py-6
          mx-auto
          justify-between
          md:items-center
          md:flex-row md:flex-nowrap
          max-w-screen-xl
        '
      >
        <div className='flex-shrink-0 w-80 md:mx-8 mx-auto text-center md:mx-0 md:text-left'>
          <a
            className='
              flex
              items-center
              justify-center
              text-3xl
              font-bold
              text-blue-700
              md:justify-start
            '
          >
            {CMS_NAME}
          </a>
          <div className='mt-2 text-sm'>
            <p>👨‍👩‍👧‍👦 Husband and dad</p>
            <p>⚜️ Scout leader</p>
            <p>
              🛍️ Founder of{' '}
              <a
                href='https://about.mylocal.gifts'
                className='hover:text-blue-500 hover:underline'
              >
                Mylocal Gifts
              </a>
              , shop local marketplaces
            </p>
            <p>
              👨‍💻 Helping small businesses online with{' '}
              <a
                href='https://www.wessexdigitalsolutions.co.uk'
                className='hover:text-blue-500 hover:underline'
              >
                Wessex Digital Solutions
              </a>
            </p>
          </div>
        </div>
        <div className='w-full md:w-auto mt-4 md:mt-0'>
          <div className=''>
            <input
              type='text'
              className='
                h-auto
                w-full
                sm:w-auto
                p-2
                text-sm
                border border-grey-light
                round
                text-grey-dark
              '
              placeholder='Your email address'
            />
            <button className='h-auto p-3 text-xs text-white bg-red-600 w-full sm:w-auto rounded-sm'>
              Subscribe
            </button>
          </div>
          <div className='flex justify-center mt-4 lg:mt-12'>
            <a
              className='ml-3 hover:cursor-pointer'
              href='https://twitter.com/iamDuncanBrown'
              target='_blank'
            >
              <svg
                fill='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-6 h-6 text-blue-400'
                viewBox='0 0 24 24'
              >
                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
              </svg>
            </a>
            <a
              className='ml-3 hover:cursor-pointer'
              href='https://instagram.com/iamDuncan'
              target='_blank'
            >
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-6 h-6 text-pink-400'
                viewBox='0 0 24 24'
              >
                <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
              </svg>
            </a>
            <a
              className='ml-3 hover:cursor-pointer'
              href='https://linkedin.com/in/duncanjbrown'
              target='_blank'
            >
              <svg
                fill='currentColor'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='0'
                className='w-6 h-6 text-sky-600'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='none'
                  d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                ></path>
                <circle cx='4' cy='4' r='2' stroke='none'></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className='flex justify-center pb-6'>
        <p className='text-base text-gray-400'>
          All rights reserved by Duncan Brown &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
