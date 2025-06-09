'use client';

import type { ComponentProps } from 'react';
import { useRouter } from 'next/navigation';
import { ActionBar, Content, ImageSlider } from '@/components/post';
import { cn } from '@/lib/utils';

interface Props extends ComponentProps<typeof ImageSlider>, ComponentProps<typeof Content> {
  id: string;
}

export const PostCard = ({ id, ...props }: Props) => {
  const router = useRouter();

  const handleOpenDetailModal = (event: React.MouseEvent) => {
    if (event.target instanceof Element && event.target.closest('button')) {
      return;
    }
    router.push(`/post/${id}`, { scroll: false });
  };

  return (
    <div
      className={cn(
        'post-card',
        'bg-card flex flex-col gap-4 pb-4 duration-300 hover:shadow-lg active:shadow-lg',
      )}
      onClick={!props.isFull ? handleOpenDetailModal : undefined}
    >
      <ImageSlider {...props} />
      <ActionBar id={id} />
      <Content {...props} />
    </div>
  );
};
