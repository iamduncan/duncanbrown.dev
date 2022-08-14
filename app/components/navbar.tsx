import { Link, NavLink } from '@remix-run/react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export const Navbar = () => {
  return (
    <div className='w-full px-10 py-8 text-2xl mx-auto flex justify-between dark:text-white'>
      <div>
        <NavLink to='/'>Home</NavLink>
      </div>
      <div>
        <SunIcon className='h-8 w-8' />
        <MoonIcon className='h-8 w-8' />
      </div>
    </div>
  );
};
