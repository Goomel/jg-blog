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
  // {
  //   title: 'O mnie',
  //   href: '/o-mnie',
  // },
];

const Navbar = () => {
  return (
    <nav className="container sticky top-0 z-10 h-[var(--header-height)] bg-black-500">
      <div className="py-4 lg:py-4">
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
