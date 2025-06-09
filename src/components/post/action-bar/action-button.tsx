import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import { cn } from '@/lib/utils';

interface Props {
  icon: IconName;
  active?: boolean;
  activeColor?: string;
  onClick?: () => void;
}

export const ActionButton = ({ icon, active, activeColor, onClick }: Props) => {
  const activeClassName = activeColor ?? 'text-amber-500';
  return (
    <button
      className="flex cursor-pointer rounded-full bg-stone-500/10 p-2 text-stone-400 duration-300 hover:bg-stone-500/20 dark:hover:bg-stone-500/50"
      onClick={onClick}
    >
      <DynamicIcon
        className={cn('size-5 fill-current stroke-2 duration-300', active && activeClassName)}
        name={icon}
      />
    </button>
  );
};
