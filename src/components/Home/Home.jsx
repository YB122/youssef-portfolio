import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const typewriterLines = [
  { text: "Hi I am", className: "text-[#888] text-lg m-0" },
  { text: "Youssef Benyamine", className: "text-white text-2xl font-semibold m-0" },
  { text: "Full Stack Developer", className: "text-4xl lg:text-5xl font-bold m-0 leading-tight bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent" },
];

function TypewriterText() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [chars, setChars] = useState([0, 0, 0]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timers = [];
    typewriterLines.forEach((line, i) => {
      timers.push(setTimeout(() => {
        setVisibleLines((p) => p + 1);
        let c = 0;
        const interval = setInterval(() => {
          c++;
          setChars((prev) => {
            const next = [...prev];
            next[i] = c;
            return next;
          });
          if (c >= line.text.length) clearInterval(interval);
        }, 40 + Math.random() * 20);
        timers.push(interval);
      }, i * 800));
    });
    const totalDuration = typewriterLines.length * 800 + typewriterLines.reduce((max, l) => Math.max(max, l.text.length * 60), 0) + 2000;
    timers.push(setTimeout(() => {
      setVisibleLines(0);
      setChars([0, 0, 0]);
      setKey((p) => p + 1);
    }, totalDuration));
    return () => timers.forEach(clearTimeout);
  }, [key]);

  return (
    <div key={key} className="flex flex-col gap-1.5">
      {typewriterLines.map((line, i) => (
        <motion.p
          key={i}
          className={line.className}
          initial={{ opacity: 0 }}
          animate={{ opacity: i < visibleLines ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {line.text.slice(0, chars[i])}
          {i < visibleLines && chars[i] < line.text.length && (
            <motion.span
              className="inline-block w-[2px] h-[1em] bg-orange-500 ml-0.5 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut" }}
            />
          )}
        </motion.p>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <motion.section
      className="min-h-screen bg-[#1a1a1a] flex items-center py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-5 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
          <motion.div
            className="flex flex-col gap-5 lg:order-1 order-2 text-center lg:text-left items-center lg:items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TypewriterText />

            <motion.div
              className="flex gap-3 mt-2.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/youssef-benyamine-b55a81219/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[rgba(255,107,53,0.3)] rounded-full text-[#888888] transition-all duration-300 hover:border-[#FF6B35] hover:text-[#FF6B35]"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
              >
                <i className="fab fa-linkedin-in"></i>
              </motion.a>
              <motion.a
                href="https://github.com/YB122"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[rgba(255,107,53,0.3)] rounded-full text-[#888888] transition-all duration-300 hover:border-[#FF6B35] hover:text-[#FF6B35]"
                aria-label="GitHub"
                whileHover={{ scale: 1.1 }}
              >
                <i className="fab fa-github"></i>
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@youssefbenyamine944"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[rgba(255,107,53,0.3)] rounded-full text-[#888888] transition-all duration-300 hover:border-[#FF6B35] hover:text-[#FF6B35]"
                aria-label="YouTube"
                whileHover={{ scale: 1.1 }}
              >
                <i className="fab fa-youtube"></i>
              </motion.a>
              <motion.a
                href="/Youssef_Benyamine_Tawfike_Amine.pdf"
                download
                className="w-10 h-10 flex items-center justify-center border border-[rgba(255,107,53,0.3)] rounded-full text-[#888888] transition-all duration-300 hover:border-[#FF6B35] hover:text-[#FF6B35]"
                aria-label="CV"
                whileHover={{ scale: 1.1 }}
              >
                <i className="far fa-file-pdf"></i>
              </motion.a>
            </motion.div>

            <motion.div
              className="flex gap-4 mt-5 flex-col sm:flex-row w-full sm:w-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="bg-orange-500 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-orange-600 inline-block text-center"
              >
                Hire Me
              </Link>
              <a
                href="/Youssef_Benyamine_Tawfike_Amine.pdf"
                download
                className="bg-transparent text-white px-8 py-3 rounded-md font-medium border border-[#666] transition-all duration-300 hover:border-orange-500 hover:text-orange-500 inline-block text-center"
              >
                Download CV
              </a>
            </motion.div>

            <motion.div
              className="flex mt-10 bg-[#2a2a2a] rounded-lg p-6 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex flex-col gap-1 px-6 lg:px-8 border-r border-[#444] last:border-r-0 first:pl-0 last:pr-0">
                <span className="text-orange-500 text-2xl font-bold">
                  1+
                </span>
                <span className="text-white text-sm">Experiences</span>
              </div>
              <div className="flex flex-col gap-1 px-6 lg:px-8 border-r border-[#444] last:border-r-0">
                <span className="text-orange-500 text-2xl font-bold">
                  10+
                </span>
                <span className="text-white text-sm">Project done</span>
              </div>
              <div className="flex flex-col gap-1 px-6 lg:px-8 last:border-r-0">
                <span className="text-orange-500 text-2xl font-bold">
                  10+
                </span>
                <span className="text-white text-sm">Happy Clients</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center items-center lg:order-2 order-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative w-full max-w-[450px] aspect-square rounded-full overflow-hidden bg-[#2d2d2d]"
              animate={{ y: [0, -10, 0] }}
              transition={{ delay: 0.7, repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#2d2d2d] rounded-full z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              ></motion.div>
              <img
                src="/youssef1.png"
                alt="Youssef1"
                className="relative z-20 w-full h-full object-cover"
                style={{ objectPosition: "center 48%" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
