import React from 'react';

export interface Character {
  id: string;
  name: string;
  kanji: string;
  role: string;
  age: string;
  quote: string;
  description: string;
  likes: string[];
  hates: string[];
  themeColor: string;
  imageUrl: string;
}

export interface BentoProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}