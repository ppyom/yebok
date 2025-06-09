import path from 'path';
import fs from 'fs/promises';
import type { Post } from '@/types';

export const getPostList = async () => {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data: Post[] = JSON.parse(fileContents);

  return data;
};

export const getPost = async (postId: string) => {
  const allPosts = await getPostList();
  return allPosts.find((p) => p.id === postId);
};
