'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { Inner } from '@/components/layout';
import { PostCard } from '@/components/post';
import { cn } from '@/lib/utils';
import type { Post } from '@/types';

type Props = Post;

export const ModalComponent = (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const handleClose = () => {
    ref.current?.classList.add('opacity-0');
    setTimeout(() => router.back(), 300);
  };

  useEffect(() => {
    ref.current?.classList.remove('opacity-0');
  }, []);

  return (
    <div
      ref={ref}
      className="modal fixed inset-0 z-50 flex size-full flex-col items-center justify-center gap-4 bg-black/30 opacity-0 backdrop-blur-sm duration-300"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <Inner className="overflow-hidden p-0 md:rounded-md">
        <PostCard {...props} isFull={true} />
      </Inner>
      <button
        className={cn(
          'absolute top-2 right-2 cursor-pointer rounded-full bg-white/50 p-2',
          'md:static md:duration-300 md:hover:bg-white/90',
        )}
        onClick={handleClose}
      >
        <X />
      </button>
    </div>
  );
};
