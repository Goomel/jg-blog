import type { Metadata } from 'next';
import PostsGrid from '@/app/components/blog/PostsGrid';
import PostCategories from '@/app/components/blog/PostCategories';
import { getAllBlogPosts } from '@/app/lib/postUtils';
import '@/styles/mdx-code-theme.css';

export const metadata: Metadata = {
  title: 'jgdev.pl - Artykuły',
  description:
    'Artykuły na jgdev.pl to zbiór wartościowych treści poświęconych programowaniu i technologiom webowym. Znajdź coś dla siebie i poszerzaj swoją wiedzę!',
};

export default function BlogPage() {
  const allPosts = getAllBlogPosts();

  return (
    <div className="lg:px-6">
      <h1 className="mb-8 text-center text-3xl font-medium sm:text-4xl lg:mb-14 lg:text-5xl">
        Wszystkie wpisy
      </h1>
      <PostCategories />
      <PostsGrid posts={allPosts} />
    </div>
  );
}
