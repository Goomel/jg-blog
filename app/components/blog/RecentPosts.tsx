import React from 'react';
import PostLink from './PostLink';
import { PostData } from '../../lib/types';

const RecentPosts = ({ posts }: { posts: PostData[] }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6">
      {posts.map((post: PostData) =>
        post.metadata ? <PostLink key={post.slug} post={post} /> : null,
      )}
    </div>
  );
};

export default RecentPosts;
