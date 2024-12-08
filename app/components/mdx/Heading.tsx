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
    1: 'text-3xl sm:text-4xl 2xl:text-5xl mb-4 mt-6 lg:mt-10 lg:mb-8',
    2: 'text-2xl sm:text-3xl 2xl:text-4xl mb-4 mt-6 lg:mt-10 lg:mb-8 scroll-mt-[calc(var(--header-height)+1rem)]',
    3: 'text-xl sm:text-2xl 2xl:text-3xl mb-4 mt-6 lg:mb-6 lg:mt-8 scroll-mt-[calc(var(--header-height)+1rem)]',
    4: 'text-lg sm:text-xl 2xl:text-2xl my-2 lg:my-4',
  };

  return (
    <Tag
      className={cn(headingSizes[headingLevel], 'font-heading font-medium')}
      {...(children &&
        (headingLevel === 2 || headingLevel === 3) && { id: slugify(children.toString()) })}
    >
      {children}
    </Tag>
  );
};

export default Heading;
