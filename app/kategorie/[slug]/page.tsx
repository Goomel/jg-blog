import PostsGrid from '@/app/components/blog/PostsGrid';
import PostCategories from '@/app/components/blog/PostCategories';
import { getPostsByCategorySlug } from '@/app/lib/mdxUtils';

interface Params {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: Params) {
  const currentCategorySlug = params.slug;
  const currentCategoryPosts = getPostsByCategorySlug(currentCategorySlug);
  const currentCategoryName = currentCategoryPosts[0].category;

  return (
    <div className="lg:px-6">
      <h1 className="mb-8 text-center text-3xl font-medium sm:text-4xl lg:mb-14 lg:text-5xl">
        {currentCategoryName}
      </h1>
      <PostCategories currentCategory={currentCategoryName} />
      <PostsGrid posts={currentCategoryPosts} />
    </div>
  );
}
