'use client';
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
// import 'prismjs/themes/prism-tomorrow.css';

const codeBlock = `
import { categories, type Category } from '@/categories';

type foo = {
  bar: string
}

export default async function Category({
  params,
}: {
  params: { category: Category };
}) {
  const { category } = params;

  // comment

  return (
    <main>
      <h1>Category: {category}</h1>
    </main>
  );
}
`;

const Code = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <pre>
        <code className={`language-tsx`}>{codeBlock}</code>
      </pre>
    </div>
  );
};

export default Code;
