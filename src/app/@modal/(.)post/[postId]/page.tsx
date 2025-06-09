import { notFound } from 'next/navigation';
import type { Post } from '@/types';
import { ModalComponent } from './components/modal';

interface Props {
  params: Promise<{ postId: string }>;
}

export default async function Modal({ params }: Props) {
  const { postId } = await params;
  const data = await fetch('http://localhost:3000/data.json')
    .then((res) => res.json() as Promise<{ list: Post[] }>)
    .then((data) => data.list.find((item) => item.id === postId));

  if (!data) {
    return notFound();
  }

  return <ModalComponent {...data} />;
}
