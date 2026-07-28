import React, { useState, useMemo } from "react";
import { categories, projects } from "../../data/portfolio";
import { motion, AnimatePresence } from "motion/react";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    } else {
      return projects.filter((project) => project.category === activeCategory);
    }
  }, [activeCategory]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-[#1a1a1a] py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          Portfolio
        </motion.h1>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{
                opacity: 1,
                y: activeCategory === category.id ? -2 : 0,
                scale: 1,
                boxShadow:
                  activeCategory === category.id
                    ? "0 8px 20px rgba(255, 107, 0, 0.3)"
                    : "0 0 0 rgba(255, 107, 0, 0)",
              }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              whileHover={{
                y: -2,
                boxShadow: "0 8px 20px rgba(255, 107, 0, 0.2)",
              }}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-orange-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div
          className={`flex overflow-x-auto gap-6 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-x-visible ${styles["scrollbar-hide"]}`}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() =>
                  project.live && window.open(project.live, "_blank")
                }
                className={`bg-[#2a2a2a] rounded-xl overflow-hidden shadow-lg shrink-0 w-80 md:w-auto ${styles.gradientOverlay} ${project.live ? "cursor-pointer" : ""}`}
              >
                {/* Project Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.1 }}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Category */}
                  <p className="text-gray-400 text-sm mb-3">
                    {categories.find((cat) => cat.id === project.category)?.label}
                  </p>

                  {/* Source Code Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, "_blank");
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gray-700 text-orange-400 rounded-lg hover:bg-gray-600 hover:text-orange-300 transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.42 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Source Code
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Portfolio;
