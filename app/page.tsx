"use client";

import { motion } from "framer-motion";
import { GreetingAnimation } from "@/components/greeting-animation";
import { Timeline } from "@/components/timeline";
import { ProjectCard } from "@/components/project-card";
import { SkillCategory } from "@/components/skill-category";
import { Button } from "@/components/ui/button";
import {
  FileDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Globe,
  Layers,
  Cloud,
  Wrench
} from "lucide-react";
const handleGithubClick = () => {
  window.open("https://github.com/sanniv2002", "_blank");
};

const handleLinkedinClick = () => {
  window.open("https://www.linkedin.com/in/sanniv-choudhuri", "_blank");
};

const handleMailClick = () => {
  window.location.href = "mailto:sanniv.nitkkr@gmail.com";
};

const handleResumeClick = () => {
  window.open("https://drive.google.com/file/d/1mNqnQaQ5-s9f-HESJ2SGUB9nfqMScaG_/view?usp=sharing", "_blank");
};

const projects = [
  {
    title: "ScriptBox",
    description: "A platform to get your complete isolated coding environment with an integrated terminal.",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&q=80",
    technologies: ["Typescript", "Passport.js", "Docker", "Express", "PostgreSQL"],
    liveUrl: "https://scriptbox.sanniv.tech",
    githubUrl: "https://github.com/Sanniv2002/cloudide-api",
  },
  {
    title: "Biome",
    description: "A high-performance container orchestrator using microservices architecture with load balancer based on the round-robin algorithm.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLv2klqRVwfXe_crsbZv0aAZoXNwdJBrA0Yg&s",
    technologies: ["Go", "gRPC", "Docker", "Redis", "PostgreSQL", "Prisma", "Express.js"],
    githubUrl: "https://github.com/Sanniv2002/Biome",
  },
  {
    title: "VisualizeX",
    description: "A full-stack web application using Next.js, empowering data analysts to analyze CSV files efficiently without coding.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJz44wAQKxRpMBcbwbtjZIJaJMg6QXyREP8w&s",
    technologies: ["Next.js", "d3.js", "PostgreSQL", " Prism", "AWS", "Typescript", "Zod", "NextAuth", "AWS S3"],
    liveUrl: "https://visualizex.vercel.app",
    githubUrl: "https://github.com/Sanniv2002/VisualizeX",
  },
];

const skillCategories = [
  {
    title: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    skills: ["Node.js", "Express", "Python", "Go", "PostgreSQL", "MongoDB", "Redis", "Rust"]
  },
  {
    title: "Frontend Development",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Recoil", "Turborepo", "Framer Motion", "tRPC"]
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux", "Nginx", "GitHub Actions", "Azure"]
  },
  {
    title: "Tools & Practices",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Git", "Jest", "Cypress", "Agile", "TDD", "REST APIs", "Microservices", "System Design"]
  },
  {
    title: "Web Technologies",
    icon: <Globe className="w-6 h-6" />,
    skills: ["WebSockets", "PWA", "SEO", "Web Security", "OAuth", "JWT", "Performance", "Accessibility"]
  },
  {
    title: "Architecture & Patterns",
    icon: <Layers className="w-6 h-6" />,
    skills: ["MVC", "DDD", "SOLID", "Clean Code", "Design Patterns", "Test-Driven", "Microservices", "API Design"]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <GreetingAnimation />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl font-bold mt-4"
          >
            I&apos;m Sanniv
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-muted-foreground mt-4 max-w-2xl"
          >
            The hardest part is pushing to prod.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <Button variant="outline" size="lg" onClick={handleGithubClick}>
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" onClick={handleLinkedinClick}>
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" onClick={handleMailClick}>
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
            <Button variant="default" size="lg" onClick={handleResumeClick}>
              <FileDown className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-card/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Well, we all start somewhere
          </p>
        </motion.div>

        <Timeline />
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                skills={category.skills}
                icon={category.icon}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-card/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            I&apos;m always open to new opportunities and interesting projects.
          </p>
          <Button size="lg" onClick={() => window.open("mailto:sanniv.nitkkr@gmail.com")} className="w-full md:w-auto">
            <Mail name="sanniv.nitkkr@gmail.com" className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </motion.div>
      </section>
    </main>
  );
}