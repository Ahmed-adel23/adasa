import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import postsData from "../../data/posts.json";
import PostHeader from "../post/PostHeader";
import PostSidebar from "../post/PostSidebar";
import PostContent from "../post/PostContent";
import RelatedPosts from "../post/RelatedPosts";

const SinglePostPage = () => {
  const { slug } = useParams();
  
const post = postsData.posts.find((p) => p.slug === slug);

const parseContent = (content) => {
  const firstHeaderIndex = content.indexOf("##");
  
  const intro = content.substring(0, firstHeaderIndex).trim();
  
  const remainingContent = content.substring(firstHeaderIndex);
  
  const parts = remainingContent.split('##').filter(p => p.trim() !== "");
  
  const sections = parts.map(part => {
    const lines = part.trim().split('\n');
    return {
      title: lines[0].trim(),
      content: lines.slice(1).join('\n').trim()
    };
  });

  return { intro, sections };
};

const { intro, sections } = parseContent(post.content);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <div className="text-white text-center py-20">المقال غير موجود</div>;

  return (
    <article className="bg-[#0a0a0a] min-h-screen" dir="rtl">
      <PostHeader post={post} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          
          <div className="order-2 lg:order-1">
            <PostContent post={post} sections={sections} intro={intro} />
          </div>

          <aside className="order-1 lg:order-2">
            <PostSidebar post={post} sections={sections} />
          </aside>
          
        </div>

        <RelatedPosts currentCategory={post.category} currentPostId={post.id} />
      </div>
    </article>
  );
};

export default SinglePostPage;