import React from 'react';
import PostLink from './PostLink';
import { Post } from '../../lib/types';
import ButtonPrimary from '../buttons/ButtonPrimary';
import { getLatestBlogPosts } from '@/app/lib/mdxUtils';

const RecentPosts = () => {
  const recentPosts = getLatestBlogPosts();

  const renderPostGrid = () => {
    if (recentPosts.length < 5) {
      return (
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:gap-y-16">
          {recentPosts.slice(0, 2).map((post: Post) => (
            <PostLink key={post.slug} post={post} />
          ))}
        </div>
      );
    }

    return (
      <div>
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mb-16 lg:gap-16">
          {recentPosts.slice(0, 2).map((post: Post) => (
            <PostLink key={post.slug} post={post} />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
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
      <ButtonPrimary as="link" href="/blog" additionalClassNames="mr-0 ml-auto" hasArrow={true}>
        Wszystkie wpisy
      </ButtonPrimary>
    </div>
  );
};

export default RecentPosts;
