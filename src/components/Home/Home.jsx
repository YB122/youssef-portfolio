import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section
      className={`min-h-screen bg-[#1a1a1a] flex items-center py-20 ${styles.fadeIn}`}
    >
      <div className="max-w-7xl mx-auto px-5 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
          <div
            className={`flex flex-col gap-5 lg:order-1 order-2 text-center lg:text-left items-center lg:items-start ${styles.slideInLeft}`}
          >
            <p className={`text-[#888] text-lg m-0 ${styles.delay100}`}>
              Hi I am
            </p>
            <h1
              className={`text-white text-2xl font-semibold m-0 ${styles.delay200}`}
            >
              Youssef Benyamine
            </h1>
            <h2
              className={`text-4xl lg:text-5xl font-bold m-0 leading-tight bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent ${styles.delay300}`}
            >
              Full Stack Developer
            </h2>

            <div className={`flex gap-3 mt-2.5 ${styles.delay400}`}>
              <a
                href="https://www.linkedin.com/in/youssef-benyamine-b55a81219/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center border border-[rgba(255,107,53,0.3)] rounded-full text-[#888888] transition-all duration-300 hover:border-[#FF6B35] hover:text-[#FF6B35] ${styles.pulse} ${styles.smoothTransition}`}
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/YB122"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center border border-[rgba(255,107,53,0.3)] rounded-full text-[#888888] transition-all duration-300 hover:border-[#FF6B35] hover:text-[#FF6B35] ${styles.pulse} ${styles.smoothTransition}`}
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.youtube.com/@youssefbenyamine944"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center border border-[rgba(255,107,53,0.3)] rounded-full text-[#888888] transition-all duration-300 hover:border-[#FF6B35] hover:text-[#FF6B35] ${styles.pulse} ${styles.smoothTransition}`}
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="/Youssef_Benyamine_Tawfike_Amine.pdf"
                download
                className={`w-10 h-10 flex items-center justify-center border border-[rgba(255,107,53,0.3)] rounded-full text-[#888888] transition-all duration-300 hover:border-[#FF6B35] hover:text-[#FF6B35] ${styles.pulse} ${styles.smoothTransition}`}
                aria-label="CV"
              >
                <i className="far fa-file-pdf"></i>
              </a>
            </div>

            <div
              className={`flex gap-4 mt-5 flex-col sm:flex-row w-full sm:w-auto ${styles.delay500}`}
            >
              <Link
                to="/contact"
                className={`bg-orange-500 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-orange-600 inline-block text-center ${styles.smoothTransition}`}
              >
                Hire Me
              </Link>
              <a
                href="/Youssef_Benyamine_Tawfike_Amine.pdf"
                download
                className={`bg-transparent text-white px-8 py-3 rounded-md font-medium border border-[#666] transition-all duration-300 hover:border-orange-500 hover:text-orange-500 inline-block text-center ${styles.smoothTransition}`}
              >
                Download CV
              </a>
            </div>

            <div
              className={`flex mt-10 bg-[#2a2a2a] rounded-lg p-6 justify-center lg:justify-start ${styles.delay600}`}
            >
              <div className="flex flex-col gap-1 px-6 lg:px-8 border-r border-[#444] last:border-r-0 first:pl-0 last:pr-0">
                <span
                  className={`text-orange-500 text-2xl font-bold ${styles.counter}`}
                >
                  1+
                </span>
                <span className="text-white text-sm">Experiences</span>
              </div>
              <div className="flex flex-col gap-1 px-6 lg:px-8 border-r border-[#444] last:border-r-0">
                <span
                  className={`text-orange-500 text-2xl font-bold ${styles.counter}`}
                >
                  10+
                </span>
                <span className="text-white text-sm">Project done</span>
              </div>
              <div className="flex flex-col gap-1 px-6 lg:px-8 last:border-r-0">
                <span
                  className={`text-orange-500 text-2xl font-bold ${styles.counter}`}
                >
                  10+
                </span>
                <span className="text-white text-sm">Happy Clients</span>
              </div>
            </div>
          </div>

          <div
            className={`flex justify-center items-center lg:order-2 order-1 ${styles.slideInRight}`}
          >
            <div
              className={`relative w-full max-w-[450px] aspect-square rounded-full overflow-hidden bg-[#2d2d2d] ${styles.floating} ${styles.delay700}`}
            >
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#2d2d2d] rounded-full z-10 ${styles.delay800}`}
              ></div>
              <img
                src="/youssef1.png"
                alt="Youssef1"
                className="relative z-20 w-full h-full object-cover"
                style={{ objectPosition: "center 48%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
