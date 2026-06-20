import React from 'react';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardImage, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface BlogCardProps {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  readingTime: string;
  image?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  summary,
  date,
  category,
  readingTime,
  image
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="h-full">
        {image && <CardImage src={image} alt={title} />}
        <CardContent>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="primary">{category}</Badge>
          </div>

          <CardHeader>
            <CardTitle className="hover:text-primary-600 transition-colors line-clamp-2">
              {title}
            </CardTitle>
          </CardHeader>

          <CardDescription>{summary}</CardDescription>

          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readingTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
