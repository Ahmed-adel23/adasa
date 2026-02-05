import { Link } from "react-router-dom";

const AboutCTA = () => (
  <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden mx-4 rounded-3xl mb-10">
    <div className="relative max-w-4xl mx-auto text-center px-4 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">لديك أسئلة؟ دعنا نتحدث!</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="mailto:hello@adasah.com" className="px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:scale-105 transition-all">تواصل معنا</a>
        <Link to="/blog" className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-orange-500 transition-all">تصفح المقالات</Link>
      </div>
    </div>
  </section>
);

export default AboutCTA;