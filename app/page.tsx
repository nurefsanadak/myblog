import React from 'react';
import { Hero } from '@/components/home/Hero';
import { FeaturedPosts } from '@/components/home/FeaturedPosts';
import { AboutPreview } from '@/components/home/AboutPreview';
import { getAllPosts } from '@/lib/mdx';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
      <AboutPreview />
    </>
  );
}
