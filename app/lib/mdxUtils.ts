import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/app/lib/types';

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

export const pathToPosts = path.join(process.cwd(), '/content/posts');

const getMDXFile = (filename: string) => {
  const MDXFilePath = path.join(pathToPosts, `${filename}.mdx`);
  return fs.existsSync(MDXFilePath) ? MDXFilePath : null;
};

const readMDXFile = (pathToFile: string) => {
  return fs.readFileSync(pathToFile, 'utf-8');
};

export const getPostData = (slug: string): Post => {
  const MDXFile = getMDXFile(slug);
  if (!MDXFile) throw new Error(`MDX file with slug ${slug} doesn't exist`);
  const source = readMDXFile(MDXFile);
  const { content, data } = matter(source);
  return {
    ...(data as Omit<Post, 'slug' | 'content'>),
    slug: slugify(slug),
    content,
  };
};

const getAllMDXFileNames = () => {
  const files = fs.readdirSync(pathToPosts);
  return files.map((file) => path.parse(file).name);
};

export const sortPostsByDate = (posts: Post[]) => {
  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
};

export const getAllBlogPosts = (): Post[] => {
  const postNames = getAllMDXFileNames();
  const posts = postNames.map((postName) => ({
    ...getPostData(postName),
  }));
  return posts;
};

export const getLatestBlogPosts = (): Post[] => {
  const sortedPosts = sortPostsByDate(getAllBlogPosts());
  const recentPosts = sortedPosts.slice(0, 5);
  return recentPosts;
};

export const getPostsCategories = () => {
  const posts = getAllBlogPosts();
  // create Array of unique categories (Set is used to remove duplicates)
  const categories = Array.from(new Set(posts.map((post) => post.category)));
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
