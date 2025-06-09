import { cn } from '@/lib/utils';

interface Props {
  content: string;
  createdAt: string;
  isFull?: boolean;
}

export const Content = ({ content, createdAt, isFull }: Props) => {
  return (
    <div className="content flex h-full flex-col gap-2 px-4">
      <p className={cn('text-card-foreground whitespace-break-spaces', !isFull && 'line-clamp-3')}>
        {content}
      </p>
      <data className="text-muted-foreground">{createdAt}</data>
    </div>
  );
};
