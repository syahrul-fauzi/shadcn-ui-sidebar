// src/store/useStore.ts
import create from 'zustand';
import { Post, Category, Tag } from '@/types';

interface Store {
  posts: Post[];
  categories: Category[];
  tags: Tag[];
  currentPage: number;
  postsPerPage: number;
  setPosts: (posts: Post[]) => void;
  setCategories: (categories: Category[]) => void;
  setTags: (tags: Tag[]) => void;
  setCurrentPage: (page: number) => void;
  setPostsPerPage: (count: number) => void;
}

export const useStore = create<Store>((set) => ({
  posts: [],
  categories: [],
  tags: [],
  currentPage: 1,
  postsPerPage: 5,
  setPosts: (posts) => set({ posts }),
  setCategories: (categories) => set({ categories }),
  setTags: (tags) => set({ tags }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setPostsPerPage: (count) => set({ postsPerPage: count }),
}));
