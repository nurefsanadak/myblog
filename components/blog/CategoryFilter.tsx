'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';

export const categories = [
  'Tümü',
  'Klinik Psikoloji',
  'Gelişim Psikolojisi',
  'Sosyal Psikoloji',
  'Nörobilim',
  'Kişisel Gelişim',
  'Kitap İncelemeleri',
  'Öğrenci Hayatı',
];

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedCategory === category
              ? 'bg-primary text-white shadow-md'
              : 'bg-white text-warm-charcoal border-2 border-gray-200 hover:border-primary hover:text-primary'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
