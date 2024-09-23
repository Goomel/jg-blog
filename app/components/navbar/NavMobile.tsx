'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickAway, useMedia } from 'react-use';
import { Menu, MenuItem, HamburgerVariant } from '@/app/lib/types';
import Hamburger from './Hamburger';
import Logo from '@/app/components/Logo';

const NavMobile = ({ menu }: { menu: Menu }) => {
  const [isOpen, setOpen] = useState(false);
  const navMobileRef = useRef(null);
  const toggleMenuOpen = () => {
    setOpen(!isOpen);
  };

  // Close the menu when user click outside the component
  useClickAway(navMobileRef, () => setOpen(false));

  // Close the menu when user enlarge the screen to > 1024px
  const isWide = useMedia('(min-width: 1024px)', false);
  useEffect(() => {
    if (isWide) setOpen(false);
  }, [isWide]);

  // Disable scrolling when menu is open
  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.style.overflow = isOpen ? 'hidden' : 'auto';
    }
  }, [isOpen]);

  return (
    <div ref={navMobileRef} className="z-10 lg:hidden">
      <div className={cn({ overlay: isOpen })}></div>
      <Hamburger variant={HamburgerVariant.Open} onClick={toggleMenuOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 top-0 h-screen w-full bg-black-400 pl-10 pr-6 pt-8 xs:w-80"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <Hamburger variant={HamburgerVariant.Close} onClick={toggleMenuOpen} />
            </div>
            <ul className="flex flex-col gap-6 pt-12">
              {menu.map((menuItem: MenuItem, index) => (
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 25,
                    delay: 0.15 + index / 10,
                  }}
                  key={menuItem.title}
                  className="list-none"
                >
                  <Link
                    href={menuItem.href}
                    className="text-base font-medium text-gray-100 xs:text-lg"
                  >
                    {menuItem.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
