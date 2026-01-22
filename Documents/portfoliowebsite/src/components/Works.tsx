import { motion } from "motion/react";
import { ArrowLeft, MapPin } from "lucide-react";

interface WorksProps {
  onBack: () => void;
}

export function Works({ onBack }: WorksProps) {
  const internships = [
    {
      title: "Frontend Development Intern",
      company: "MMXTION Technology",
      location: "Taipei, Taiwan",
      date: "July 2025 – Sep 2025",
      responsibilities: [
        {
          main: "Collaborated with a backend engineer to build a company internal web tool that supports sales staff in filling out quotation documents using an AI-powered chatbot.",
          details: [
            "Designed user interfaces and workflows in Figma, improving usability and reducing the manual workload in document review.",
            "Developed frontend pages using Next.js, React, and Ant Design"
          ]
        },
        {
          main: "Helped transform a previously tedious, error-prone workflow into a more efficient, AI-assisted process.",
          details: []
        }
      ],
      tech: ["Next.js", "React", "Ant Design", "Figma", "UI/UX Design"]
    },
    {
      title: "UI/UX, PM Internship",
      company: "Ruten - PChome eBay Co., Ltd.",
      location: "Taipei, Taiwan",
      date: "Jun 2024 – Sep 2024",
      responsibilities: [
        {
          main: "User Experience Research:",
          details: [
            "Conducted user experience research by drafting two interview outlines for stakeholders and potential customers.",
            "Analyzed interview transcripts using grounded theory methodology to identify key insights and patterns."
          ]
        },
        {
          main: "Shadowed product managers to learn about cross-functional team coordination and project planning.",
          details: []
        }
      ],
      tech: ["UX Research", "Product Management", "Grounded Theory", "Stakeholder Interviews"]
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
          Work Experience
        </h1>

        <div className="space-y-12">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="border-b border-black/10 pb-12 last:border-0"
            >
              {/* Header */}
              <div className="mb-6">
                <h2 className="font-['Inria_Serif:Regular',sans-serif] text-3xl md:text-4xl text-black mb-2">
                  {internship.title}
                </h2>
                <div className="flex flex-col gap-1">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[17px] text-black/80">
                    {internship.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-black/60">
                    <span className="font-['Inter:Medium',sans-serif] font-medium text-[15px] flex items-center gap-1">
                      <MapPin size={16} />
                      {internship.location}
                    </span>
                    <span className="text-black/30">•</span>
                    <span className="font-['Inter:Medium',sans-serif] font-medium text-[15px]">
                      {internship.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-4 mb-6">
                {internship.responsibilities.map((resp, i) => (
                  <div key={i}>
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-black leading-[1.6] mb-2">
                      • {resp.main}
                    </p>
                    {resp.details.length > 0 && (
                      <div className="pl-6 space-y-2">
                        {resp.details.map((detail, j) => (
                          <p key={j} className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-black/80 leading-[1.6]">
                            ◦ {detail}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {internship.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-black/80 bg-black/5 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}