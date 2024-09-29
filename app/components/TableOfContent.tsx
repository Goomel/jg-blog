import Link from 'next/link';

const TableOfContent = ({ headings }: { headings: { text: string; link: string }[] }) => {
  return (
    <div className="sticky top-12 hidden border-l border-black-300 pl-3 lg:block">
      <p className="mb-4 text-[15px] text-base text-lemon-500">Spis treści</p>
      <div className="flex flex-col gap-2.5">
        {headings.map((heading) => (
          <Link href={`#${heading.link}`} key={heading.link} className="text-base text-gray-300">
            {heading.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TableOfContent;
