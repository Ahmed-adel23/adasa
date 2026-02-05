import React from "react";

const AboutHero = () => {
  const stats = [
    { label: "قارئ شهرياً", value: "+2مليون", icon: "fa-users" },
    { label: "مقالة منشورة", value: "+500", icon: "fa-newspaper" },
    { label: "كاتب خبير", value: "+50", icon: "fa-pen-nib" },
    { label: "تصنيف", value: "+15", icon: "fa-book-open" }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#262626] text-orange-500 text-sm">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
          من نحن
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          مهمتنا هي <span className="bg-gradient-to-l from-orange-500 to-yellow-500 bg-clip-text text-transparent">الإعلام والإلهام</span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((item, idx) => (
            <div key={idx} className="p-6 bg-[#111111]/80 backdrop-blur-sm rounded-2xl border border-[#262626]">
              <i className={`fa-solid ${item.icon} text-2xl text-orange-500 mb-2 block`}></i>
              <div className="text-3xl font-bold text-orange-400 mb-1">{item.value}</div>
              <div className="text-sm text-neutral-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;