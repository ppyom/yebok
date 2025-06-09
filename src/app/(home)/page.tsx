import { Inner } from '@/components/layout';
import { PostCard } from '@/components/post';
import { getPostList } from '@/lib/api/post';

export default async function Page() {
  const data = await getPostList();

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
