import { Trophy, Code2, GitMerge, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const achievements = [
  {
    title: "Hackathon Winner",
    category: "Machine Learning",
    quote:
      "Secured 1st place at the Aiful Japan Credit Risk Hackathon by building a CatBoost model with 150+ engineered features and improving AUC.",
    icon: Trophy,
    stat: { value: "1st", label: "Place" },
    accent: "from-yellow-500/20 to-primary/5",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/15 border-yellow-500/30",
  },
  {
    title: "Jenkins Contributor",
    category: "Open Source",
    quote:
      "Merged 4 pull requests into Jenkins Core, contributing to debugging UI issues and improving workflow reliability across the CI/CD ecosystem.",
    icon: GitMerge,
    stat: { value: "", label: "Open Source" },
    accent: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    iconBg: "bg-primary/15 border-primary/30",
  },
  {
    title: "Knight on LeetCode",
    category: "Competitive Programming",
    quote:
      "Achieved Knight rating (1600+) on LeetCode with strong performance across CodeChef and Codeforces - consistent top-tier problem solving.",
    icon: Code2,
    stat: { value: "1600+", label: "Rating" },
    accent: "from-blue-500/20 to-primary/5",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15 border-blue-500/30",
  },
];

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: (dir) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.3, ease: "easeIn" },
  }),
};

export const Achievements = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (newIdx) => {
    setDirection(newIdx > activeIdx ? 1 : -1);
    setActiveIdx(newIdx);
  };

  const next = () => go((activeIdx + 1) % achievements.length);
  const prev = () => go((activeIdx - 1 + achievements.length) % achievements.length);

  const active = achievements[activeIdx];
  const Icon = active.icon;

  return (
    <section id="achievements" className="py-32 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-primary text-sm font-medium tracking-widest uppercase"
          >
            Achievements
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Things I've{" "}
            <span className="font-serif italic font-normal text-white">
              accomplished.
            </span>
          </h2>

          {/* Decorative divider */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {achievements.map((a, i) => {
            const BtnIcon = a.icon;
            const isActive = i === activeIdx;
            return (
              <motion.button
                key={i}
                onClick={() => go(i)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className={`relative glass rounded-2xl p-4 text-center border transition-all duration-300 overflow-hidden group
                  ${isActive
                    ? "border-primary/50 bg-primary/5"
                    : "border-border/40 hover:border-primary/30"
                  }`}
              >
                {/* Active indicator bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-opacity duration-300
                    ${isActive ? "opacity-100" : "opacity-0"}`}
                />

                <div
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center mx-auto mb-2 transition-all duration-300
                    ${isActive ? a.iconBg : "bg-surface border-border/50"}`}
                >
                  <BtnIcon
                    className={`w-4 h-4 transition-colors duration-300
                      ${isActive ? a.iconColor : "text-muted-foreground"}`}
                  />
                </div>

                <div className={`text-xl font-bold transition-colors duration-300 ${isActive ? "text-primary" : "text-foreground/60"}`}>
                  {a.stat.value}
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
                  {a.stat.label}
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Main Carousel Card */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">

            {/* Card */}
            <div className="relative glass rounded-3xl glow-border overflow-hidden min-h-64">

              {/* Animated background gradient (changes per card) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx + "-bg"}
                  className={`absolute inset-0 bg-gradient-to-br ${active.accent} pointer-events-none`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>

              {/* Card content */}
              <div className="relative p-8 md:p-12">

                {/* Top row — icon + category */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeIdx + "-top"}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="flex items-center justify-between mb-8"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${active.iconBg}`}>
                        <Icon className={`w-6 h-6 ${active.iconColor}`} />
                      </div>
                      <div>
                        <div className="font-bold text-foreground">{active.title}</div>
                        <div className="text-xs text-muted-foreground">{active.category}</div>
                      </div>
                    </div>

                    {/* Large faded stat */}
                    <div className="text-right select-none">
                      <div className="text-4xl font-bold text-primary/15 leading-none">
                        {active.stat.value}
                      </div>
                      <div className="text-[10px] text-muted-foreground/40 uppercase tracking-widest">
                        {active.stat.label}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Quote */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.blockquote
                    key={activeIdx + "-quote"}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="text-lg md:text-xl leading-relaxed text-foreground/90"
                  >
                    <span className="text-4xl text-primary/30 font-serif leading-none mr-1 align-top">
                      "
                    </span>
                    {active.quote}
                    <span className="text-4xl text-primary/30 font-serif leading-none ml-1 align-bottom">
                      "
                    </span>
                  </motion.blockquote>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 px-2">

              {/* Prev button */}
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full glass border border-border/40 hover:border-primary/40 hover:text-primary transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              {/* Dot indicators */}
              <div className="flex items-center gap-2">
                {achievements.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={`rounded-full transition-all duration-400 ${
                      i === activeIdx
                        ? "w-8 h-2 bg-primary"
                        : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    }`}
                  />
                ))}
              </div>

              {/* Next button */}
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full glass border border-border/40 hover:border-primary/40 hover:text-primary transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};