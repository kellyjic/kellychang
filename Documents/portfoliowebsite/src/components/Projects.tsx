import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectsProps {
  onBack: () => void;
}

export function Projects({ onBack }: ProjectsProps) {
  const projects = [
    {
      title: "Rough Draft",
      role: "UX Researcher",
      date: "Jan 2025 - Mar 2025",
      description: "Designed a website prototype based on Google's NotebookLM, prioritizing customizable and intuitive user experiences for podcast engagement.",
      details: "Created site maps, user personas, taxonomy, wireframes, and development/content roadmaps to support implementation.",
      tech: ["UX Research", "Wireframing", "User Personas", "Prototyping"],
      image: "", // Add your image URL here
      link: "" // Add your project link here
    },
    {
      title: "Divvy Figma Design Prototype",
      role: "Designer",
      date: "Jan 2025 (12-hour Hackathon)",
      description: "Created a prototype of an app designed to help friends split grocery and restaurant bills more efficiently and avoid awkwardness around money.",
      details: "Conducted market research to understand existing solutions, identify user pain points, and find what would make our app stand out.",
      tech: ["Figma", "Market Research", "App Design"],
      image: "", // Add your image URL here
      link: "" // Add your project link here
    },
    {
      title: "TraveLog Website",
      role: "Developer & Designer",
      date: "Mar 2025 - Jun 2025",
      description: "We coded a website that helps people create memory collections/a diary of their travels.",
      details: "",
      tech: ["HTML", "CSS", "React"],
      image: "", // Add your image URL here
      link: "" // Add your project link here
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="bg-white relative size-full overflow-auto"
    >
      {/* Back button */}
      <motion.button
        onClick={onBack}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-8 top-8 flex items-center gap-2 text-black hover:opacity-70 transition-opacity z-10"
      >
        <ArrowLeft size={24} />
        <span className="font-['Inria_Serif:Regular',sans-serif] text-[18px]">Back</span>
      </motion.button>

      <div className="container mx-auto px-8 py-24 max-w-6xl">
        <h1 className="font-['Inria_Serif:Regular',sans-serif] text-4xl md:text-5xl text-black mb-12 tracking-[-1.104px]">
          Projects
        </h1>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="border-b border-black/10 pb-16 last:border-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Project Image */}
                <div className="w-full">
                  <div className="aspect-[4/3] w-full bg-gray-100 rounded-lg overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <div className="text-center">
                          <p className="font-['Inter:Medium',sans-serif] font-medium text-sm">
                            Project Image
                          </p>
                          <p className="font-['Inter:Medium',sans-serif] text-xs mt-1">
                            Add image URL in code
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col">
                  <div className="mb-3">
                    <h2 className="font-['Inria_Serif:Regular',sans-serif] text-3xl md:text-4xl text-black mb-2">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 text-black/60">
                      <span className="font-['Inter:Medium',sans-serif] font-medium text-[15px]">
                        {project.role}
                      </span>
                      <span className="text-black/30">•</span>
                      <span className="font-['Inter:Medium',sans-serif] font-medium text-[15px]">
                        {project.date}
                      </span>
                    </div>
                  </div>

                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-black leading-[1.6] mb-3">
                    {project.description}
                  </p>

                  {project.details && (
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-black/80 leading-[1.6] mb-6 pl-4 border-l-2 border-black/10">
                      {project.details}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-black/80 bg-black/5 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-['Inria_Serif:Regular',sans-serif] text-[18px] text-black hover:opacity-70 transition-opacity mt-auto"
                    >
                      View Project
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}