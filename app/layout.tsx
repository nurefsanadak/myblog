import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'PsyBlog - Psikoloji Öğrencisi Blog & Portfolio',
  description:
    'Psikoloji öğrencisi blog ve portfolio sitesi. Psikoloji dünyasından yazılar, araştırmalar ve kişisel gelişim içerikleri.',
  keywords: [
    'psikoloji',
    'blog',
    'klinik psikoloji',
    'gelişim psikolojisi',
    'sosyal psikoloji',
    'psikoloji öğrencisi',
  ],
  authors: [{ name: 'Nurefşan' }],
  creator: 'Nurefşan',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://psyblog.example.com',
    title: 'PsyBlog - Psikoloji Öğrencisi Blog & Portfolio',
    description:
      'Psikoloji öğrencisi blog ve portfolio sitesi. Psikoloji dünyasından yazılar, araştırmalar ve kişisel gelişim içerikleri.',
    siteName: 'PsyBlog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PsyBlog - Psikoloji Öğrencisi Blog & Portfolio',
    description:
      'Psikoloji öğrencisi blog ve portfolio sitesi. Psikoloji dünyasından yazılar, araştırmalar ve kişisel gelişim içerikleri.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
