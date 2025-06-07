import { FishOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const Link = 'a';
  return (
    <div className="flex w-full flex-col items-center gap-4 pt-10">
      <FishOff className="text-ring" size={64} />
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <Button asChild>
        <Link href="/">홈으로 이동</Link>
      </Button>
    </div>
  );
}
