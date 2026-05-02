"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const cardContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const offerings = [
  {
    number: "01",
    title: "Zero Logistic Charges",
    subtitle: "100% Covered by BWorth",
    description:
      "No shipping cost, no hidden logistics fees, and no extra burden on your brand. We handle everything so you can stay focused on designing and growing your label.",
    points: ["No shipping cost", "No hidden logistics fees", "No extra burden on your brand"],
  },
  {
    number: "02",
    title: "Money Back Guarantee",
    subtitle: "Because we believe in your growth",
    description:
      "We do not just promise visibility. We commit to results. If your products do not sell through our platform, BWorth offers a Money Back Guarantee.",
    points: ["Zero risk for your brand", "Complete confidence in partnering with us", "When you grow, we grow"],
  },
  {
    number: "03",
    title: "Assurance Guarantee",
    subtitle: "On returned articles",
    description:
      "We solve the biggest returned-product concern with a fully in-house logistics process, strict quality control, and end-to-end accountability.",
    points: ["Fully in-house logistics process", "Strict quality control", "Returned articles stay authentic & unchanged"],
  },
];

export default function BrandOfferingsSection() {
  const { theme } = useTheme();
  const isLight = theme === "white";

  return (
    <section
      className={`relative overflow-hidden transition-colors ${
        isLight ? "bg-[#F8FAFC] text-black" : "bg-[#0b7fa6] text-white"
      }`}
    >
      <motion.div
        aria-hidden="true"
        className={`absolute -top-24 -left-16 h-72 w-72 rounded-full blur-3xl ${isLight ? "bg-[#14A3C7]/10" : "bg-white/10"}`}
        animate={{ y: [0, 18, 0], x: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className={`absolute bottom-0 -right-20 h-80 w-80 rounded-full blur-3xl ${isLight ? "bg-black/5" : "bg-black/15"}`}
        animate={{ y: [0, -16, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-14 md:mb-20"
        >
          <p className={`text-xs md:text-sm uppercase tracking-[0.4em] mb-5 ${isLight ? "text-[#14A3C7]" : "text-black/70"}`}>
            For Fashion Brands
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-tighter leading-[0.95]">
            Dear Fashion Brands, what does BWorth offer you?
          </h2>
          <motion.div
            aria-hidden="true"
            className="w-28 h-1 mx-auto mt-8 rounded-full bg-linear-to-r from-transparent via-[#14A3C7] to-transparent shadow-[0_0_18px_rgba(20,163,199,0.9)] relative overflow-hidden"
            animate={{ opacity: [0.82, 1, 0.82], scaleX: [0.97, 1, 0.97], filter: ['drop-shadow(0 0 6px rgba(20,163,199,0.35))','drop-shadow(0 0 20px rgba(20,163,199,0.55))','drop-shadow(0 0 6px rgba(20,163,199,0.35))'] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scaleX: 1.04, filter: 'drop-shadow(0 0 30px rgba(20,163,199,0.75))' }}
          >
            {/* moving shine */}
            <motion.div
              aria-hidden="true"
              style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0) 100%)' }}
              className="absolute left-[-40%] top-0 h-full w-1/3 rounded-full opacity-90"
              animate={{ x: ['-140%', '140%'] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {offerings.map((item, index) => (
            <motion.article
              key={item.number}
              variants={cardItem}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? -1 : 1, scale: 1.03 }}
              className={`relative rounded-4xl border p-7 md:p-8 overflow-hidden backdrop-blur-sm shadow-[0_30px_80px_-50px_rgba(0,0,0,0.45)] ${
                isLight
                  ? "bg-white/80 border-black/10"
                  : "bg-white/10 border-white/15"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <div className={`text-5xl md:text-6xl font-serif font-black leading-none ${isLight ? "text-[#14A3C7]" : "text-black"}`}>
                    {item.number}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl md:text-3xl font-serif font-black uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className={`mt-2 text-sm md:text-base font-medium ${isLight ? "text-black/60" : "text-white/70"}`}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${isLight ? "border-black/10 bg-[#14A3C7]/10" : "border-black/10 bg-black/10"}`}>
                  <span className="text-xl">◆</span>
                </div>
              </div>

              <p className={`text-base md:text-lg leading-relaxed ${isLight ? "text-black/75" : "text-white/80"}`}>
                {item.description}
              </p>

              <div className="mt-8 space-y-3">
                {item.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className={`mt-1 text-sm ${isLight ? "text-[#14A3C7]" : "text-black"}`}>✔</span>
                    <span className={`text-sm md:text-base leading-relaxed ${isLight ? "text-black/80" : "text-white/85"}`}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-transparent via-[#14A3C7] to-transparent opacity-90 shadow-[0_0_14px_rgba(20,163,199,0.85)] overflow-hidden">
                <motion.div
                  aria-hidden="true"
                  style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0) 100%)' }}
                  className="absolute left-[-50%] top-0 h-full w-1/4 opacity-90"
                  animate={{ x: ['-140%', '140%'] }}
                  transition={{ duration: 2.0, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={`mt-14 md:mt-20 rounded-[2.5rem] border px-6 md:px-10 py-8 md:py-10 text-center ${
            isLight ? "bg-black text-white border-black/10" : "bg-white text-black border-black/10"
          }`}
        >
          <p className="text-lg md:text-2xl font-serif font-bold leading-relaxed max-w-4xl mx-auto">
            We build a safer, lower-risk partnership model for fashion brands with logistics, resale assurance, and growth support aligned to your store experience.
          </p>
        </motion.div>
      </div>

      <div className={`absolute inset-0 pointer-events-none ${isLight ? "bg-[radial-gradient(circle_at_top,rgba(20,163,199,0.09),transparent_50%)]" : "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),transparent_50%)]"}`} />
    </section>
  );
}