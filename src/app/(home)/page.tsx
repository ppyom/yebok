import { Inner } from '@/components/layout';
import { PostCard } from '@/components/post';
import type { Post } from '@/types';

export default async function Page() {
  const data = await fetch('http://localhost:3000/data.json')
    .then((res) => res.json() as Promise<{ list: Post[] }>)
    .then((data) => data.list);

  return (
    <Inner className="px-0 sm:px-4">
      <div className="flex flex-col gap-4 pt-0 sm:py-4">
        {data.map((post) => (
          <PostCard key={`post_${post.id}`} {...post} />
        ))}
      </div>
    </Inner>
  );
}
