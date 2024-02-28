// components/ui/header.tsx
"use client" // Add this at the top

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/images/logo.png';
import Dropdown from '@/components/utils/dropdown';
import MobileMenu from './mobile-menu';

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    setIsScrolled(window.pageYOffset > 10);
  };

  // Effect to add/remove scroll event listener
  React.useEffect(() => {
    handleScroll(); // Initial check for scroll position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${isScrolled ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-20 pt-4"> {/* Added pt-4 for padding top */}
  <Image src={Logo} alt="Logo" height={5} width={130} /> {/* Adjust height and width as needed */}
</div>



          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/signin" passHref>
                  <span className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</span>
                </Link>
              </li>
              <li>
                <Link href="/signup" passHref>
                  <span className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                    <span>Sign up</span>
                    <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
