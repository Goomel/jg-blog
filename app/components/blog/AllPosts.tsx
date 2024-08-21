import React from 'react';
import PostLink from './PostLink';
import { Post } from '../../lib/types';
import { getSortedBlogPosts } from '@/app/lib/mdxUtils';

const AllPosts = () => {
  const allPosts = getSortedBlogPosts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 lg:gap-y-16">
      {allPosts.map((post: Post) => (
        <PostLink key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default AllPosts;
