import React from 'react';
import cn from 'classnames';
import Link, { LinkProps } from 'next/link';
import ArrowRight from '@/public/icons/arrow-right.svg';

type ButtonProps = {
  children: React.ReactNode;
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
  'flex items-center gap-3 bg-lemon-500 w-fit px-5 py-3 font-medium mx-auto rounded-full hover:bg-lemon-400 transition-colors duration-200';

const ButtonPrimary = ({ additionalClassNames, ...props }: ButtonProps) => {
  if (props.as === 'link') {
    const { as, ...rest } = props;
    return (
      <Link className={cn(baseClassnames, additionalClassNames)} {...rest}>
        <span>{rest.children}</span>
        <ArrowRight />
      </Link>
    );
  }
  const { as, ...rest } = props;
  return (
    <button className={cn(baseClassnames, additionalClassNames)} {...rest}>
      <span>{rest.children}</span>
      <ArrowRight />
    </button>
  );
};

export default ButtonPrimary;
