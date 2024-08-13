'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickAway, useMedia } from 'react-use';
import { Menu, MenuItem, HamburgerVariant } from '@/app/lib/types';
import Hamburger from './Hamburger';

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
            className="w-full xs:w-[clamp(400px,50%,600px)] h-screen absolute top-0 right-0 bg-gray-100 pt-4 pl-8"
          >
            <Hamburger variant={HamburgerVariant.Close} onClick={toggleMenuOpen} />
            <ul className="pt-12 flex flex-col gap-6 ">
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
                    className="text-black-500 font-medium text-base xs:text-lg"
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
