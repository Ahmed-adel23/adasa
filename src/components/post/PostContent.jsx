import React from "react";

const PostContent = ({ post, sections, intro }) => (
  <>
    <div className="p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
      <p className="text-lg text-neutral-200 leading-relaxed italic">
            {post.excerpt}
      </p>
    </div>

{intro && (
      <div className="mb-10">
        <p className="text-neutral-300 leading-relaxed text-xl">
          {intro}
        </p>
      </div>
    )}
<div className="prose-custom">
      {sections.map((section, index) => (
        <div key={index} className="mb-12">
          <h2
            id={`section-${index}`}
            className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
          >
            <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
              <i className="fa-solid fa-camera text-orange-500"></i>
            </span>
            {section.title}
          </h2>
          <div className="text-neutral-300 leading-relaxed text-lg whitespace-pre-line">
            {section.content}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
          <i className="fa-solid fa-tags text-orange-500"></i>
        </div>
        <h3 className="font-bold text-white">الوسوم</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {post.tags?.map((tag, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
            <i className="fa-solid fa-share-nodes text-orange-500"></i>
          </div>
          <h3 className="font-bold text-white">شارك المقال</h3>
        </div>
        <div className="flex gap-2">
          {["x-twitter", "linkedin-in", "whatsapp"].map((social) => (
            <button key={social} className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white transition-all duration-300">
              <i className={`fa-brands fa-${social}`}></i>
            </button>
          ))}
          <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white transition-all">
            <i className="fa-solid fa-link"></i>
          </button>
        </div>
      </div>
    </div>

    <div className="mt-6 p-8 bg-gradient-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          alt={post.author.name}
          className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
          src={post.author.avatar}
        />
        <div className="text-center sm:text-right flex-1">
          <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
            كاتب المقال
          </span>
          <h3 className="text-xl font-bold text-white mt-1">{post.author.name}</h3>
          <p className="text-neutral-500 text-sm mb-3">{post.author.role}</p>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {post.author.bio || "مصور محترف شغوف بمشاركة المعرفة في عالم التصوير الفوتوغرافي."}
          </p>
        </div>
      </div>
    </div>
  </>
);

export default PostContent;