import { MDXRemote } from 'next-mdx-remote/rsc';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { getPostData } from '@/app/lib/mdxUtils';
import Image from 'next/image';
import Code from '@/app/components/blog/Code';

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
  };

  if (!post) {
    return <div>Page not found</div>;
  }

  return (
    <div className="container">
      <div>
        <p>
          {category} - {publishedAt}
        </p>
        <p>
          {readingTime} {readingTimeMinutesMessage}
        </p>
        <h1>{title}</h1>
        <Image src={thumbnail} alt="" width={300} height={200} />
      </div>
      <article>
        <MDXRemote source={content} components={customMdxComponents} />;
      </article>
    </div>
  );
}
