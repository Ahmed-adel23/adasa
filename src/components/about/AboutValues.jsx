import { motion } from "framer-motion";

const AboutValues = () => {
  const values = [
    { title: "الجودة أولاً", icon: "fa-bullseye", desc: "محتوى مدروس ومكتوب بخبرة" },
    { title: "تركيز عملي", icon: "fa-bolt", desc: "أمثلة واقعية يمكنك تطبيقها اليوم" },
    { title: "المجتمع", icon: "fa-handshake", desc: "تعلم مع آلاف المصورين" },
    { title: "دائماً محدث", icon: "fa-arrows-rotate", desc: "أحدث الاتجاهات وأفضل الممارسات" },
  ];

  return (
    <section className="py-20 bg-[#111111] border-y border-[#262626]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <span className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></span>
            قيمنا
            <span className="w-1.5 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all text-center relative overflow-hidden"
            >
              <i className={`fa-solid ${val.icon} text-4xl text-orange-500 mb-4 block`}></i>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                {val.title}
              </h3>
              <p className="text-neutral-400 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
