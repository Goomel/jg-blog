import React from 'react';
import PostLink from './PostLink';
import { Post } from '../../lib/types';
import ButtonPrimary from '../buttons/ButtonPrimary';

const RecentPosts = ({ posts }: { posts: Post[] }) => {
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const recentPosts = sortedPosts.slice(0, 5);

  const renderPostGrid = () => {
    if (posts.length < 5) {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8">
          {recentPosts.slice(0, 2).map((post: Post) => (
            <PostLink key={post.slug} post={post} />
          ))}
        </div>
      );
    }

    return (
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 mb-10 lg:mb-16">
          {recentPosts.slice(0, 2).map((post: Post) => (
            <PostLink key={post.slug} post={post} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          {recentPosts.slice(2, 5).map((post: Post) => (
            <PostLink key={post.slug} post={post} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {renderPostGrid()}
      <ButtonPrimary as="link" href="/blog" additionalClassNames="max-lg:ml-0 lg:mr-0">
        Wszystkie wpisy
      </ButtonPrimary>
    </div>
  );
};

export default RecentPosts;
