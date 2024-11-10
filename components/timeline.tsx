"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Software Development Engineer",
    company: "Teleport",
    location: "Bangalore, KA",
    period: "Jan 2024 - June 2025",
    description: [
      "Migrated key components of a company\'s website from a no-code solution (Bubble.io) to a legacy tech stack",
      "Developed and maintained robust databases, created endpoints, and implemented CRUD operations to ensure the delivery of high-quality, production-grade applications",
      "Developed Chromium-based automation bots to streamline form filling and reduce manual data entry by 70%, enhancing process efficiency and accuracy",
    ],
    skills: ["Nest.js", "Typescript", "Javascript", "Next.js", "GCP"],
    achievements: "Achieved a 30% performance boost on the new stack.",
    type: "Intern",
  },
  {
    title: "Backend Developer",
    company: "Tenali AI",
    location: "San Francisco, US",
    period: "July 2024 - August 2024",
    description: [
      "Developed and optimized backend systems using Python and FastAPI, integrating Celery with Redis for background task processing",
      "Implemented FFmpeg-based pipeline to capture, transcode, and process meeting audio, enabling real-time transcription",
    ],
    skills: ["Python", "FastAPI", "SQLAlchemy", "Celery", "FFMpeg", "Docker"],
    // achievements: "40% performance improvement • Real-time features implementation",
    type: "Intern",
  }
];

export function Timeline() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="relative space-y-8">
        <div className="absolute left-8 top-2 h-[calc(100%-2rem)] w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent 
                      md:left-1/2 md:-translate-x-px" />
        
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} // Ensures animation only plays once
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative group"
          >
            {/* Timeline node */}
            <motion.div
              className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background
                        md:left-1/2"
              // whileHover={{ scale: 1.5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
            </motion.div>

            {/* Content */}
            <div className={`ml-20 md:ml-0 ${
              index % 2 === 0 ? 'md:mr-[50%] md:pr-12' : 'md:ml-[50%] md:pl-12'
            }`}>
              <motion.div
                className="relative p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header */}
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
                    <Badge variant="outline">{experience.type}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="font-medium">{experience.company}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-full">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {experience.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} // Ensures each description item animates only once
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Achievements */}
                <div className="text-sm font-medium text-primary">
                  {experience.achievements}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
