import PostsGrid from '@/app/components/blog/PostsGrid';
import PostCategories from '@/app/components/blog/PostCategories';
import { getAllBlogPosts } from '@/app/lib/mdxUtils';
import '@/styles/mdx-code-theme.css';

export default function BlogPage() {
  const allPosts = getAllBlogPosts();

  return (
    <div className="lg:px-6">
      <h1 className="mb-8 text-center text-3xl font-medium sm:text-4xl lg:mb-14 lg:text-5xl">
        Wszystkie wpisy
      </h1>
      <PostCategories />
      <PostsGrid posts={allPosts} />
    </div>
  );
}
