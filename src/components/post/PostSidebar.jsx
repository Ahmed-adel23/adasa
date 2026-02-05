import React from "react";

const PostSidebar = ({ post, sections }) => (
  <div className="lg:sticky lg:top-24 space-y-6">
    <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
          <i className="fa-solid fa-list text-orange-500"></i>
        </div>
        <h3 className="font-bold text-white">محتويات المقال</h3>
      </div>
      
<nav className="space-y-2">
    {sections.map((section, i) => (
      <a key={i} href={`#section-${i}`} className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 hover:bg-gradient-to-r hover:from-orange-500/25 hover:to-yellow-500/25 text-white">
        <span className="text-white"> {i + 1} </span>
        <span className="text-sm">{section.title}</span>
      </a>
    ))}
  </nav>
    </div>
    <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
          <i className="fa-regular fa-clock text-orange-500 text-xl mb-2"></i>
          <p className="text-white font-bold text-xs md:text-sm">{post.readTime}</p>
          <p className="text-neutral-500 text-[10px] uppercase">وقت القراءة</p>
        </div>
        <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
          <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2"></i>
          <p className="text-white font-bold text-xs md:text-sm">{post.date.split(' ').slice(0, 2).join(' ')}</p>
          <p className="text-neutral-500 text-[10px] uppercase">تاريخ النشر</p>
        </div>
      </div>
    </div>
    <div className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
      <div className="text-center">
        <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <i className="fa-solid fa-envelope text-orange-500 text-xl"></i>
        </div>
        <h3 className="font-bold text-white mb-2">لا تفوّت جديدنا</h3>
        <p className="text-neutral-400 text-sm mb-4">
          اشترك للحصول على أحدث المقالات
        </p>
        <button className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center">
          اشترك الآن
        </button>
      </div>
    </div>
  </div>
);

export default PostSidebar;