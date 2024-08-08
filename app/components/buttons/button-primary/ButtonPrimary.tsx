import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href: string;
};

const ButtonPrimary = ({ children, href }: ButtonProps) => {
  return (
    <Link href={href} className="bg-lemon-500 px-4 py-3 text-black-500 font-medium">
      {children}
    </Link>
  );
};

export default ButtonPrimary;
