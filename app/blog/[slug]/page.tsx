import { MDXRemote } from 'next-mdx-remote/rsc';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { getPostData, slugify } from '@/app/lib/mdxUtils';
import Image from 'next/image';
import Code from '@/app/components/mdx/Code';
import Heading from '@/app/components/mdx/Heading';
import Protip from '@/app/components/blog/Protip';
import { remark } from 'remark';
import html from 'remark-html';
import TableOfContent from '@/app/components/TableOfContent';
import SocialIcons from '@/app/components/buttons/SocialIcons';

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

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  const getHeadings = (htmlString: string): { text: string; link: string }[] | undefined => {
    const regex = /<h2>(.*?)<\/h2>/g;
    const matches = htmlString.match(regex);

    if (matches) {
      return matches.map((heading) => {
        const headingText = heading.replace('<h2>', '').replace('</h2>', '');
        const headingLink = slugify(headingText);

        return {
          text: headingText,
          link: headingLink,
        };
      });
    }
  };

  const headings = getHeadings(contentHtml);

  const calculateReadingTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const readingTimeMinutes = Math.ceil(words / wordsPerMinute);

    return readingTimeMinutes;
  };

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
    <div className="container pt-8 lg:pt-14">
      <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between lg:mb-8">
        <div>
          <div className="mb-4 space-y-2 lg:mb-6 lg:space-y-4">
            <p className="text-[15px] text-lemon-500 lg:text-base">{category}</p>
            <Heading headingLevel={1}>{title}</Heading>
          </div>
          <div className="mb-4 flex items-center text-gray-300 md:mb-0">
            <p className="border-r border-gray-300 pr-6">Opubikowano: {publishedAt}</p>
            <p className="pl-6">
              Czas czytania: {readingTime} {readingTimeMinutesMessage}
            </p>
          </div>
        </div>
        <SocialIcons />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] lg:gap-10">
        <article>
          <div className="relative mx-auto mb-8 aspect-video w-full max-w-4xl lg:mb-14">
            <Image className="object-cover" src={thumbnail} fill alt="" />
          </div>
          <div className="max-w-4xl flex-col lg:flex-row [&>ol]:text-gray-300 [&>p]:text-gray-300 [&>ul]:text-gray-300">
            <MDXRemote source={content} components={customMdxComponents} />
          </div>
        </article>
        <div className="space-y-3 lg:gap-10 lg:space-y-6 [&>p]:my-3 [&>p]:lg:my-5">
          {headings ? <TableOfContent headings={headings} /> : null}
        </div>
      </div>
    </div>
  );
}
