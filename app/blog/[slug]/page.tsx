import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostData } from '@/app/lib/mdxUtils';
import Image from 'next/image';

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
  if (!post) {
    return <div>Page not found</div>;
  }
  const { title, publishedAt, excerpt, category, thumbnail, content } = post;
  return (
    <div className="container">
      <div>
        <h1>{title}</h1>
        <Image src={thumbnail} alt="" width={300} height={200} />
      </div>
      <article>
        <MDXRemote source={content} />;
      </article>
    </div>
  );
}
