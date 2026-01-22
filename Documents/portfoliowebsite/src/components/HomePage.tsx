import { motion } from "motion/react";
import imgTl63 from "figma:asset/fcbda5b6949a3681a8a0bdf61511284b8a386a2b.png";

interface HomePageProps {
  onNavigate: (section: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[rgba(255,255,255,0.62)] relative size-full overflow-hidden flex items-center justify-center"
    >
      {/* Main content container */}
      <div className="relative w-full h-full max-w-7xl mx-auto">
        
        {/* Centered name */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Inria_Serif:Regular',sans-serif] text-6xl md:text-8xl lg:text-9xl text-black tracking-tight"
          >
            Kelly Chang
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-['Inter:Medium',sans-serif] font-medium text-base md:text-lg text-black/60 mt-4 tracking-wide"
          >
            Designer & Developer
          </motion.p>
        </div>

        {/* Interactive navigation bubbles - responsive positioning */}
        
        {/* Works - top center */}
        <motion.button
          onClick={() => onNavigate('works')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/2 -translate-x-1/2 top-[10%] md:top-[12%] w-28 md:w-36 h-24 md:h-32 cursor-pointer"
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTl63} />
          <p className="absolute inset-0 flex items-center justify-center font-['Inria_Serif:Regular',sans-serif] text-lg md:text-2xl text-black px-2">
            Works
          </p>
        </motion.button>

        {/* Projects - bottom right */}
        <motion.button
          onClick={() => onNavigate('projects')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, 12, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute right-[8%] md:right-[15%] bottom-[12%] md:bottom-[15%] w-28 md:w-36 h-24 md:h-32 cursor-pointer"
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTl63} />
          <p className="absolute inset-0 flex items-center justify-center font-['Inria_Serif:Regular',sans-serif] text-lg md:text-2xl text-black px-2">
            Projects
          </p>
        </motion.button>

        {/* Contact - top left */}
        <motion.button
          onClick={() => onNavigate('contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, 10, 0],
            x: [0, 12, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute left-[8%] md:left-[15%] top-[18%] md:top-[20%] w-28 md:w-36 h-24 md:h-32 cursor-pointer"
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTl63} />
          <p className="absolute inset-0 flex items-center justify-center font-['Inria_Serif:Regular',sans-serif] text-lg md:text-2xl text-black px-2">
            Contact
          </p>
        </motion.button>

        {/* About Me - bottom left with bubble image */}
        <motion.button
          onClick={() => onNavigate('about')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -10, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute left-[8%] md:left-[12%] bottom-[12%] md:bottom-[15%] w-28 md:w-36 h-24 md:h-32 cursor-pointer"
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTl63} />
          <p className="absolute inset-0 flex items-center justify-center font-['Inria_Serif:Regular',sans-serif] text-lg md:text-2xl text-black px-2">
            About Me
          </p>
        </motion.button>
      </div>
    </motion.div>
  );
}