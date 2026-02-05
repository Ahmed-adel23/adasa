import { motion } from "framer-motion";

const BlogHeader = () => (
  <header className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-[#0a0a0a]"></div>
    <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 text-center">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#161616] border border-[#262626] text-orange-500 px-4 py-2 rounded-full inline-flex items-center gap-3 mb-6 text-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
        </span>
        <span className="flex items-center gap-2">
          مدونتنا <i className="fa-regular fa-newspaper text-xs opacity-80"></i>
        </span>
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
      >
        استكشف <span className="text-orange-500">مقالاتنا</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xl text-neutral-400 max-w-2xl mx-auto"
      >
        اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
      </motion.p>
    </div>
  </header>
);

export default BlogHeader;
