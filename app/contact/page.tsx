'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Mail, Linkedin, Instagram, Twitter, MapPin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'example@email.com',
    link: 'mailto:example@email.com',
  },
  {
    icon: MapPin,
    label: 'Konum',
    value: 'İstanbul, Türkiye',
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
    color: 'hover:text-blue-600',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: Instagram,
    color: 'hover:text-pink-600',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: Twitter,
    color: 'hover:text-blue-400',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-warm-charcoal mb-6">
              İletişim
            </h1>
            <p className="text-xl text-gray-600">
              Sorularınız, önerileriniz veya iş birliği teklifleriniz için benimle
              iletişime geçebilirsiniz
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card hover={false} className="border-2 border-gray-100">
                <CardContent>
                  <h2 className="text-3xl font-serif font-bold text-warm-charcoal mb-6">
                    Mesaj Gönder
                  </h2>

                  {submitMessage && (
                    <div className="mb-6 p-4 bg-primary-100 border-2 border-primary-300 text-primary-700 rounded-lg">
                      {submitMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <Input
                      label="İsim"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Adınız Soyadınız"
                      required
                    />

                    <Input
                      label="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ornek@email.com"
                      required
                    />

                    <Input
                      label="Konu"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Mesajınızın konusu"
                      required
                    />

                    <Textarea
                      label="Mesaj"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mesajınızı buraya yazın..."
                      rows={6}
                      required
                    />

                    <Button
                      type="submit"
                      icon={Send}
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} hover={false} className="border-2 border-gray-100">
                      <CardContent className="flex items-start gap-4">
                        <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-warm-charcoal mb-1">
                            {info.label}
                          </h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-primary-600 hover:text-primary-700 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-600">{info.value}</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Media */}
              <Card hover={false} className="border-2 border-gray-100">
                <CardContent>
                  <h3 className="font-semibold text-warm-charcoal mb-4">
                    Sosyal Medya
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 bg-gray-100 rounded-lg text-gray-600 transition-colors ${social.color}`}
                          aria-label={social.name}
                        >
                          <Icon className="h-6 w-6" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card hover={false} className="bg-gradient-to-br from-primary-50 to-accent-50 border-0">
                <CardContent>
                  <h3 className="font-semibold text-warm-charcoal mb-2">
                    Yanıt Süresi
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Genellikle 24-48 saat içinde yanıt veriyorum. Sabırınız için
                    teşekkür ederim!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-warm-charcoal mb-8 text-center">
              Sık Sorulan Sorular
            </h2>

            <div className="space-y-4">
              <Card hover={false} className="bg-white">
                <CardContent>
                  <h3 className="text-lg font-semibold text-warm-charcoal mb-2">
                    Blog yazılarınızı nasıl takip edebilirim?
                  </h3>
                  <p className="text-gray-600">
                    Blog sayfamdan tüm yazılarıma ulaşabilir, kategorilere göre
                    filtreleyebilirsiniz. Ayrıca sosyal medya hesaplarımdan yeni
                    yazıları duyuruyorum.
                  </p>
                </CardContent>
              </Card>

              <Card hover={false} className="bg-white">
                <CardContent>
                  <h3 className="text-lg font-semibold text-warm-charcoal mb-2">
                    İş birliği teklifleri için nasıl iletişime geçebilirim?
                  </h3>
                  <p className="text-gray-600">
                    İş birliği tekliflerinizi yukarıdaki form aracılığıyla veya
                    email adresimden bana ulaştırabilirsiniz.
                  </p>
                </CardContent>
              </Card>

              <Card hover={false} className="bg-white">
                <CardContent>
                  <h3 className="text-lg font-semibold text-warm-charcoal mb-2">
                    Psikolojik destek alabilir miyim?
                  </h3>
                  <p className="text-gray-600">
                    Henüz öğrenci olduğum için profesyonel psikolojik destek
                    sağlayamıyorum. Ancak size yardımcı olabilecek kaynaklar ve
                    profesyonel psikologlar hakkında bilgi verebilirim.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
