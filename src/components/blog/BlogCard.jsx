import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogCard = ({ post, index, viewMode }) => {
  const isList = viewMode === "list";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: isList ? 0 : -4 }}
      className="group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden"
    >
      <Link className={`flex ${isList ? "flex-col md:flex-row" : "flex-col"}`} to={`/blog/${post.slug}`}>
        <div
          className={`relative flex-shrink-0 overflow-hidden ${isList ? "w-full md:w-72 lg:w-80 h-52 md:h-auto" : "h-52"}`}
        >
          <img
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={post.image}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="flex-1 p-6 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-neutral-500">
              <i className="fa-regular fa-clock text-xs"></i> {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-sm text-neutral-500">
              <i className="fa-regular fa-calendar text-xs"></i> {post.date}
            </span>
          </div>

          <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h2>

          <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed text-sm">{post.excerpt}</p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3">
              <img
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]"
                src={post.author.avatar}
              />
              <div>
                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-neutral-500">{post.author.role}</p>
              </div>
            </div>

            <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
              اقرأ المقال <i className="fa-solid fa-arrow-left"></i>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
