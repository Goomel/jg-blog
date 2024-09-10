import React from 'react';
import LinkedinLogo from '@/public/icons/linkedin-logo.svg';
import GithubLogo from '@/public/icons/github-logo.svg';

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://github.com/Goomel"
        target="_blank"
        rel="noopener noreferrer"
        className="block size-11 rounded-lg p-2 transition-colors duration-200 hover:bg-black-300"
      >
        <GithubLogo />
      </a>
      <a
        href="https://www.linkedin.com/in/jakub-grzymislawski"
        target="_blank"
        rel="noopener noreferrer"
        className="block size-11 rounded-lg p-2 transition-colors duration-200 hover:bg-black-300"
      >
        <LinkedinLogo />
      </a>
    </div>
  );
};

export default SocialIcons;
