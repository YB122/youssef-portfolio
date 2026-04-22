import { services } from "../../data/services";
import styles from "./Services.module.css";

const IconFrontend = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    width="40"
    height="40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="8"
      width="56"
      height="38"
      rx="4"
      stroke="#FF6B00"
      strokeWidth="3"
      fill="none"
    />
    <line x1="4" y1="34" x2="60" y2="34" stroke="#FF6B00" strokeWidth="3" />
    <line
      x1="28"
      y1="46"
      x2="24"
      y2="56"
      stroke="#FF6B00"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="36"
      y1="46"
      x2="40"
      y2="56"
      stroke="#FF6B00"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="20"
      y1="56"
      x2="44"
      y2="56"
      stroke="#FF6B00"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <polyline
      points="18,25 13,29 18,33"
      stroke="#FF6B00"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="30,25 35,29 30,33"
      stroke="#FF6B00"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="25"
      y1="24"
      x2="23"
      y2="34"
      stroke="#FF6B00"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const IconBackend = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    width="40"
    height="40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="8"
      y="8"
      width="48"
      height="14"
      rx="3"
      stroke="#FF6B00"
      strokeWidth="3"
      fill="none"
    />
    <circle cx="19" cy="15" r="2.5" fill="#FF6B00" />
    <line
      x1="27"
      y1="15"
      x2="48"
      y2="15"
      stroke="#FF6B00"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="8"
      y="26"
      width="48"
      height="14"
      rx="3"
      stroke="#FF6B00"
      strokeWidth="3"
      fill="none"
    />
    <circle cx="19" cy="33" r="2.5" fill="#FF6B00" />
    <line
      x1="27"
      y1="33"
      x2="48"
      y2="33"
      stroke="#FF6B00"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="8"
      y="44"
      width="48"
      height="14"
      rx="3"
      stroke="#FF6B00"
      strokeWidth="3"
      fill="none"
    />
    <circle cx="19" cy="51" r="2.5" fill="#FF6B00" />
    <line
      x1="27"
      y1="51"
      x2="48"
      y2="51"
      stroke="#FF6B00"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconDatabase = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FF6B00"
    strokeWidth="2"
    width="40"
    height="40"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14a9 3 0 0 0 18 0V5" />
    <path d="M3 12a9 3 0 0 0 18 0" />
  </svg>
);

const IconFullStack = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FF6B00"
    strokeWidth="2"
    width="40"
    height="40"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const IconCleanCode = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FF6B00"
    strokeWidth="2"
    width="40"
    height="40"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M8 13h2M8 17h2M12 13h4M12 17h4" />
  </svg>
);

const iconMap = {
  frontend: IconFrontend,
  backend: IconBackend,
  database: IconDatabase,
  fullstack: IconFullStack,
  cleancode: IconCleanCode,
};

export default function Services() {
  return (
    <section className={`py-20 bg-[#1a1a1a] ${styles.sectionFadeIn}`}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2
            className={`text-white text-3xl font-bold mb-4 ${styles.titleFadeIn}`}
          >
            Services
          </h2>
          <p
            className={`text-[#888] text-sm max-w-xl mx-auto ${styles.subtitleFadeIn}`}
          >
            I provide comprehensive web development solutions tailored to your
            needs, from building modern user interfaces to designing robust
            backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const delayClass = `delay-${(index + 1) * 100}`;
            return (
              <div
                key={service.id}
                className={`bg-[#2a2a2a] rounded-xl p-8 text-center ${styles.serviceCard} ${styles.slideInUp} ${styles.glowOnHover} ${styles[delayClass]}`}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`${styles.iconContainer} ${styles.iconBounce}`}
                  >
                    <IconComponent />
                  </div>
                </div>
                <h3
                  className={`text-orange-500 font-semibold mb-3 ${styles.textReveal}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-[#888] text-sm leading-relaxed ${styles.textReveal}`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
