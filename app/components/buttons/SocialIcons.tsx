'use client';
import React, { useState } from 'react';
import LinkedinLogo from '@/public/icons/linkedin-logo.svg';
import GithubLogo from '@/public/icons/github-logo.svg';
import LinkIcon from '@/public/icons/link.svg';

const SocialIcons = ({ showCopyUrlIcon = false }: { showCopyUrlIcon?: boolean }) => {
  const [copySuccess, setCopySuccess] = useState(showCopyUrlIcon ? '' : null);

  const copyToClipboard = async () => {
    if (!showCopyUrlIcon) return;

    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setCopySuccess('Tekst został skopiowany!');
    setTimeout(() => {
      setCopySuccess('');
    }, 2000);
  };

  return (
    <>
      {copySuccess && (
        <div className="fixed left-1/2 top-[calc(var(--header-height)+0.5rem)] -translate-x-1/2 rounded-md bg-lemon-500 px-3 py-1.5 shadow-lg">
          <p className="text-sm font-medium text-black-500 lg:text-base">{copySuccess}</p>
        </div>
      )}
      <div className="flex items-center gap-4">
        {showCopyUrlIcon && (
          <div
            onClick={copyToClipboard}
            className="block size-11 cursor-pointer rounded-lg p-2 transition-colors duration-200 hover:bg-black-300"
          >
            <LinkIcon />
          </div>
        )}
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
    </>
  );
};

export default SocialIcons;
