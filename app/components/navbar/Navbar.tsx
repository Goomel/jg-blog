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
          <Link href="/" className="text-black-500 text-3xl font-bold font-heading">
            JG.dev
          </Link>
          <NavDesktop menu={menu} />
          <NavMobile menu={menu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
