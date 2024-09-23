import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-heading text-2xl font-extrabold text-gray-100 sm:text-3xl lg:text-4xl"
      aria-label="jgdev.pl home page"
    >
      <span>jgdev</span>
      <span className="text-lemon-500">.</span>
      <span className="text-outline-white text-black-500/0">pl</span>
    </Link>
  );
};

export default Logo;
