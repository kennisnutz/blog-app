import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href={'/'}>
          <Image
            src={'https://links.papareact.com/1m8'}
            width={50}
            height={50}
            className="rounded-full"
            alt="logo"
          />
        </Link>
        <h1>Kennis Blog</h1>
      </div>
      <div className="">
        <Link
          href={'https://www.papareact.com/universityofcode'}
          className="px-5 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
        >
          sign up to university of code
        </Link>
      </div>
    </header>
  );
}

export default Header;
