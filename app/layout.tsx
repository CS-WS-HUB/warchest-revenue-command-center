import './globals.css';

export const metadata = {
  title: 'Warchest Revenue Command Center | Aether Capital Edition',
  description: 'Premium local-first GTM command center for metric-first revenue operators.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
