import { notFound } from 'next/navigation';
import { PostCard } from '@/components/post';
import { Inner } from '@/components/layout';
import { getPost } from '@/lib/api/post';

interface Props {
  params: Promise<{ postId: string }>;
}

export default async function Page({ params }: Props) {
  const { postId } = await params;
  const data = await getPost(postId);

  if (!data) {
    return notFound();
  }

  return (
    <Inner className="overflow-hidden p-0">
      <PostCard {...data} isFull={true} />
    </Inner>
  );
}
