import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, GraduationCap, Heart, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 shadow-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-primary-300">
                {/* Replace this with actual image */}
                <svg
                  className="w-1/2 h-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
                Hakkımda
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-charcoal mb-4">
                Psikoloji Yolculuğum
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Psikoloji bölümü öğrencisi olarak insan davranışlarını anlamak ve
                insanlara yardımcı olmak için sürekli öğreniyorum. Bu blog, hem
                kendi gelişimimi takip etmek hem de öğrendiklerimi paylaşmak için
                bir platform.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-warm-charcoal mb-1">
                    Akademik Gelişim
                  </h3>
                  <p className="text-gray-600">
                    Klinik psikoloji ve gelişim psikolojisi alanlarında uzmanlaşıyorum
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-100 rounded-lg">
                  <Heart className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-warm-charcoal mb-1">
                    Tutku ve İlgi
                  </h3>
                  <p className="text-gray-600">
                    İnsan zihnini anlamak ve toplum ruh sağlığına katkıda bulunmak
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Sparkles className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-warm-charcoal mb-1">
                    Paylaşım ve İlham
                  </h3>
                  <p className="text-gray-600">
                    Bilgi ve deneyimlerimi paylaşarak başkalarına ilham vermek
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/about">
                <Button size="lg" variant="outline" icon={ArrowRight}>
                  Devamını Oku
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
