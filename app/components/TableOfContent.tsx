'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import cn from 'classnames';

const TableOfContent = ({ headings }: { headings: { text: string; link: string }[] }) => {
  const [activeHeadingLink, setActiveHeadingLink] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeadingLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0% 0px -80% 0px',
      },
    );

    const headingElements = document.querySelectorAll('h2');
    if (headingElements.length) {
      headingElements.forEach((element) => {
        observer.observe(element);
      });
    }
  }, []);

  return (
    <div className="sticky top-12 hidden border-l border-black-300 pl-3 lg:block">
      <p className="mb-4 text-[15px] text-base text-gray-100">Spis treści</p>
      <div className="flex flex-col gap-2.5">
        {headings.map((heading) => (
          <Link
            href={`#${heading.link}`}
            key={heading.link}
            className={cn('text-base transition-colors duration-200 hover:text-gray-100', {
              'text-gray-300': heading.link !== activeHeadingLink,
              'text-lemon-500': heading.link === activeHeadingLink,
            })}
          >
            {heading.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TableOfContent;
