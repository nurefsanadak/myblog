import React from 'react';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ShareButton } from '@/components/blog/ShareButton';
import { Calendar, Clock, ArrowLeft, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { getAllPostSlugs, getPostBySlug, formatDate } from '@/lib/mdx';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Yazı Bulunamadı',
    };
  }

  return {
    title: `${post.title} | PsyBlog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      authors: ['İsminiz'],
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = formatDate(post.date);
  const shareUrl = `https://psyblog.example.com/blog/${slug}`;

  return (
    <div className="pt-24 pb-20">
      <Container size="md">
        {/* Back button */}
        <Link href="/blog" className="inline-block mb-8">
          <Button variant="outline" icon={ArrowLeft}>
            Tüm Yazılar
          </Button>
        </Link>

        {/* Header */}
        <article>
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="primary">{post.category}</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-warm-charcoal mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            {/* Featured image */}
            {post.image && (
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Share buttons */}
            <div className="flex items-center gap-4 py-6 border-y border-gray-200">
              <span className="text-gray-600 font-medium">Paylaş:</span>
              <div className="flex gap-3">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-50 rounded-lg text-primary-600 hover:bg-primary-100 transition-colors"
                  aria-label="LinkedIn'de Paylaş"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-50 rounded-lg text-primary-600 hover:bg-primary-100 transition-colors"
                  aria-label="Twitter'da Paylaş"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <ShareButton
                  title={post.title}
                  text={post.summary}
                  url={shareUrl}
                />
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none whitespace-pre-wrap">
            {post.content}
          </div>

          {/* Author card */}
          <div className="mt-16 p-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-primary-200 flex-shrink-0 flex items-center justify-center">
                <span className="text-3xl font-serif font-bold text-primary-700">İ</span>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-warm-charcoal mb-2">
                  Yazar Hakkında
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Psikoloji bölümü öğrencisi olarak insan davranışlarını anlamak ve
                  insanlara yardımcı olmak için sürekli öğreniyorum. Blog yazılarımda
                  psikoloji dünyasından güncel konuları ve kişisel gelişim yazılarını
                  paylaşıyorum.
                </p>
                <Link href="/about">
                  <Button variant="outline" size="sm">
                    Daha Fazla Bilgi
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
}
