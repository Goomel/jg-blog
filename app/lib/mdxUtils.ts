import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostData, PostMetadata } from '@/app/lib/types';

export const pathToPosts = path.join(process.cwd(), '/content/posts');

const getMDXFile = (filename: string) => {
  const MDXFilePath = path.join(pathToPosts, `${filename}.mdx`);
  return fs.existsSync(MDXFilePath) ? MDXFilePath : null;
};

const readMDXFile = (pathToFile: string) => {
  return fs.readFileSync(pathToFile, 'utf-8');
};

export const getPostData = (slug: string): PostData => {
  const MDXFile = getMDXFile(slug);
  if (!MDXFile) throw new Error(`MDX file with slug ${slug} doesn't exist`);
  const source = readMDXFile(MDXFile);
  const { content, data } = matter(source);
  return { metadata: data as PostMetadata, slug, content };
};

const getAllMDXFileNames = () => {
  const files = fs.readdirSync(pathToPosts);
  return files.map((file) => path.parse(file).name);
};

export const getAllBlogPosts = () => {
  const postNames = getAllMDXFileNames();
  const blogPosts = postNames.map((postName) => ({
    ...getPostData(postName),
  }));
  return blogPosts;
};
