import { EmptyIcon, Logo } from '@/components/common';
import { Inner, Menu } from '@/components/layout';

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 h-14 bg-white/20 backdrop-blur-md">
      <Inner className="flex items-center justify-between">
        <EmptyIcon size={24} />
        <Logo />
        <Menu />
      </Inner>
    </header>
  );
};
