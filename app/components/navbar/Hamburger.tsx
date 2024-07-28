import React from 'react';
import cn from 'classnames';
import { Menu } from '@/app/lib/types';
import { HamburgerProps, HamburgerVariant } from '@/app/lib/types';

const Hamburger: React.FC<HamburgerProps> = ({ variant, onClick }) => {
  const currentVariantClassName = cn({
    close: variant === HamburgerVariant.Close,
    open: variant === HamburgerVariant.Open,
  });
  return (
    <button
      onClick={onClick}
      className={cn(
        currentVariantClassName,
        'flex justify-center items-center size-8 bg-[transparent] border-none group lg:[&.open]:hidden',
      )}
    >
      <div className="flex flex-col items-center justify-center gap-[var(--gap-between-lines)] cursor-pointer">
        <div className="bg-black-500 w-6 h-[var(--hamburger-line-height)] group-[&.close]:translate-y-[var(--hamburger-translate)] group-[&.close]:rotate-45"></div>
        <div className="bg-black-500 w-6 h-[var(--hamburger-line-height)] group-[&.close]:-translate-y-[var(--hamburger-translate)] group-[&.close]:-rotate-45"></div>
      </div>
    </button>
  );
};
const menu: Menu = [
  {
    title: 'Home',
    href: '#',
  },
  {
    title: 'Explore',
    href: '#',
  },
  {
    title: 'About',
    href: '#',
  },
];

export default Hamburger;
