import React from 'react';
import Link from 'next/link';
import { BlogCard } from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { BlogPostMeta } from '@/lib/mdx';

interface FeaturedPostsProps {
  posts: BlogPostMeta[];
}

export const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-charcoal mb-4">
            Son Blog Yazıları
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Psikoloji dünyasından en güncel yazılarımı keşfedin
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Henüz blog yazısı yok.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.slice(0, 3).map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  summary={post.summary}
                  date={post.date}
                  category={post.category}
                  readingTime={post.readingTime}
                  image={post.image}
                />
              ))}
            </div>

            <div className="text-center">
              <Link href="/blog">
                <Button size="lg" icon={ArrowRight}>
                  Tüm Yazıları Gör
                </Button>
              </Link>
            </div>
          </>
        )}
      </Container>
    </section>
  );
};
