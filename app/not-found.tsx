import Link from 'next/link';
import ArrowRight from '@/public/icons/arrow-right.svg';

export default function NotFound() {
  return (
    <div className="mt-10 lg:mt-20 text-center space-y-5">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold">
        404<span className="text-lemon-500">.</span>
      </h2>
      <p>Niestety, strona nie istnieje.</p>
      <Link
        href="/"
        className="flex items-center gap-3 bg-lemon-500 w-fit px-5 py-3 font-semibold mx-auto rounded-full hover:bg-lemon-400 transition-colors duration-200"
      >
        <span>Wróć do strony głównej</span>
        <ArrowRight />
      </Link>
    </div>
  );
}
