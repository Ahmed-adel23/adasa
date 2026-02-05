import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/posts.json";

const Categories = () => {

  const categoryIcons = {
    "إضاءة": "fa-sun",
    "بورتريه": "fa-user",
    "مناظر طبيعية": "fa-mountain-sun",
    "تقنيات": "fa-sliders",
    "معدات": "fa-camera"
  };

  return (
    <section className="py-24 bg-[#111111] relative border-y border-[#262626]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 mb-4 text-orange-500 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            التصنيفات
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">استكشف حسب الموضوع</h2>
          <p className="text-neutral-400 max-w-lg mx-auto">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {data.categories.map((cat, index) => (
            <Link
              key={index}
              to={`/blog?category=${cat.name}`}
              className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <i className={`fa-solid ${categoryIcons[cat.name] || 'fa-tag'} text-xl text-orange-500 group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                  {cat.count} مقالة
                </p>
                
                <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-4 h-4 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;