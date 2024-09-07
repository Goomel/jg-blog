import React from 'react';
import cn from 'classnames';
import Link, { LinkProps } from 'next/link';
import ArrowRight from '@/public/icons/arrow-right.svg';

type ButtonProps = {
  children: React.ReactNode;
  hasArrow?: boolean;
  additionalClassNames?: string;
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
      as: 'button';
    })
  | (LinkProps & {
      as: 'link';
    })
);

const baseClassnames =
  'flex text-sm lg:text-base items-center gap-3 bg-lemon-500 w-fit px-5 py-3 font-medium rounded-full hover:bg-lemon-400 transition-colors duration-200 text-black-500';

const ButtonPrimary = ({ additionalClassNames, ...props }: ButtonProps) => {
  if (props.as === 'link') {
    const { as, ...rest } = props;
    return (
      <Link className={cn(baseClassnames, additionalClassNames)} {...rest}>
        <span>{rest.children}</span>
        {props.hasArrow && <ArrowRight />}
      </Link>
    );
  }
  const { as, ...rest } = props;
  return (
    <button className={cn(baseClassnames, additionalClassNames)} {...rest}>
      <span>{rest.children}</span>
      {props.hasArrow && <ArrowRight />}
    </button>
  );
};

export default ButtonPrimary;
