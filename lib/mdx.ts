import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image?: string;
  content: string;
  readingTime: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image?: string;
  readingTime: string;
}

// Get all blog post slugs
export function getAllPostSlugs(): string[] {
  try {
    const files = fs.readdirSync(contentDirectory);
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace(/\.mdx$/, ''));
  } catch (error) {
    return [];
  }
}

// Get a single blog post by slug
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const readTime = readingTime(content);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      category: data.category || 'Genel',
      summary: data.summary || '',
      image: data.image || '',
      content,
      readingTime: readTime.text,
    };
  } catch (error) {
    return null;
  }
}

// Get all blog posts metadata
export function getAllPosts(): BlogPostMeta[] {
  const slugs = getAllPostSlugs();
  const posts: BlogPostMeta[] = [];

  slugs.forEach((slug) => {
    const post = getPostBySlug(slug);
    if (post) {
      posts.push({
        slug: post.slug,
        title: post.title,
        date: post.date,
        category: post.category,
        summary: post.summary,
        image: post.image,
        readingTime: post.readingTime,
      });
    }
  });

  // Sort by date (newest first)
  posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return posts;
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPostMeta[] {
  const allPosts = getAllPosts();

  if (category === 'Tümü') {
    return allPosts;
  }

  return allPosts.filter((post) => post.category === category);
}

// Search posts
export function searchPosts(query: string): BlogPostMeta[] {
  const allPosts = getAllPosts();

  if (!query) {
    return allPosts;
  }

  const lowercaseQuery = query.toLowerCase();

  return allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.summary.toLowerCase().includes(lowercaseQuery) ||
      post.category.toLowerCase().includes(lowercaseQuery)
  );
}

// Format date to Turkish locale
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('tr-TR', options);
}
