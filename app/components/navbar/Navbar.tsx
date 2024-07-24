import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import { Menu } from '@/app/lib/types';

const menu: Menu = [
  {
    title: 'Artykuły',
    href: '#',
  },
  {
    title: 'O mnie',
    href: '#',
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="container py-4 lg:py-5 border-b border-black-500">
        <div className="flex items-center justify-between lg:justify-normal lg:gap-10">
          <a href="./" className="text-black-500 text-3xl font-bold font-heading">
            <span className="uppercase">JG</span>.dev
          </a>

          <NavDesktop menu={menu} />
          <NavMobile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
