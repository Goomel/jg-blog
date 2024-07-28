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
    <nav className="">
      <div className="container ">
        <div className="border-b border-gray-400 py-4 lg:py-5">
          <div className="flex items-center justify-between lg:justify-normal lg:gap-10">
            <a href="./" className="text-black-500 text-3xl font-bold font-heading">
              <span className="uppercase">JG</span>.dev
            </a>
            <NavDesktop menu={menu} />
            <NavMobile menu={menu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
