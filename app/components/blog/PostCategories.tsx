import Link from 'next/link';
import cn from 'classnames';
import { getPostsCategories, slugify } from '@/app/lib/mdxUtils';

const PostCategories = ({ currentCategory }: { currentCategory?: string }) => {
  const categories = getPostsCategories();

  return (
    <div className="mb-8 flex gap-4 lg:mb-10">
      <Link
        className={cn(
          'rounded px-2 py-1 transition-colors duration-200 lg:px-3',
          !currentCategory ? 'bg-lemon-500 text-black-500' : 'bg-black-400 hover:bg-black-300',
        )}
        href="/blog"
      >
        Wszystkie
      </Link>
      {categories.map((category) => (
        <Link
          href={`/kategorie/${slugify(category)}`}
          className={cn(
            'rounded px-2 py-1 transition-colors duration-200 lg:px-3',
            category === currentCategory
              ? 'bg-lemon-500 text-black-500'
              : 'bg-black-400 hover:bg-black-300',
          )}
          key={category}
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default PostCategories;
