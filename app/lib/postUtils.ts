import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Post } from '@/app/lib/types';
import { getAllMDXFileNames, getPostData, slugify } from './mdxUtils';

dayjs.locale('pl');
dayjs.extend(customParseFormat);

export const sortPostsByDate = (posts: Post[]) => {
  return posts.sort(
    // Sort posts by date
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
};

export const getAllBlogPosts = (): Post[] => {
  const postNames = getAllMDXFileNames();
  return postNames.map((postName) => ({
    ...getPostData(postName),
  }));
};

// Returns 5 latest posts
export const getLatestBlogPosts = (): Post[] => sortPostsByDate(getAllBlogPosts()).slice(0, 5);

export const getPostsCategories = () => {
  // create Array of unique categories (Set is used to remove duplicates)
  const categories = Array.from(new Set(getAllBlogPosts().map((post) => post.category)));
  return categories;
};

export const getPostsByCategory = (category: string): Post[] => {
  const posts = getAllBlogPosts();
  return posts.filter((post) => post.category === category);
};

export const getPostsByCategorySlug = (categorySlug: string): Post[] => {
  const posts = getAllBlogPosts();
  return posts.filter((post) => slugify(post.category) === categorySlug);
};

export const formatDate = (date: string) => dayjs(date, 'DD-MM-YYYY').format('D MMMM YYYY');
