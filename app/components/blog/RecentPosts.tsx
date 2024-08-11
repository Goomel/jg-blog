import React from 'react';
import PostLink from './PostLink';
import { PostData } from '../../lib/types';

const RecentPosts = ({ posts }: { posts: PostData[] }) => {
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );

  const recentPosts = sortedPosts.slice(0, 5);

  if (posts.length < 5) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8">
        {recentPosts
          .slice(0, 2)
          .map((post: PostData) =>
            post.metadata ? <PostLink key={post.slug} post={post} /> : null,
          )}
      </div>
    );
  } else {
    return (
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 mb-10 lg:mb-16">
          {recentPosts
            .slice(0, 2)
            .map((post: PostData) =>
              post.metadata ? <PostLink key={post.slug} post={post} /> : null,
            )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          {recentPosts
            .slice(2, 5)
            .map((post: PostData) =>
              post.metadata ? <PostLink key={post.slug} post={post} /> : null,
            )}
        </div>
      </div>
    );
  }
};

export default RecentPosts;
