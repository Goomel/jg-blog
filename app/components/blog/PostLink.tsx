import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CategoryChip from './CategoryChip';
import { PostData } from '@/app/lib/types';

const PostItem = ({ post }: { post: PostData }) => {
  return (
    <Link href={`/blog/${post.slug}`} className="w-full">
      <div className="relative w-full aspect-[3/2] rounded-md lg:mb-6">
        <Image src={post.metadata.thumbnail} alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 lg:gap-4">
          <CategoryChip categoryName={post.metadata.category} />
          <span>{post.metadata.publishedAt}</span>
        </div>
        <p className="font-heading text-3xl lg:text-4xl">{post.metadata.title}</p>
        <p>{post.metadata.excerpt}</p>
      </div>
    </Link>
  );
};

export default PostItem;
