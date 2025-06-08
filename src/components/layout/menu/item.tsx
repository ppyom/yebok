'use client';

import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import Link from 'next/link';

interface Props {
  iconName: IconName;
  title: string;
  href: string;
}

export const Item = ({ iconName, title, href }: Props) => {
  return (
    <DropdownMenuItem asChild>
      <Link href={href} className="flex items-center gap-2">
        <DynamicIcon name={iconName} size={16} />
        <p>{title}</p>
      </Link>
    </DropdownMenuItem>
  );
};
