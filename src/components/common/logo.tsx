import Link from 'next/link';
import { Cat } from 'lucide-react';

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center select-none">
      <h1 className="font-bold">YEBOK</h1>
      <Cat />
    </Link>
  );
};
