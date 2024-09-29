// import type { MDXComponents } from 'mdx/types';
// import { DetailedHTMLProps, HTMLAttributes } from 'react';
// import Code from '@/app/components/mdx/Code';
// import Heading from '@/app/components/mdx/Heading';
// import Protip from '@/app/components/blog/Protip';

// export function useMDXComponents(components: MDXComponents): MDXComponents {
//   return {
//     pre: (props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
//       return <Code {...props} />;
//     },
//     h1: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
//       return <Heading headingLevel={1}>{props.children}</Heading>;
//     },
//     h2: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
//       return <Heading headingLevel={2}>{props.children}</Heading>;
//     },
//     h3: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
//       return <Heading headingLevel={3}>{props.children}</Heading>;
//     },
//     h4: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
//       return <Heading headingLevel={4}>{props.children}</Heading>;
//     },
//     Protip,
//   };
// }
