import { Link, NavLink } from '@remix-run/react';

import me from '~/assets/images/me-sq-lg.jpg';

export const Sidebar = () => {
  return (
    <div className='basis-1/4 h-full bg-gray-100 dark:bg-gray-800'>
      <div className='container px-10 py-8 text-2xl mx-auto flex flex-col dark:text-white'>
        <Link to='/' className='text-center'>
          <h1>Duncan Brown</h1>
        </Link>
        <img
          src={me}
          alt='Me'
          className='rounded-full h-64 w-64 mx-auto my-8'
        />
        <div className='flex flex-col'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
        <div></div>
      </div>
    </div>
  );
};
