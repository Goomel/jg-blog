import Link from 'next/link';
import cn from 'classnames';
import { getPostsCategories } from '@/app/lib/mdxUtils';

const PostCategories = ({ currentCategory }: { currentCategory?: string }) => {
  const categories = getPostsCategories();

  return (
    <div className="flex gap-4">
      {categories.map((category) => (
        <Link
          href={`/kategorie/${category}`}
          className={cn(category === currentCategory && 'bg-lemon-500')}
          key={category}
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default PostCategories;
