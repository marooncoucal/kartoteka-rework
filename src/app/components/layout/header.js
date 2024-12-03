import Link from 'next/link';
import { Logo, Lucky, SearchIcon } from '../content/icons';

export function Header() {
  return (
    <header className='Header fixed flex items-center justify-center w-[100%] h-[56px] px-[10px] bg-white shadow'>
      <div className='w-[100%] max-w-[1400px] h-[100%] justify-between items-center flex'>
        <Link href={'/'}> <Logo /> </Link>
        <div className='Icons flex gap-[4px]'>
          <Link href={'/search'}> <SearchIcon /> </Link>
          <Link href={'/search'}> <Lucky /> </Link>
        </div>
      </div>
    </header>
  )
}