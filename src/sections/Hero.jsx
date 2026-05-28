import { motion } from "framer-motion";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-3xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm mb-6"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
        >
          Frontend Developer
        </motion.h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          I build modern, responsive, and high-performance web applications
          using React and clean UI design principles.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-full font-medium
            hover:scale-[1.03] transition-transform duration-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/15 text-white
            hover:bg-white/10 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}