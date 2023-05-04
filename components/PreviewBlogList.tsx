'use client';
import React from 'react';
import BlogList from './BlogList';
import { usePreview } from '@/lib/sanity.preview';

type props = {
  query: string;
};
function PreviewBlogList({ query }: props) {
  const posts = usePreview(null, query);
  return <BlogList posts={posts} />;
}

export default PreviewBlogList;
