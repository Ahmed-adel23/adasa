const BlogFilters = ({ searchQuery, setSearchQuery, categories, activeCategory, setActiveCategory }) => (
  <nav className="sticky top-[72px] z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        
        <div className="relative w-full lg:w-96">
          <input
            type="text"
            placeholder="ابحث في المقالات..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#161616] border border-[#262626] rounded-xl px-5 py-3 pr-12 text-white focus:outline-none focus:border-orange-500 transition-all placeholder:text-neutral-600"
          />
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"></i>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "bg-[#161616] text-neutral-400 border-[#262626] hover:border-orange-500/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

export default BlogFilters;