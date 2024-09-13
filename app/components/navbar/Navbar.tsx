import Link from 'next/link';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import { Menu } from '@/app/lib/types';

const menu: Menu = [
  {
    title: 'Artykuły',
    href: '/blog',
  },
  {
    title: 'O mnie',
    href: '/o-mnie',
  },
];

const Navbar = () => {
  return (
    <nav className="container">
      <div className="border-b border-gray-400 py-4 lg:py-5">
        <div className="flex items-center justify-between lg:justify-normal lg:gap-10">
          <Link
            href="/"
            className="font-heading text-2xl font-extrabold text-gray-100 sm:text-3xl lg:text-4xl"
          >
            <span>jgdev</span>
            <span className="text-lemon-500">.</span>
            <span className="text-outline-white text-black-500/0">pl</span>
          </Link>
          <NavDesktop menu={menu} />
          <NavMobile menu={menu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
