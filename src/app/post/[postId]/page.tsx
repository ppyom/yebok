import { notFound } from 'next/navigation';
import { PostCard } from '@/components/post';
import { Inner } from '@/components/layout';
import type { Post } from '@/types';

interface Props {
  params: Promise<{ postId: string }>;
}

export default async function Page({ params }: Props) {
  const { postId } = await params;
  const data = await fetch('http://localhost:3000/data.json')
    .then((res) => res.json() as Promise<{ list: Post[] }>)
    .then((data) => data.list.find((item) => item.id === postId));

  if (!data) {
    return notFound();
  }

  return (
    <Inner className="overflow-hidden p-0">
      <PostCard {...data} isFull={true} />
    </Inner>
  );
}
