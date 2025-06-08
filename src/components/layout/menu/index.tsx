import { Menu as MenuIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Item } from '@/components/layout/menu/item';

export const Menu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MenuIcon className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Item href="/about" iconName="cat" title="예복이를 소개합니다!" />
        <DropdownMenuSeparator />
        <Item href="/like" iconName="heart" title="좋아요" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
