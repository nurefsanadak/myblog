import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 pt-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Illustration */}
          <div className="mb-8">
            <h1 className="text-9xl font-serif font-bold text-primary-300 mb-4">404</h1>
            <div className="w-32 h-32 mx-auto bg-primary-100 rounded-full flex items-center justify-center">
              <Search className="h-16 w-16 text-primary-400" />
            </div>
          </div>

          {/* Content */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-charcoal mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen URL&apos;i
            kontrol edin veya ana sayfaya dönün.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/">
              <Button size="lg" icon={Home}>
                Ana Sayfa
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" size="lg">
                Blog Yazıları
              </Button>
            </Link>
          </div>

          {/* Popular Links */}
          <div className="mt-12 p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-warm-charcoal mb-4">
              Popüler Sayfalar
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/about"
                className="text-primary-600 hover:text-primary-700 hover:underline"
              >
                Hakkımda
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/portfolio"
                className="text-primary-600 hover:text-primary-700 hover:underline"
              >
                Portfolio
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/contact"
                className="text-primary-600 hover:text-primary-700 hover:underline"
              >
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
