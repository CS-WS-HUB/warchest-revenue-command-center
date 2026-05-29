import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Warchest Revenue Command Center',
  description: 'Local-first revenue operating system dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
