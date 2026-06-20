# PsyBlog - Psikoloji Öğrencisi Blog & Portfolio Sitesi

Psikoloji öğrencisi için modern, profesyonel ve sıcak bir blog & portfolio sitesi.

## Özellikler

- 🎨 Modern ve sıcak tasarım (Lavender & Sage green renk paleti)
- 📝 MDX destekli blog sistemi
- 🏷️ Kategori bazlı filtreleme
- 🔍 Blog yazıları arama
- 📱 Tamamen responsive tasarım
- ⚡ Next.js 14 App Router ile yüksek performans
- 🎭 Framer Motion animasyonlar
- 📊 Portfolio ve akademik çalışmalar bölümü
- 📧 İletişim formu
- 🎓 Hakkımda sayfası timeline ile

## Teknoloji Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animasyonlar**: Framer Motion
- **İkonlar**: Lucide React
- **CMS**: MDX (Markdown)
- **Dil**: TypeScript

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development server'ı başlat
npm run dev

# Production build
npm run build

# Production'ı başlat
npm start
```

## Proje Yapısı

```
/app                    # Next.js App Router sayfaları
  /blog                # Blog sayfaları
  /about               # Hakkımda sayfası
  /portfolio           # Portfolio sayfası
  /contact             # İletişim sayfası
/components            # React componentleri
  /ui                  # Temel UI componentleri
  /layout              # Layout componentleri
  /blog                # Blog componentleri
  /home                # Ana sayfa componentleri
/content               # MDX blog yazıları
  /blog                # Blog içerikleri
/lib                   # Yardımcı fonksiyonlar
/public                # Statik dosyalar
```

## Blog Yazısı Ekleme

`content/blog` klasörüne yeni bir `.mdx` dosyası ekleyin:

```mdx
---
title: "Yazı Başlığı"
date: "2025-01-07"
category: "Klinik Psikoloji"
summary: "Kısa özet..."
image: "/images/blog/cover.jpg"
---

# İçerik buraya...
```

## Özelleştirme

### Renkler

`tailwind.config.ts` dosyasından renk paletini düzenleyebilirsiniz.

### Kişisel Bilgiler

- `components/layout/Footer.tsx` - Footer bilgileri
- `components/layout/Navbar.tsx` - Navigasyon
- `app/about/page.tsx` - Hakkımda içeriği
- `app/portfolio/page.tsx` - Portfolio içeriği

### Sosyal Medya Linkleri

Footer ve Hero bölümlerindeki sosyal medya linklerini güncelleyin.

## Deploy

### Vercel'e Deploy

1. Projeyi GitHub'a push edin
2. [Vercel](https://vercel.com)'e gidin
3. "Import Project" ile repo'yu bağlayın
4. Deploy butonuna tıklayın

Otomatik deploy aktif olacaktır.

## Kategoriler

- Klinik Psikoloji
- Gelişim Psikolojisi
- Sosyal Psikoloji
- Nörobilim
- Kişisel Gelişim
- Kitap İncelemeleri
- Öğrenci Hayatı

## Lisans

MIT License

## İletişim

Sorularınız için [email@example.com](mailto:email@example.com) adresinden ulaşabilirsiniz.
