'use client';

import React, { useState, useMemo } from 'react';
import { Container } from '@/components/layout/Container';
import { BlogCard } from '@/components/blog/BlogCard';
import { CategoryFilter } from '@/components/blog/CategoryFilter';
import { SearchBar } from '@/components/blog/SearchBar';
import { getAllPosts } from '@/lib/mdx';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const allPosts = getAllPosts();

  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    // Filter by category
    if (selectedCategory !== 'Tümü') {
      posts = posts.filter((post) => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowercaseQuery) ||
          post.summary.toLowerCase().includes(lowercaseQuery) ||
          post.category.toLowerCase().includes(lowercaseQuery)
      );
    }

    return posts;
  }, [allPosts, selectedCategory, searchQuery]);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-warm-charcoal mb-4">
            Blog Yazıları
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Psikoloji dünyasından yazılar, araştırmalar ve düşünceler
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        {/* Category Filter */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              {searchQuery
                ? 'Aramanızla eşleşen yazı bulunamadı.'
                : 'Bu kategoride henüz yazı yok.'}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
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

            {/* Results count */}
            <div className="text-center mt-12">
              <p className="text-gray-600">
                {filteredPosts.length} yazı gösteriliyor
                {selectedCategory !== 'Tümü' && ` (${selectedCategory})`}
              </p>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
