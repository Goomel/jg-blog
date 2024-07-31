import React from 'react';
import Link from 'next/link';
import { Menu, MenuItem } from '@/app/lib/types';

const NavDesktop = ({ menu }: { menu: Menu }) => {
  return (
    <div className="items-center justify-between w-full lg:flex hidden">
      <ul className="flex items-center lg:gap-8 font-medium">
        {menu.map((menuItem: MenuItem) => (
          <li key={menuItem.title} className="inline-flex group">
            <Link
              href={menuItem.href}
              className="font-semibold inline-block relative before:content-[''] before:scale-x-0 group-hover:before:scale-x-100 before:w-3/4 before:bg-black-500 before:h-0.5 before:absolute before:-bottom-2 before:right-0 before:transition-transform before:duration-200 before:origin-right"
            >
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
