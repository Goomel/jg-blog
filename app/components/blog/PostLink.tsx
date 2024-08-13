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
    <Link href={`/blog/${slug}`} className="w-full">
      <div className="relative w-full aspect-[3/2] rounded-md mb-4 lg:mb-6">
        <Image src={thumbnail} alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 lg:gap-4">
          <CategoryChip categoryName={category} />
          <span>{publishedAt}</span>
        </div>
        <p className="font-heading text-3xl lg:text-4xl">{title}</p>
        <p>{excerpt}</p>
      </div>
    </Link>
  );
};

export default PostItem;
