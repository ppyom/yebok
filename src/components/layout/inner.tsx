import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export const Inner = ({ children, className, asChild }: Props) => {
  const Component = asChild ? Slot : 'div';

  return (
    <Component className={cn('inner w-full max-w-(--max-width) px-4', className)}>
      {children}
    </Component>
  );
};
