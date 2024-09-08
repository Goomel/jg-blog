'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { Menu, MenuItem } from '@/app/lib/types';
import ButtonPrimary from '../buttons/ButtonPrimary';

const NavDesktop = ({ menu }: { menu: Menu }) => {
  const pathname = usePathname();

  return (
    <div className="hidden w-full items-center justify-between lg:flex">
      <ul className="flex items-center font-medium lg:gap-8">
        {menu.map((menuItem: MenuItem) => (
          <li
            key={menuItem.title}
            className={cn(pathname === menuItem.href && 'active', 'group inline-flex')}
          >
            <Link
              href={menuItem.href}
              className="text-shadow-sm relative inline-block text-gray-100 before:absolute before:-bottom-2 before:right-0 before:h-0.5 before:w-3/4 before:origin-right before:scale-x-0 before:bg-lemon-500 before:transition-transform before:duration-200 before:content-[''] group-hover:before:scale-x-100 group-[&.active]:before:scale-x-100"
            >
              {menuItem.title}
            </Link>
          </li>
        ))}
      </ul>

      <ButtonPrimary as="link" href="#kontakt">
        Kontakt
      </ButtonPrimary>
    </div>
  );
};

export default NavDesktop;
