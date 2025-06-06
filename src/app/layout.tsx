import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Yebok',
};

interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: Props) {
  return (
    <html lang="ko">
      <body className={`${notoSans.className} antialiased`}>
        {children}
        <div id="modal-container">{modal}</div>
        <Toaster />
      </body>
    </html>
  );
}
