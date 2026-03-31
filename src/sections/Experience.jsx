import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GitPullRequest, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    period: "Dec 2025 — Feb 2026",
    role: "Open Source Contributor",
    company: "Jenkins",
    location: "Remote",
    description:
      "Contributed to Jenkins Core by debugging UI and workflow issues using git bisect. Collaborated with maintainers through PRs, reviews, and CI pipelines, with 4 PRs merged.",
    technologies: ["Java", "Git", "CI/CD", "Jenkins"],
    icon: GitPullRequest,
    current: true,
    stat: { value: "", label: "" },
  },
  {
    period: "Dec 2024 — Feb 2025",
    role: "Software Development Intern",
    company: "VSH7 Technology",
    location: "On-site",
    description:
      "Enhanced frontend using Next.js and Tailwind, improving responsiveness and SEO with SSR. Built reusable UI components and integrated API-based contact form with authentication.",
    technologies: ["Next.js", "React", "Tailwind", "Node.js"],
    icon: Briefcase,
    current: false,
    stat: { value: "", label: "" },
  },
];


const TimelineLine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
    >
      <div className="absolute inset-0 bg-border/30" />

      <motion.div
        className="absolute top-0 left-0 right-0 origin-top timeline-glow bg-gradient-to-b from-primary via-primary/60 to-primary/10"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
};

const ExperienceCard = ({ exp, idx }) => {
  const isEven = idx % 2 === 0;
  const Icon = exp.icon;

  return (
    <div className="relative grid md:grid-cols-2 gap-6 md:gap-0">

      <motion.div
        className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-20"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 18, delay: idx * 0.15 }}
      >
        <div className="w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>
        {exp.current && (
          <span className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-40" />
        )}
      </motion.div>

      <div className={`pl-16 md:pl-0 ${isEven ? "md:pr-14" : "md:col-start-2 md:pl-14"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className="group relative glass rounded-2xl p-6 border border-border/40 hover:border-primary/40 transition-all duration-500 overflow-hidden"
        >
          {/* Card glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

          {/* Top row */}
          <div className={`flex items-start justify-between gap-4 mb-4 ${isEven ? "md:flex-row-reverse" : ""}`}>
            <div className={isEven ? "md:text-right" : ""}>
              {/* Current badge */}
              {exp.current && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-medium mb-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Current
                </motion.span>
              )}

              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {exp.role}
              </h3>

              <div className={`flex items-center gap-3 mt-1 text-sm text-muted-foreground ${isEven ? "md:justify-end" : ""}`}>
                <span className="font-semibold text-foreground/80">{exp.company}</span>
                <span className="text-border">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
              </div>

              <div className={`flex items-center gap-1.5 mt-1.5 text-xs text-primary/80 ${isEven ? "md:justify-end" : ""}`}>
                <Calendar className="w-3 h-3" />
                {exp.period}
              </div>
            </div>

            {/* Icon box */}
            <motion.div
              whileHover={{ rotate: 8, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex-shrink-0 w-11 h-11 rounded-xl glass border border-primary/20 flex items-center justify-center"
            >
              <Icon className="w-5 h-5 text-primary" />
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border/40 mb-4" />

          {/* Description */}
          <p className={`text-sm text-muted-foreground leading-relaxed mb-4 ${isEven ? "md:text-right" : ""}`}>
            {exp.description}
          </p>

          {/* Tags */}
          <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : ""}`}>
            {exp.technologies.map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className={`absolute bottom-4 ${isEven ? "md:left-4 right-4 md:right-auto" : "right-4"}`}>
            <div className="flex flex-col items-end">
              <span className="text-xl font-bold text-primary/40 leading-none">
                {exp.stat.value}
              </span>
              <span className="text-[10px] text-muted-foreground/50 uppercase tracking-wider">
                {exp.stat.label}
              </span>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
        </motion.div>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-20"
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
            Career Journey
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Experience &amp;{" "}
            <span className="font-serif italic font-normal text-white">
              Work.
            </span>
          </h2>

          <p className="text-muted-foreground leading-relaxed max-w-lg">
            A summary of my work, including internships, projects, and
            open-source contributions.
          </p>

          {/* Decorative divider */}
          <motion.div
            className="flex items-center gap-3 mt-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ originX: 0 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-primary/50 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="h-px w-8 bg-primary/20" />
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <TimelineLine />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} idx={idx} />
            ))}
          </div>

          {/* Timeline end dot */}
          <motion.div
            className="absolute left-6 md:left-1/2 bottom-0 -translate-x-1/2 translate-y-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <div className="w-3 h-3 rounded-full bg-border/50 border border-border" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};