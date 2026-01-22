import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import imgImg32311 from "figma:asset/96bce268d575076f5f5c052c34d14da98fc9692c.png";

interface AboutMeProps {
  onBack: () => void;
}

export function AboutMe({ onBack }: AboutMeProps) {
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
          About Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="aspect-[470/610] w-full overflow-hidden rounded-lg">
              <img 
                alt="Profile" 
                className="w-full h-full object-cover" 
                src={imgImg32311} 
              />
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-4">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-black leading-[1.6]">
              Hi! I'm a junior studying Informatics, with minors in Data Science and Business. Within Informatics, I'm especially interested in product design and UI/UX, and how thoughtful user experience can shape the way people interact with technology.
            </p>

            <p className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-black leading-[1.6]">
              I love coming up with ideas for new products and finding ways to improve existing designs — it's something that happens naturally for me. I'm constantly noticing small friction points and imagining better solutions, which is why I keep a running notes file on my phone just for product and design ideas.
            </p>

            <p className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-black leading-[1.6]">
              My friends describe me as detail-oriented, a problem solver, and an effective communicator, but also fun and creative. I enjoy collaborating with others, talking through ideas, and turning abstract concepts into clear, user-centered designs.
            </p>

            <div className="pt-8 space-y-2">
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-black leading-[1.6]">
                <span className="font-semibold">Languages:</span> Chinese (native), English (native), German and Korean (beginner/basic)
              </p>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-black leading-[1.6]">
                <span className="font-semibold">Skills:</span> Figma, Adobe Suite, Python, Java, R, SQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}