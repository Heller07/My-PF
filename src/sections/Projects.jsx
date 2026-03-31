import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Wanderlust – Rental Listing Platform",
    description:
      "Full-stack rental platform with authentication, image uploads, REST APIs, and CI/CD pipeline using Docker and Jenkins.",
    image: "/projects/project1.png",
    tags: ["Node.js", "Express", "MongoDB", "Docker", "Jenkins"],
    link: "https://wanderlust-2f3n.onrender.com/listings",
    github: "https://github.com/Heller07/WanderLust",
    featured: true,
  },
  {
    title: "Chronos – CPU Scheduling Simulator",
    description:
      "Simulated 8 CPU scheduling algorithms with a C++ core and React-based Gantt chart visualization for performance analysis.",
    image: "/projects/project2.jpg",
    tags: ["C++", "React", "Node.js", "OS"],
    link: "#",
    github: "https://github.com/Heller07/Scheduler",
  },
  {
    title: "Credit Default Prediction",
    description:
      "Built a CatBoost model with 150+ engineered features, improving AUC using Optuna tuning and cross-validation.",
    image: "/projects/project3.jpg",
    tags: ["Python", "CatBoost", "Scikit-learn", "Optuna"],
    link: "#",
    github: "https://github.com/Heller07/Credit-Scoring-AiHack-India-2025",
  },
  {
    title: "Investify – Stock Trading Platform",
    description:
      "Full-stack stock trading simulator with interactive charts using Chart.js and portfolio tracking with real-time-like data.",
    image: "/projects/project4.png",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
    link: "#",
    github: "https://github.com/Heller07/Quantra",
  },
  {
    title: "Huffman File Compression Utility",
    description:
      "Implemented lossless file compression using Huffman coding with custom binary trees and bit-level encoding/decoding.",
    image: "/projects/project5.webp",
    tags: ["C++", "STL", "Data Structures"],
    link: "#",
    github: "#",
  },
];

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const FeaturedCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <TiltCard className="group glass rounded-3xl overflow-hidden cursor-pointer w-full">
      <div className="grid md:grid-cols-2 gap-0">

        <div className="relative overflow-hidden aspect-video md:aspect-auto min-h-72">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent md:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card hidden md:block" />

          <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Featured badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-medium backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Featured
            </span>
          </div>
        </div>

        {/* Content side */}
        <div className="p-8 md:p-10 flex flex-col justify-center space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-5xl font-bold text-primary/15 font-serif select-none">
              01
            </span>
            <div className="h-px flex-1 bg-border/40" />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300 mb-3">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-1">
            <motion.a
              href={project.link}
              whileHover={{ x: 3 }}
              className="flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-4"
            >
              Live Demo <ArrowUpRight className="w-4 h-4" />
            </motion.a>
            <span className="text-border/60">|</span>
            <motion.a
              href={project.github}
              whileHover={{ x: 3 }}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Source Code <Github className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </TiltCard>
  </motion.div>
);

// ── Regular Card ─────────────────────────────────────────────────
const ProjectCard = ({ project, idx }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 50 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    }}
    className="h-full"
  >
    <TiltCard className="group glass rounded-2xl overflow-hidden h-full cursor-pointer flex flex-col">

      {/* Image — CSS group-hover for zoom & overlay */}
      <div className="relative overflow-hidden aspect-video flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-70" />

        {/* Overlay — CSS group-hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.link}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Index badge */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center">
          <span className="text-xs font-bold text-primary">
            0{idx + 1}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 leading-snug">
            {project.title}
          </h3>
          <motion.div
            whileHover={{ x: 3, y: -3 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex-shrink-0 mt-0.5"
          >
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

    </TiltCard>
  </motion.div>
);

export const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mx-auto max-w-3xl mb-16"
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
            Featured Work
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Projects that
            <span className="font-serif italic font-normal text-primary">
              {" "}make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>

          {/* Decorative divider */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-8"
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

        {/* Featured project */}
        <div className="mb-6">
          {featured.map((project, idx) => (
            <FeaturedCard key={idx} project={project} />
          ))}
        </div>

        {/* Remaining 4 projects in 2x2 grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {rest.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx + 1} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </motion.div>

      </div>
    </section>
  );
};