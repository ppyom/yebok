import { notFound } from 'next/navigation';
import { getPost } from '@/lib/api/post';
import { ModalComponent } from './components/modal';

interface Props {
  params: Promise<{ postId: string }>;
}

export default async function Modal({ params }: Props) {
  const { postId } = await params;
  const data = await getPost(postId);

  if (!data) {
    return notFound();
  }

  return <ModalComponent {...data} />;
}
