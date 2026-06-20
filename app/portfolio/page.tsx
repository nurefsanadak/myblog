import React from 'react';
import { Container } from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FileText, Award, Users, BookOpen, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | PsyBlog',
  description: 'Akademik çalışmalarım, araştırmalarım, sertifikalarım ve katıldığım etkinlikler.',
};

const academicWorks = [
  {
    title: 'Bilişsel Davranışçı Terapi Araştırması',
    type: 'Araştırma Projesi',
    date: '2024',
    description:
      'Anksiyete bozukluklarında BDT tekniklerinin etkinliği üzerine bir alan araştırması.',
    tags: ['BDT', 'Klinik Psikoloji', 'Araştırma'],
  },
  {
    title: 'Ergenlik Döneminde Kimlik Gelişimi',
    type: 'Dönem Ödevi',
    date: '2023',
    description:
      'Erikson\'un psikososyal gelişim teorisi çerçevesinde ergenlik döneminde kimlik gelişimi.',
    tags: ['Gelişim', 'Ergenlik', 'Teori'],
  },
  {
    title: 'Sosyal Medya ve Ruh Sağlığı',
    type: 'Literatür Taraması',
    date: '2023',
    description:
      'Sosyal medya kullanımının genç yetişkinlerin ruh sağlığı üzerindeki etkilerinin incelenmesi.',
    tags: ['Sosyal Psikoloji', 'Dijital', 'Ruh Sağlığı'],
  },
];

const certificates = [
  {
    title: 'Temel Psikoloji Eğitimi',
    issuer: 'Türk Psikologlar Derneği',
    date: '2023',
    description: '120 saatlik temel psikoloji eğitimi sertifikası.',
  },
  {
    title: 'BDT Temel Eğitimi',
    issuer: 'BDT Derneği',
    date: '2024',
    description: 'Bilişsel Davranışçı Terapi temel eğitimi sertifikası.',
  },
  {
    title: 'Psikolojik Danışmanlık Semineri',
    issuer: 'Üniversite Adı',
    date: '2023',
    description: 'Psikolojik danışmanlık teknikleri üzerine workshop.',
  },
];

const conferences = [
  {
    title: 'Ulusal Psikoloji Kongresi 2024',
    role: 'Katılımcı',
    date: 'Kasım 2024',
    description: 'Türkiye\'nin en büyük psikoloji kongresine aktif katılım.',
  },
  {
    title: 'Klinik Psikoloji Sempozyumu',
    role: 'Poster Sunumu',
    date: 'Haziran 2024',
    description: 'BDT araştırma projemle poster sunumu gerçekleştirdim.',
  },
  {
    title: 'Öğrenci Psikoloji Günleri',
    role: 'Organizatör',
    date: 'Mart 2024',
    description: 'Üniversite psikoloji kulübü etkinliği organizasyonu.',
  },
];

const volunteerWork = [
  {
    title: 'Ruh Sağlığı Farkındalık Kampanyası',
    organization: 'Üniversite Psikoloji Kulübü',
    period: '2023 - Devam Ediyor',
    description:
      'Toplumda ruh sağlığı farkındalığı oluşturmak için kampanya düzenleme ve yürütme.',
  },
  {
    title: 'Gönüllü Psikolojik Destek Hattı',
    organization: 'STK Adı',
    period: '2023',
    description: 'Gönüllü olarak psikolojik destek hattında çalışma deneyimi.',
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-warm-charcoal mb-6">
              Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              Akademik çalışmalarım, sertifikalarım ve katıldığım etkinlikler
            </p>
          </div>
        </Container>
      </section>

      {/* Academic Works */}
      <section className="py-20 bg-white">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary-600" />
            <h2 className="text-4xl font-serif font-bold text-warm-charcoal">
              Akademik Çalışmalar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicWorks.map((work, index) => (
              <Card key={index} hover={false} className="border-2 border-gray-100">
                <CardContent>
                  <div className="mb-3">
                    <Badge variant="primary">{work.type}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-warm-charcoal mb-2">
                    {work.title}
                  </h3>
                  <p className="text-sm text-primary-600 font-medium mb-3">
                    {work.date}
                  </p>
                  <p className="text-gray-600 mb-4">{work.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-accent-50 text-accent-700 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Certificates */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-primary-600" />
            <h2 className="text-4xl font-serif font-bold text-warm-charcoal">
              Sertifikalar ve Eğitimler
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-warm-charcoal mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-primary-600 font-medium text-sm mb-2">
                      {cert.issuer} • {cert.date}
                    </p>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Conferences */}
      <section className="py-20 bg-white">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-primary-600" />
            <h2 className="text-4xl font-serif font-bold text-warm-charcoal">
              Konferanslar ve Seminerler
            </h2>
          </div>

          <div className="space-y-4">
            {conferences.map((conf, index) => (
              <Card key={index} hover={false} className="border-2 border-gray-100">
                <CardContent className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-warm-charcoal">
                        {conf.title}
                      </h3>
                      <Badge variant="accent">{conf.role}</Badge>
                    </div>
                    <p className="text-primary-600 font-medium text-sm mb-2">
                      {conf.date}
                    </p>
                    <p className="text-gray-600">{conf.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Volunteer Work */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-primary-600" />
            <h2 className="text-4xl font-serif font-bold text-warm-charcoal">
              Gönüllü Çalışmalar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteerWork.map((work, index) => (
              <Card key={index} className="bg-white">
                <CardContent>
                  <h3 className="text-xl font-semibold text-warm-charcoal mb-2">
                    {work.title}
                  </h3>
                  <p className="text-primary-600 font-medium text-sm mb-1">
                    {work.organization}
                  </p>
                  <p className="text-gray-500 text-sm mb-3">{work.period}</p>
                  <p className="text-gray-600">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
