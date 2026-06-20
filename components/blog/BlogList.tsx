'use client';

import React, { useState, useMemo } from 'react';
import { BlogCard } from './BlogCard';
import { CategoryFilter } from './CategoryFilter';
import { SearchBar } from './SearchBar';
import { BlogPostMeta } from '@/lib/mdx';

interface BlogListProps {
  posts: BlogPostMeta[];
}

export const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory !== 'Tümü') {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(lowercaseQuery) ||
          post.summary.toLowerCase().includes(lowercaseQuery) ||
          post.category.toLowerCase().includes(lowercaseQuery)
      );
    }

    return filtered;
  }, [posts, selectedCategory, searchQuery]);

  return (
    <>
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
    </>
  );
};
