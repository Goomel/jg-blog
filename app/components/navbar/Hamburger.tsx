import React from 'react';
import cn from 'classnames';
import { HamburgerVariant } from '@/app/lib/types';

export type HamburgerProps = {
  variant: HamburgerVariant;
  onClick: () => void;
};

const Hamburger = ({ variant, onClick }: HamburgerProps) => {
  const currentVariantClassName = cn({
    close: variant === HamburgerVariant.Close,
    open: variant === HamburgerVariant.Open,
  });
  return (
    <button
      onClick={onClick}
      className={cn(
        currentVariantClassName,
        'group flex size-8 items-center justify-center border-none bg-[transparent] lg:[&.open]:hidden',
      )}
    >
      <div className="flex cursor-pointer flex-col items-center justify-center gap-[var(--gap-between-lines)]">
        <div className="h-[var(--hamburger-line-height)] w-6 bg-gray-100 group-[&.close]:translate-y-[var(--hamburger-translate)] group-[&.close]:rotate-45"></div>
        <div className="h-[var(--hamburger-line-height)] w-6 bg-gray-100 group-[&.close]:-translate-y-[var(--hamburger-translate)] group-[&.close]:-rotate-45"></div>
      </div>
    </button>
  );
};

export default Hamburger;
