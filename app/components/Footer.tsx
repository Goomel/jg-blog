import Link from 'next/link';
import SocialIcons from './buttons/SocialIcons';

const Footer = () => {
  return (
    <footer className="pb-14 pt-20 lg:pb-14 lg:pt-28">
      <div className="container">
        <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-end">
          <p>
            © {new Date().getFullYear()} Jakub Grzymisławski.
            <br />
            All rights reserved.
          </p>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <SocialIcons />
            <Link
              href={'/polityka-prywatnosci'}
              className="relative inline-block overflow-hidden pb-1 text-base text-gray-100 before:absolute before:bottom-0 before:left-0 before:block before:h-px before:w-full before:origin-bottom-right before:-scale-x-0 before:bg-gray-100 before:transition-transform before:duration-300 before:content-[''] hover:before:origin-bottom-left hover:before:scale-x-100"
            >
              Polityka prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
