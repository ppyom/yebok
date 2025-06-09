import { cn } from '@/lib/utils';

interface Props {
  current: number;
  pages: number;
}

export const PageIndicator = ({ current, pages }: Props) => {
  return (
    <div className="absolute bottom-4 left-1/2 h-2.5 w-20 -translate-x-1/2 overflow-hidden">
      <div
        className="absolute top-0 flex items-center gap-2 duration-300"
        style={{ left: `-${Math.min(current, pages - 3) - 2}rem` }}
      >
        {Array.from({ length: pages }).map((_, idx) => (
          <div
            key={`pagination_${idx}`}
            className={cn(
              'size-2 rounded-full bg-white/50',
              idx === current && 'size-2.5 bg-amber-300',
            )}
          />
        ))}
      </div>
    </div>
  );
};
