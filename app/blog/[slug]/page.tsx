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
  if (!post) {
    return {
      title: 'Page not found',
    };
  }

  return post.metadata;
}

export default async function BlogPostPage({ params }: Params) {
  const post = getPostData(params.slug);
  if (!post) {
    return <div>Page not found</div>;
  }
  const { metadata, content } = post;
  return (
    <div className="container">
      <div>
        <h1>{metadata.title}</h1>
        <Image src={metadata.thumbnail} alt="" width={300} height={200} />
      </div>
      <article>
        <MDXRemote source={content} />;
      </article>
    </div>
  );
}
