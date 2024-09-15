'use client';
import React, { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';

import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

const code = `
import RecentPosts from './components/blog/RecentPosts';
import ContactForm from './components/form/ContactForm';
import PlussesPattern from '@/public/bg/plusses-pattern.svg';

export default function Home() {
  return (
    <main className="lg:px-6">
    </main>
  );
}
`;

const Code = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div>
      <pre>
        <code className={`language-ts`}>{code}</code>
      </pre>
    </div>
  );
};

export default Code;
