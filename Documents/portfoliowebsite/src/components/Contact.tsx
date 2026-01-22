import { motion } from "motion/react";
import { ArrowLeft, Mail, Linkedin, Github } from "lucide-react";

interface ContactProps {
  onBack: () => void;
}

export function Contact({ onBack }: ContactProps) {
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

      <div className="container mx-auto px-8 py-24 max-w-4xl">
        <h1 className="font-['Inria_Serif:Regular',sans-serif] text-[48px] text-black mb-8 tracking-[-1.104px]">
          Get in Touch
        </h1>

        <p className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-black leading-[1.6] mb-12 max-w-2xl">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
        </p>

        <div className="space-y-6">
          <motion.a
            href="mailto:kelly.chang@example.com"
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all">
              <Mail className="group-hover:text-white transition-colors" size={20} />
            </div>
            <div>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-black/60 uppercase tracking-wide mb-1">
                Email
              </p>
              <p className="font-['Inria_Serif:Regular',sans-serif] text-[20px] text-black group-hover:opacity-70 transition-opacity">
                kelly.chang@example.com
              </p>
            </div>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/kellychang"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all">
              <Linkedin className="group-hover:text-white transition-colors" size={20} />
            </div>
            <div>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-black/60 uppercase tracking-wide mb-1">
                LinkedIn
              </p>
              <p className="font-['Inria_Serif:Regular',sans-serif] text-[20px] text-black group-hover:opacity-70 transition-opacity">
                linkedin.com/in/kellychang
              </p>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/kellychang"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all">
              <Github className="group-hover:text-white transition-colors" size={20} />
            </div>
            <div>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-black/60 uppercase tracking-wide mb-1">
                GitHub
              </p>
              <p className="font-['Inria_Serif:Regular',sans-serif] text-[20px] text-black group-hover:opacity-70 transition-opacity">
                github.com/kellychang
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
