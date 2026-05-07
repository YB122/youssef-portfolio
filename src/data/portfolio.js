import adminDashboardImg from "../assets/pic-por/admin dashboard.png";
import reactTodoImg from "../assets/pic-por/react-todo.png";
import vueTodoImg from "../assets/pic-por/vue-todo.png";
import clinicImg from "../assets/pic-por/clinic.png";
import movieCrudsImg from "../assets/pic-por/movie cruds.png";
import guessTheWordImg from "../assets/pic-por/guess the word.png";
import bondiImg from "../assets/pic-por/bondi.png";
import specialDesignImg from "../assets/pic-por/special desgin.png";
import skyChatImg from "../assets/pic-por/sky chat.png";
import srahaImg from "../assets/pic-por/sraha full stack.png";
import yffImg from "../assets/pic-por/yff.png";
import libraryImg from "../assets/pic-por/library.png";

export const categories = [
  { id: "all", label: "All" },
  { id: "react", label: "React" },
  { id: "vuejs", label: "Vue.js" },
  { id: "vanillajs", label: "Vanilla JS" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
];

export const projects = [
  // ── REACT ──────────────────────────────────────────
  {
    id: 1,
    title: "Admin Dashboard",
    category: "react",
    github: "https://github.com/YB122/admin-dashboard",
    live: "https://admin-dashboard-rust-chi-84.vercel.app/",
    image: adminDashboardImg,
    description: "E-commerce admin dashboard with React 19, CRUD operations, dark/light mode.",
  },
  {
    id: 2,
    title: "Todo App React",
    category: "react",
    github: "https://github.com/YB122/Todo-App-React",
    live: "https://todoappreactnti.vercel.app/",
    image: reactTodoImg,
    description: "Task management with JWT auth, Zod validation, and REST API integration.",
  },

  // ── VUE ────────────────────────────────────────────
  {
    id: 3,
    title: "Todo App Vue",
    category: "vuejs",
    github: "https://github.com/YB122/todo-app",
    live: "https://todo-app-bice-eight-53.vercel.app/",
    image: vueTodoImg,
    description: "Clean Todo app built with Vue.js featuring state management and CRUD.",
  },

  // ── VANILLA JS ─────────────────────────────────────
  {
    id: 4,
    title: "Clinic Website",
    category: "vanillajs",
    github: "https://github.com/YB122/clinic",
    live: "https://clinic-indol.vercel.app/",
    image: clinicImg,
    description: "Healthcare clinic website with glassmorphism UI and CSS3 animations.",
  },
  {
    id: 5,
    title: "Movie Cruds",
    category: "vanillajs",
    github: "https://github.com/YB122/Movie-Cruds",
    live: "https://yb122.github.io/Movie-Cruds/",
    image: movieCrudsImg,
    description: "Movies management system with CRUD, real-time search, and LocalStorage.",
  },
  {
    id: 6,
    title: "Guess The Word",
    category: "vanillajs",
    github: "https://github.com/YB122/guess-the-word-game",
    live: "https://yb122.github.io/guess-the-word-game/",
    image: guessTheWordImg,
    description: "Word guessing game with hints system and interactive user feedback.",
  },
  {
    id: 7,
    title: "Bondi Agency",
    category: "vanillajs",
    github: "https://github.com/YB122/Bondi",
    live: "https://yb122.github.io/Bondi/",
    image: bondiImg,
    description: "Fully responsive creative agency website built with Bootstrap 5.",
  },
  {
    id: 8,
    title: "Special Design",
    category: "vanillajs",
    github: "https://github.com/YB122/Special-Design",
    live: "https://yb122.github.io/Special-Design/",
    image: specialDesignImg,
    description: "Creative front-end design template with advanced CSS techniques.",
  },

  // ── BACKEND ────────────────────────────────────────
  {
    id: 9,
    title: "E-Commerce Backend",
    category: "backend",
    github: "https://github.com/YB122/e-commerce-back-end",
    live: null,
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Scalable e-commerce REST API with auth, products, orders, and payments.",
  },
  {
    id: 10,
    title: "Sky Chat",
    category: "backend",
    github: "https://github.com/YB122/Sky-Chat",
    live: null,
    image: skyChatImg,
    description: "Real-time messaging system backend with WebSocket communication.",
  },
  {
    id: 11,
    title: "Courses Platform",
    category: "backend",
    github: "https://github.com/YB122/Courses-Platform",
    live: null,
    image: "https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "RESTful API for online courses platform with role-based access control.",
  },
  {
    id: 12,
    title: "ATM System",
    category: "backend",
    github: "https://github.com/YB122/ATM-System",
    live: null,
    image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Banking ATM backend with secure PIN auth and real-time transaction processing.",
  },
  {
    id: 13,
    title: "Library Management System",
    category: "fullstack",
    github: "https://github.com/YB122/Library",
    live: "https://alex-library-next.vercel.app/",
    image: libraryImg,
    description: "Complete library ecosystem with Node.js/Express backend, React admin dashboard, and Next.js frontend featuring JWT auth, book management, and transaction system.",
  },

  // ── FULL STACK ─────────────────────────────────────
  {
    id: 14,
    title: "NTI Sara7a",
    category: "fullstack",
    github: "https://github.com/YB122/ntisara7a",
    live: null,
    image: srahaImg,
    description: "Full stack application built during NTI intensive training program.",
  },
  {
    id: 15,
    title: "YFF Platform",
    category: "fullstack",
    github: "https://github.com/YB122/yff",
    live: "https://yff-delta.vercel.app/",
    image: yffImg,
    description: "Full stack web platform with complete frontend and backend integration.",
  },
];
