import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/layout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yebok',
  description: '우리집 막내 예복이 😺',
  openGraph: {
    title: 'Yebok 😺',
    description: '우리집 막내 예복이',
    images: '/yebok.jpeg',
  },
};

interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: Props) {
  return (
    <html lang="ko">
      <body className="bg-background antialiased">
        <Header />
        <main>{children}</main>
        <div id="modal-container">{modal}</div>
        <Toaster />
      </body>
    </html>
  );
}
