import Link from 'next/link';
import cn from 'classnames';
import { getPostsCategories, slugify } from '@/app/lib/mdxUtils';

const PostCategories = ({ currentCategory }: { currentCategory?: string }) => {
  const categories = getPostsCategories();

  return (
    <div className="mb-8 w-full overflow-x-scroll lg:mb-10 lg:overflow-auto">
      <div className="flex gap-4 pb-4 lg:pb-0">
        <Link
          className={cn(
            'text-nowrap rounded px-2 py-1 transition-colors duration-200 lg:px-3',
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
              'text-nowrap rounded px-2 py-1 transition-colors duration-200 lg:px-3',
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
    </div>
  );
};

export default PostCategories;
