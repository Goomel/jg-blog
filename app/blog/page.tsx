import PostsGrid from '@/app/components/blog/PostsGrid';
import PostCategories from '@/app/components/blog/PostCategories';
import { getAllBlogPosts } from '@/app/lib/mdxUtils';

export default function BlogPage() {
  const allPosts = getAllBlogPosts();

  return (
    <div className="container">
      <h1 className="my-8 text-center text-3xl font-medium sm:my-10 sm:text-4xl lg:my-14 lg:text-5xl">
        Wszystkie wpisy
      </h1>
      <PostCategories />
      <PostsGrid posts={allPosts} />
    </div>
  );
}
