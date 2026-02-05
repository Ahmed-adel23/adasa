import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a]" dir="rtl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/20"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            اشترك في <span className="text-orange-500">نشرتنا الإخبارية</span>
          </h2>

          <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

          <AnimatePresence mode="wait">
            {!isSubscribed ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6"
              >
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="أدخل بريدك الإلكتروني"
                  className="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 text-white placeholder-neutral-500 transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/10"
                >
                  اشترك الآن
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-orange-500/10 border border-orange-500/20 text-orange-500 p-4 rounded-xl mb-6"
              >
                شكراً لاشتراكك! ستصلك أحدث أسرار التصوير قريباً.
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2 space-x-reverse">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#161616] grayscale hover:grayscale-0 transition-all"
                    alt="user"
                    src={`https://i.pravatar.cc/150?u=${i + 10}`}
                  />
                ))}
              </div>
              <span>
                انضم لـ <span className="text-white font-medium">+10,000</span> مصور
              </span>
            </div>
            <span className="hidden sm:inline text-[#262626]">&bull;</span>
            <span>بدون إزعاج</span>
            <span className="hidden sm:inline text-[#262626]">&bull;</span>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
