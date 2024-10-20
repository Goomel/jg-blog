import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import { Menu } from '@/app/lib/types';
import Logo from '@/app/components/Logo';

const menu: Menu = [
  {
    title: 'Home',
    href: '/',
  },
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
          <Logo />
          <NavDesktop menu={menu} />
          <NavMobile menu={menu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
