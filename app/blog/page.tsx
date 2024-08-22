import AllPosts from '@/app/components/blog/AllPosts';
import PostCategories from '@/app/components/blog/PostCategories';
import { getPostsCategories } from '@/app/lib/mdxUtils';

export default function Blog() {
  const categories = getPostsCategories();

  return (
    <div className="container">
      <h1 className="relative mx-auto my-8 w-fit font-heading text-3xl font-medium before:absolute before:-right-4 before:top-0 before:-z-10 before:block before:h-full before:w-3/4 before:translate-y-[20%] before:bg-lemon-500 before:content-[''] sm:my-10 sm:text-4xl lg:my-14 lg:text-5xl">
        Wszystkie wpisy
      </h1>
      <PostCategories categories={categories} />
      <AllPosts />
    </div>
  );
}
