import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PostHeader = ({ post }) => (
  <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
    <img alt={post.title} className="absolute inset-0 w-full h-full object-cover" src={post.image} />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>

    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-8 right-8 left-8"
    >
      <nav className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
        <Link className="text-white/70 hover:text-white transition-colors" to="/">
          <i className="fa-solid fa-home"></i>
        </Link>
        <i className="fa-solid fa-chevron-left text-white/30 text-xs"></i>
        <Link className="text-white/70 hover:text-white transition-colors" to="/blog">
          المدونة
        </Link>
        <i className="fa-solid fa-chevron-left text-white/30 text-xs"></i>
        <span className="text-orange-400 font-medium">{post.category}</span>
      </nav>
    </motion.div>

    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full">{post.category}</span>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <i className="fa-regular fa-calendar"></i>
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-regular fa-clock"></i>
              {post.readTime}
            </span>
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl"
        >
          {post.title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit"
        >
          <img
            alt={post.author.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
            src={post.author.avatar}
          />
          <div>
            <p className="font-bold text-white">{post.author.name}</p>
            <p className="text-sm text-white/60">{post.author.role}</p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default PostHeader;
