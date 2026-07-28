import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { about } from "../../data/about";
import { skills } from "../../data/skills";
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
  GrpcIcon,
  AngularIcon,
  RabbitMQIcon,
  NestIcon,
  JavaIcon,
  RestApiIcon,
  WebSocketIcon,
  GraphQLIcon,
  MysqlIcon,
  SqlServerIcon,
  PostgresIcon,
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
  grpc: GrpcIcon,
  angular: AngularIcon,
  rabbitmq: RabbitMQIcon,
  nest: NestIcon,
  java: JavaIcon,
  rest: RestApiIcon,
  websocket: WebSocketIcon,
  graphql: GraphQLIcon,
  mysql: MysqlIcon,
  sqlserver: SqlServerIcon,
  postgres: PostgresIcon,
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
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.05 }}
    >
      <div className="w-24 h-24 relative">
        <CircularProgressbar
          value={animatedValue}
          styles={buildStyles({
            pathColor: "#FF6B00",
            trailColor: "#333",
            strokeLinecap: "round",
            pathTransitionDuration: 0.1,
          })}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ y: [0, -8, 0, -4, 0] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        >
          <IconComponent />
        </motion.div>
      </div>
      <motion.span
        className="text-orange-500 font-bold text-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {animatedValue}%
      </motion.span>
      <motion.span
        className="text-[#888] text-sm"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {skill.name}
      </motion.span>
    </motion.div>
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
    <motion.section
      id="about"
      className="py-20 bg-[#1a1a1a]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <motion.h2
            className="text-white text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {about.sectionTitle}
          </motion.h2>
          <motion.p
            className="text-[#888] text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {about.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative w-full max-w-[350px] h-[450px] rounded-[40%_60%_60%_40%/60%_40%_60%_40%] overflow-hidden bg-[#2d2d2d]"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <img
                src="/youssef1.png"
                alt="Youssef"
                className="w-full h-full object-cover object-top grayscale"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="text-[#888] text-sm leading-relaxed whitespace-pre-line"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="mb-6 text-base"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {about.bio}
            </motion.p>

            <motion.a
              href={about.cvLink}
              download
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-orange-600"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: [1, 1.02, 1] }}
              transition={{ duration: 1, delay: 0.8, repeat: Infinity, repeatDelay: 2 }}
              whileHover={{ scale: 1.05 }}
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
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          ref={callbackRef}
          className="mt-16 pt-10 border-t border-[#333]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: index * 0.05, duration: 0.6 }}
              >
                <SkillCard skill={skill} isVisible={isVisible} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}