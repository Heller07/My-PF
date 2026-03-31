import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
    stat: "100%",
    statLabel: "readable",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and delivering lightning-fast user experiences.",
    stat: "Fast",
    statLabel: "always",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
    stat: "4+",
    statLabel: "PRs merged",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying ahead with the latest technologies and best practices.",
    stat: "2026",
    statLabel: "up to date",
  },
];

const paragraphs = [
  "I'm a software engineer focused on full-stack development and systems. I work with React, Next.js, Node.js, and databases to build scalable web applications.",
  "I have experience developing end-to-end projects, from designing APIs to building frontend interfaces, along with working on CI/CD pipelines and containerized deployments.",
  "I've also contributed to open-source projects like Jenkins, working on debugging, regression analysis, and improving existing systems.",
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Column ── */}
          <div className="space-y-8">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                initial={{ letterSpacing: "0.1em" }}
                whileInView={{ letterSpacing: "0.3em" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-primary text-sm font-medium tracking-widest uppercase"
              >
                About Me
              </motion.span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Building web,
              <span className="font-serif italic font-normal text-white">
                {" "}one component{" "}
              </span>
              at a time.
            </motion.h2>

            {/* Paragraphs — staggered */}
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="text-muted-foreground leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -3 }}
              className="group relative glass rounded-2xl p-6 glow-border overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

              <div className="relative flex items-start gap-3">
                <span className="text-4xl text-primary/30 font-serif leading-none mt-[-4px] flex-shrink-0">
                  "
                </span>
                <p className="text-lg font-medium italic text-foreground/90 leading-relaxed">
                  I focus on writing clean, efficient, and maintainable code.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.13 } },
            }}
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.96 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative glass rounded-2xl p-6 border border-border/40 hover:border-primary/40 transition-all duration-500 overflow-hidden cursor-default"
              >
                {/* Hover background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                {/* Faded stat watermark */}
                <div className="absolute top-3 right-4 text-right select-none pointer-events-none">
                  <div className="text-2xl font-bold text-primary/10 leading-none">
                    {item.stat}
                  </div>
                  <div className="text-[9px] text-muted-foreground/20 uppercase tracking-widest">
                    {item.statLabel}
                  </div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="relative w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </motion.div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};