import SocialIcons from './buttons/SocialIcons';

const Footer = () => {
  return (
    <footer className="pb-10 pt-20 lg:pb-14 lg:pt-28">
      <div className="container">
        <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-start">
          <p>
            © {new Date().getFullYear()} Jakub Grzymisławski.
            <br />
            All rights reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
