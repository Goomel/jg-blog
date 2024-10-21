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

export const getAllMDXFileNames = () => {
  const files = fs.readdirSync(pathToPosts);
  return files.map((file) => path.parse(file).name);
};

const readMDXFile = (pathToFile: string) => {
  return fs.readFileSync(pathToFile, 'utf-8');
};

//  Extract data from MDX file
export const getPostData = (slug: string): Post => {
  const MDXFile = getMDXFile(slug);
  if (!MDXFile) throw new Error(`MDX file with slug ${slug} doesn't exist`);
  const source = readMDXFile(MDXFile);
  const { content, data } = matter(source);

  return {
    /** The slug of the post */
    slug: slugify(slug),
    /** The content of the post */
    content,
    /** Other post data from gray-matter */
    ...(data as Omit<Post, 'slug' | 'content'>),
  };
};
