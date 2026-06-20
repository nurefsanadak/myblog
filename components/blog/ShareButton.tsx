'use client';

import React from 'react';
import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ title, text, url }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url,
      });
    }
  };

  return (
    <button
      onClick={handleShare}
      className="p-2 bg-primary-50 rounded-lg text-primary-600 hover:bg-primary-100 transition-colors"
      aria-label="Paylaş"
    >
      <Share2 className="h-5 w-5" />
    </button>
  );
};
