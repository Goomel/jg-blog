import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostData } from '@/app/lib/mdxUtils';

interface Params {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Params) {
  const post = getPostData(params.slug);
  if (post === null) {
    return {
      title: 'Page not found',
    };
  }
  return { ...post.metadata };
}

export default async function BlogPostPage({ params }: Params) {
  const post = getPostData(params.slug);
  if (post === null) {
    return <div>Page not found</div>;
  }
  return <MDXRemote source={post.content} />;
}
