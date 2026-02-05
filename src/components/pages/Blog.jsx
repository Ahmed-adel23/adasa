import React, { useState, useMemo, useEffect } from "react";
import BlogGrid from "../blog/BlogGrid";
import BlogHeader from "../blog/BlogHeader";
import BlogFilters from "../blog/BlogFilters";
import postsData from "../../data/posts.json";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("جميع المقالات");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = useMemo(() => 
    ["جميع المقالات", ...postsData.categories.map(cat => cat.name)], 
  []);

  const filteredPosts = useMemo(() => {
    return postsData.posts.filter((post) => {
      const matchesCategory = activeCategory === "جميع المقالات" || post.category === activeCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-[#0a0a0a]" dir="rtl">
      <BlogHeader />
      
      <BlogFilters 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <main className="py-12">
         <BlogGrid posts={filteredPosts} />
      </main>
    </div>
  );
};

export default Blog;