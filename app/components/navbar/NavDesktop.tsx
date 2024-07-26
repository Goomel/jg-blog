import React from 'react';
import Link from 'next/link';
import { Menu, MenuItem } from '@/app/lib/types';

const NavDesktop = ({ menu }: { menu: Menu }) => {
  return (
    <div className="items-center justify-between w-full lg:flex hidden">
      <ul className="flex items-center lg:gap-8 font-medium">
        {menu.map((menuItem: MenuItem) => (
          <li
            key={menuItem.title}
            className="overflow-hidden relative before:content-[''] before:w-3/4 before:bg-black-500  before:h-0.5 before:absolute before:bottom-0 before:right-0 before:translate-x-[calc(100%+5px)] hover:before:translate-x-0 before:transition-transform before:duration-200 lg:px-1 py-1.5"
          >
            <Link href={menuItem.href} className="font-semibold">
              {menuItem.title}
            </Link>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="block bg-lemon-500 lg:py-4 lg:px-6 hover:bg-lemon-400 font-medium transition-colors duration-200 rounded"
      >
        Kontakt
      </a>
    </div>
  );
};

export default NavDesktop;
