import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostData, PostMetadata } from '@/app/lib/types';

export const pathToPosts = path.join(process.cwd(), '/content');

const getMDXFile = (filename: string) => {
  const MDXFilePath = path.join(pathToPosts, `${filename}.mdx`);
  return fs.existsSync(MDXFilePath) ? MDXFilePath : null;
};

const readMDXFile = (pathToFile: string) => {
  return fs.readFileSync(pathToFile, 'utf-8');
};

export const getPostData = (slug: string): PostData | null => {
  const MDXFile = getMDXFile(slug);
  if (!MDXFile) return null;
  const source = readMDXFile(MDXFile);
  const { content, data } = matter(source);
  return { metadata: data as PostMetadata, content };
};

// const getAllMDXFileNames = () => {
//   const files = fs.readdirSync(pathToPosts);
//   return files.map((file) => path.parse(file).name);
// };

// export const getBlogPosts = () => {
//   const postNames = getAllMDXFileNames();
//   const blogPosts = postNames.map((postName) => ({
//     slug: postName,
//     ...getPostData(postName),
//   }));
//   return blogPosts;
// };
