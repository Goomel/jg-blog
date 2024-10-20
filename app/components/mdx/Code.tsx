'use client';
import React, { useEffect, DetailedHTMLProps, HTMLAttributes, isValidElement } from 'react';
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

const Code = (props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="my-3 max-w-full overflow-hidden rounded-md lg:my-5 lg:rounded-lg">
      <pre className="[&>code]:lg:text-wrap">
        {isValidElement(props.children) ? <code {...props.children.props}></code> : null}
      </pre>
    </div>
  );
};

export default Code;
