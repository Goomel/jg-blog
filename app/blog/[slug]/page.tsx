import { MDXRemote } from 'next-mdx-remote/rsc';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { getPostData } from '@/app/lib/mdxUtils';
import Image from 'next/image';
import Code from '@/app/components/mdx/Code';
import Heading from '@/app/components/mdx/Heading';
import Protip from '@/app/components/blog/Protip';

interface Params {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Params) {
  const post = getPostData(params.slug);
  const { title, description } = post;
  if (!post) {
    return {
      title: 'Page not found',
    };
  }

  return { title, description };
}

export default async function BlogPostPage({ params }: Params) {
  const post = getPostData(params.slug);
  const { title, publishedAt, excerpt, category, thumbnail, content } = post;

  function calculateReadingTime(text: string) {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const readingTimeMinutes = Math.ceil(words / wordsPerMinute);

    return readingTimeMinutes;
  }

  const readingTime = calculateReadingTime(content);
  const readingTimeMinutesMessage =
    readingTime <= 1 ? 'minuta' : readingTime > 4 ? 'minut' : 'minuty';

  const customMdxComponents = {
    pre: (props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
      return <Code {...props} />;
    },
    h1: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
      return <Heading headingLevel={1}>{props.children}</Heading>;
    },
    h2: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
      return <Heading headingLevel={2}>{props.children}</Heading>;
    },
    h3: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
      return <Heading headingLevel={3}>{props.children}</Heading>;
    },
    h4: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
      return <Heading headingLevel={4}>{props.children}</Heading>;
    },
    Protip,
  };

  if (!post) {
    return <div>Page not found</div>;
  }

  return (
    <div className="container">
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center">
          <div className="my-8 space-y-2 sm:text-center lg:my-14 lg:space-y-4">
            <p className="text-[15px] text-lemon-500 lg:text-base">{category}</p>
            <h2 className="text-4xl font-medium sm:text-5xl 2xl:text-6xl">{title}</h2>
          </div>

          {/* <p>
            {category} - {publishedAt}
          </p>
          <p>
            {readingTime} {readingTimeMinutesMessage}
          </p> */}

          <div className="relative mx-auto mb-8 aspect-video w-full max-w-4xl lg:mb-14">
            <Image className="object-cover" src={thumbnail} fill alt="" />
          </div>
        </div>
        <article className="mx-auto max-w-4xl space-y-3 lg:space-y-6 [&>p]:my-3 [&>p]:lg:my-5">
          <MDXRemote source={content} components={customMdxComponents} />
        </article>
      </div>
    </div>
  );
}
