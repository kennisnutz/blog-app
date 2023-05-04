import '../../styles/globals.css';

export const metadata = {
  title: 'KennisBlog',
  description: 'My dev journey',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
