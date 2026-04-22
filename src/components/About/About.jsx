import { useState, useEffect, useRef, useCallback } from "react";
import { about } from "../../data/about";
import { skills } from "../../data/skills";
import styles from "./About.module.css";
import {
  ReactIcon,
  NextjsIcon,
  VueIcon,
  NodejsIcon,
  MongoIcon,
  TailwindIcon,
  TypeScriptIcon,
  GitIcon,
  JavaScriptIcon,
  CIcon,
  CppIcon,
  OopIcon,
} from "../Icons/SkillIcons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const iconMap = {
  react: ReactIcon,
  nextjs: NextjsIcon,
  vue: VueIcon,
  nodejs: NodejsIcon,
  mongodb: MongoIcon,
  tailwind: TailwindIcon,
  typescript: TypeScriptIcon,
  git: GitIcon,
  javascript: JavaScriptIcon,
  c: CIcon,
  cpp: CppIcon,
  oop: OopIcon,
};

function SkillCard({ skill, isVisible }) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const IconComponent = iconMap[skill.iconKey];

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1200;
    const startTime = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * skill.percent);
      setAnimatedValue(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isVisible, skill.percent]);

  return (
    <div
      className={`flex flex-col items-center gap-3 ${styles.skillCardSlideIn} ${styles.skillCardHover}`}
    >
      <div className={`w-24 h-24 relative ${styles.progressRing}`}>
        <CircularProgressbar
          value={animatedValue}
          styles={buildStyles({
            pathColor: "#FF6B00",
            trailColor: "#333",
            strokeLinecap: "round",
            pathTransitionDuration: 0.1,
          })}
        />
        <div
          className={`absolute inset-0 flex items-center justify-center ${styles.skillIconBounce}`}
        >
          <IconComponent />
        </div>
      </div>
      <span
        className={`text-orange-500 font-bold text-lg ${styles.percentageCounter}`}
      >
        {animatedValue}%
      </span>
      <span className={`text-[#888] text-sm ${styles.textReveal}`}>
        {skill.name}
      </span>
    </div>
  );
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const callbackRef = useCallback((node) => {
    if (skillsRef.current) skillsRef.current.disconnect();
    skillsRef.current = node
      ? new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              skillsRef.current.disconnect();
            }
          },
          { threshold: 0.2 },
        )
      : null;
    if (node && skillsRef.current) skillsRef.current.observe(node);
  }, []);

  return (
    <section
      id="about"
      className={`py-20 bg-[#1a1a1a] ${styles.sectionFadeIn}`}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2
            className={`text-white text-3xl font-bold mb-2 ${styles.titleFadeIn}`}
          >
            {about.sectionTitle}
          </h2>
          <p className={`text-[#888] text-lg ${styles.subtitleFadeIn}`}>
            {about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div
            className={`flex justify-center lg:justify-start ${styles.slideInLeft}`}
          >
            <div
              className={`relative w-full max-w-[350px] h-[450px] rounded-[40%_60%_60%_40%/60%_40%_60%_40%] overflow-hidden bg-[#2d2d2d] ${styles.imageContainerHover} ${styles.imageSlideIn} ${styles.imageFloat}`}
            >
              <img
                src="/youssef1.png"
                alt="Youssef"
                className="w-full h-full object-cover object-top grayscale"
              />
            </div>
          </div>

          <div
            className={`text-[#888] text-sm leading-relaxed whitespace-pre-line ${styles.slideInRight} ${styles.contentFadeIn}`}
          >
            <p className={`mb-6 text-base ${styles.bioTextReveal}`}>
              {about.bio}
            </p>

            <a
              href={about.cvLink}
              download
              className={`inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-orange-600 ${styles.buttonHover} ${styles.buttonSlideIn} ${styles.buttonPulse}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        <div
          ref={callbackRef}
          className={`mt-16 pt-10 border-t border-[#333] ${styles.slideInUp}`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={styles[`delay-${(index + 1) * 100}`]}
              >
                <SkillCard skill={skill} isVisible={isVisible} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
