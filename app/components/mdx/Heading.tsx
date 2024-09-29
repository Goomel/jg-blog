import React from 'react';
import cn from 'classnames';
import { slugify } from '@/app/lib/mdxUtils';

type HeadingProps = {
  headingLevel: 1 | 2 | 3 | 4;
  children: React.ReactNode;
};

const Heading = ({ headingLevel, children }: HeadingProps) => {
  const Tag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  const headingSizes = {
    1: 'text-3xl sm:text-4xl 2xl:text-5xl my-4 lg:my-8',
    2: 'text-2xl sm:text-3xl 2xl:text-4xl my-3 lg:my-6',
    3: 'text-xl sm:text-2xl 2xl:text-3xl my-2 lg:my-4',
    4: 'text-lg sm:text-xl 2xl:text-2xl my-2 lg:my-4',
  };

  return (
    <Tag
      className={cn(headingSizes[headingLevel], 'font-heading font-medium')}
      {...(children && headingLevel === 2 && { id: slugify(children.toString()) })}
    >
      {children}
    </Tag>
  );
};

export default Heading;
