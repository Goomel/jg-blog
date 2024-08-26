import React from 'react';
import PostLink from './PostLink';
import { Post } from '../../lib/types';
import { sortPostsByDate } from '@/app/lib/mdxUtils';

const PostsGrid = ({ posts }: { posts: Post[] }) => {
  const sortedPosts = sortPostsByDate(posts);

  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
      {sortedPosts.map((post: Post) => (
        <PostLink key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default PostsGrid;
