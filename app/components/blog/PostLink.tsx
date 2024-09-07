import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CategoryChip from './CategoryChip';
import { Post } from '@/app/lib/types';

const PostItem = ({
  post: { slug, thumbnail, category, publishedAt, title, excerpt },
}: {
  post: Post;
}) => {
  return (
    <Link href={`/blog/${slug}`} className="group w-full">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-t-md">
        <Image src={thumbnail} alt="" fill className="object-cover" loading="lazy" />
      </div>
      <div className="relative flex flex-col gap-4 rounded-b-md border border-black-300 border-opacity-0 px-2 py-3 transition duration-200 group-hover:border-opacity-100 group-hover:bg-black-400 lg:px-3 lg:py-5">
        <div className="flex items-center gap-3 lg:gap-4">
          <CategoryChip categoryName={category} />
          <span>{publishedAt}</span>
        </div>
        <p className="font-heading text-xl font-medium sm:text-2xl lg:text-3xl">{title}</p>
        <p>{excerpt}</p>
      </div>
    </Link>
  );
};

export default PostItem;
