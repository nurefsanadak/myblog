import React from 'react';
import Link from 'next/link';
import { Heart, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'Email', href: 'mailto:example@email.com', icon: Mail },
];

const footerLinks = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Hakkımda', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'İletişim', href: '/contact' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary-50 to-accent-50 border-t border-primary-100 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary-700 mb-4">
              PsyBlog
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Psikoloji öğrencisi olarak deneyimlerimi, araştırmalarımı ve
              düşüncelerimi paylaştığım kişisel blog ve portfolio siteme hoş geldiniz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-warm-charcoal mb-4">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-warm-charcoal mb-4">
              Bağlantılar
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-600">
                Sorularınız için benimle iletişime geçebilirsiniz.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-100 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            © {currentYear} PsyBlog. Tüm hakları saklıdır.
            <span className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-accent-500 fill-accent-500" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
