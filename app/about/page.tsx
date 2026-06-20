import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { GraduationCap, Heart, Award, BookOpen, Download } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımda | PsyBlog',
  description: 'Psikoloji öğrencisi olarak eğitim geçmişim, ilgi alanlarım ve hedeflerim hakkında bilgi edinin.',
};

const educationTimeline = [
  {
    year: '2021 - Devam Ediyor',
    title: 'Lisans - Psikoloji',
    institution: 'Üniversite Adı',
    description: 'Klinik psikoloji ve gelişim psikolojisi alanlarında uzmanlaşıyorum.',
  },
  {
    year: '2017 - 2021',
    title: 'Lise Diploması',
    institution: 'Lise Adı',
    description: 'Sosyal bilimler ağırlıklı eğitim.',
  },
];

const interests = [
  {
    icon: GraduationCap,
    title: 'Klinik Psikoloji',
    description: 'Psikolojik bozuklukların tanı, tedavi ve önlenmesi konularında araştırma yapıyorum.',
  },
  {
    icon: Heart,
    title: 'Gelişim Psikolojisi',
    description: 'İnsan gelişiminin farklı evrelerini ve bu evrelerdeki değişimleri inceliyorum.',
  },
  {
    icon: BookOpen,
    title: 'Nörobilim',
    description: 'Beyin ve sinir sistemi ile davranış arasındaki ilişkiyi araştırıyorum.',
  },
  {
    icon: Award,
    title: 'Araştırma',
    description: 'Akademik araştırmalar yaparak psikoloji bilimini ilerlettirmeyi hedefliyorum.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-primary-300">
                  <svg
                    className="w-3/4 h-3/4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-warm-charcoal">
                Hakkımda
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Merhaba! Ben [İsminiz], psikoloji bölümü öğrencisiyim. İnsan
                davranışlarını anlamak ve insanlara yardımcı olmak için sürekli
                öğreniyor ve gelişiyorum.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Klinik psikoloji ve gelişim psikolojisi alanlarında uzmanlaşmayı
                hedefliyor, akademik çalışmalarımı ve öğrendiğim bilgileri bu
                platformda sizlerle paylaşıyorum. Amacım, psikoloji bilimini daha
                erişilebilir kılmak ve toplum ruh sağlığına katkıda bulunmaktır.
              </p>
              <div className="pt-4">
                <Button icon={Download} size="lg">
                  CV İndir
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Interests Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-charcoal mb-4">
              İlgi Alanlarım
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Psikoloji biliminin farklı alanlarında çalışıyor ve araştırma yapıyorum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <Card key={index} hover={false} className="border-2 border-gray-100">
                  <CardContent className="flex items-start gap-4">
                    <div className="p-4 bg-primary-100 rounded-lg flex-shrink-0">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-warm-charcoal mb-2">
                        {interest.title}
                      </h3>
                      <p className="text-gray-600">{interest.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Education Timeline */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-charcoal mb-4">
              Eğitim Geçmişim
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Akademik yolculuğum ve eğitim hayatım
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {educationTimeline.map((item, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-primary-300 last:border-l-0 last:pb-0">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary-500 rounded-full -translate-x-[9px]"></div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-warm-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-primary-600 font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-charcoal mb-8 text-center">
              Değerlerim ve Hedeflerim
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Psikoloji eğitimim boyunca, bilimsel yöntemleri kullanarak insan
                davranışlarını anlamayı ve insanlara yardımcı olmayı öğreniyorum.
                Empatik yaklaşım, etik değerler ve sürekli öğrenme benim için çok
                önemli.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Gelecekte klinik psikolog olarak çalışmayı ve aynı zamanda akademik
                araştırmalar yaparak psikoloji bilimine katkıda bulunmayı
                hedefliyorum. Özellikle toplum ruh sağlığı konusunda farkındalık
                oluşturmak ve insanların psikolojik destek almalarını
                normalleştirmek istiyorum.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bu blog, hem kendi öğrenme sürecimi belgelemek hem de öğrendiklerimi
                sizlerle paylaşmak için bir platform. Birlikte öğreniyor, birlikte
                büyüyoruz.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
