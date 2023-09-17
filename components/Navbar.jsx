'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {img} from '../public/logo.png'


import { useRouter } from 'next/navigation';
import Wallet from '../components/layout/components/Wallet';




const Navbar = () => {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Function to update the current path state based on the window location
    const updateCurrentPath = () => {
      setCurrentPath(window.location.pathname);
    };

    // Add event listener to handle route changes
    window.addEventListener('popstate', updateCurrentPath);

    // Initialize current path on component mount
    updateCurrentPath();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('popstate', updateCurrentPath);
    };
  }, []);

  // Function to manually change the route when a navigation item is clicked
  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };
  
  return (
    <div className='p-10 bg-white border-b-2 flex justify-between items-center font-iowan'>
      <Image src="/logo.png" width={50} height={50} />
      <div className='flex justify-center  space-x-8'>
        <Link href='/'><div
          className={currentPath === '/' ? 'border-b-2 border-black cursor-pointer text-[#000000]' : 'cursor-pointer text-[#000000]'}
          onClick={() => navigateTo('/')}
        >
          Home
        </div>
        </Link>
        <Link href='/explore'>
        <div
          className={currentPath === '/explore' ? 'border-b-2 border-black cursor-pointer text-[#000000]' : 'cursor-pointer text-[#000000] '}
          onClick={() => navigateTo('/explore')}
        >
          Campaign
        </div>
        </Link>
        <div
          className={currentPath === '/createcampaign' ? 'border-b-2 border-black cursor-pointer text-[#000000]' : 'cursor-pointer text-[#000000]'}
          onClick={() => navigateTo('/createcampaign')}
        >
          Create Campaign
        </div>
        <div
          className={currentPath === '/dashboard' ? 'border-b-2 border-black cursor-pointer text-[#000000]' : 'cursor-pointer text-[#000000]'}
          onClick={() => navigateTo('/dashboard')}
        >
          Dashboard
        </div>
      </div>
      <button className='w-[153px] h-[45px] bg-[#000000] text-[#FFFFFF] rounded-[30px]'>
        <Wallet />
      </button>
    </div>
  );
};
export default Navbar;