import type { Post } from '@/types';

interface PostResponse {
  list: Post[];
}

export const getPostList = async () => {
  const response = await fetch('http://localhost:3000/data.json');
  const data: PostResponse = await response.json();

  return data.list;
};

export const getPost = async (postId: string) => {
  const response = await fetch('http://localhost:3000/data.json');
  const data: PostResponse = await response.json();

  return data.list.find((item) => item.id === postId);
};
