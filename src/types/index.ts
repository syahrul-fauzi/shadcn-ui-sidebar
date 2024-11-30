// src/types/index.ts


export type Post = {
  id: string
  title: string
  author: string
  status: "published" | "draft" | "archived"
  date: string
  category: string
  tags: string[]  // Pastikan tags adalah array string
  excerpt: string
  content: string
}
  
  export interface Category {
    id: string;
    name: string;
  }
  
  export interface Tag {
    id: string;
    name: string;
  }
  
  export interface author {
    id: string
    name: string
  }
  