import { cn } from '@/lib/utils';

interface Props {
  current: number;
  pages: number;
}

export const PageIndicator = ({ current, pages }: Props) => {
  return (
    <div
      className={cn(
        'absolute bottom-4 flex h-2.5 w-20 items-center self-center overflow-hidden',
        pages <= 5 && 'justify-center',
      )}
    >
      <div
        className="absolute top-0 flex items-center justify-center gap-2 duration-300"
        style={pages > 5 ? { translate: `-${Math.min(current, pages - 3) - 2}rem` } : undefined}
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
