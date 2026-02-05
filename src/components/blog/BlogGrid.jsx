import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogCard from "./BlogCard";

const BlogGrid = ({ posts }) => {
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    setCurrentPage(1);
  }, [posts]);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (n) => {
    setCurrentPage(n);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-neutral-400">
          تم العثور على <span className="font-bold text-white text-lg">{posts.length}</span> مقالة
        </p>

        <div className="flex bg-[#161616] border border-[#262626] rounded-xl p-1.5 shadow-inner">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 px-4 rounded-lg flex items-center gap-2 transition-all ${viewMode === "grid" ? "bg-orange-500 text-white shadow-md" : "text-neutral-500 hover:text-white"}`}
          >
            <i className="fa-solid fa-table-cells-large"></i> شبكة
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 px-4 rounded-lg flex items-center gap-2 transition-all ${viewMode === "list" ? "bg-orange-500 text-white shadow-md" : "text-neutral-500 hover:text-white"}`}
          >
            <i className="fa-solid fa-list-ul"></i> قائمة
          </button>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {posts.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-32 border border-[#262626] rounded-3xl bg-[#111]"
          >
            <div className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-search text-3xl text-neutral-600"></i>
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">لا توجد نتائج!</h3>
            <p className="text-neutral-500">جرب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً.</p>
          </motion.div>
        ) : (
          <motion.div
            key={`page-${currentPage}-${viewMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`grid gap-8 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
          >
            {currentPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} viewMode={viewMode} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-2 p-2 bg-[#161616] border border-[#262626] rounded-2xl">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white disabled:opacity-20 hover:bg-neutral-800 transition-all"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-11 h-11 rounded-xl font-bold transition-all ${
                  currentPage === i + 1 ? "bg-orange-500 text-white" : "text-neutral-500 hover:bg-neutral-800"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white disabled:opacity-20 hover:bg-neutral-800 transition-all"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </div>
          <p className="text-neutral-600 mt-4 text-xs tracking-widest uppercase">
            صفحة {currentPage} من {totalPages}
          </p>
        </motion.div>
      )}
    </main>
  );
};

export default BlogGrid;
