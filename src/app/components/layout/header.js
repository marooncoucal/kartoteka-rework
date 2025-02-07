"use client"
import Link from 'next/link';
import { Logo, Lucky, SearchIcon } from '../content/icons';
import { useEffect, useState } from 'react';
import { HeroSearch } from './search';

export function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, show]);

  return (
    <header id="navbar" className={`Header z-10 fixed top-0 left-0 w-full flex items-center justify-center h-[320px] bg-custom-white transition-transform duration-300 transform ${show ? 'translate-y-0 shadow' : '-translate-y-[320px]'}`}>
      <div className=''>
        <HeroSearch />
      </div>
    </header>
  )
}

{/* <div className='w-[100%] max-w-[1400px] h-[100%] justify-between items-center flex'>
<Link href={'/'}> <Logo /> </Link>
<div className='Icons flex gap-[4px]'>
  <Link href={'/'}> <SearchIcon /> </Link>
</div>
</div> */}