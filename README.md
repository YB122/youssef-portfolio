# Youssef Benyamine - Portfolio

A modern, responsive portfolio website showcasing full-stack development projects and skills. Built with React 19 and Vite for optimal performance.

## Features

- **Responsive Design** - Fully responsive across all devices
- **Dark/Light Mode** - Theme switching support
- **Multi-page Navigation** - Home, About, Services, Portfolio, Contact, Feedback
- **Project Showcase** - 15+ projects with category filtering (React, Vue, Vanilla JS, Backend, Full Stack)
- **Contact Form** - EmailJS integration for direct messaging
- **i18n Ready** - Internationalization support via react-i18next
- **Smooth Animations** - CSS3 animations and transitions

## Tech Stack

- **Frontend:** React 19, Vite, TailwindCSS, Flowbite
- **Routing:** React Router DOM v7
- **Forms:** React Hook Form + Zod validation
- **Icons:** React Icons, Font Awesome
- **Notifications:** React Hot Toast, SweetAlert2
- **Email:** EmailJS
- **State:** React Context
- **Build Tool:** Vite 8

## Project Structure

```text
src/
  assets/          # Images and static assets
  components/      # React components by feature
    About/
    Contact/
    FeedBack/
    Home/
    Layout/
    NotFound/
    Portfolio/
    Services/
  data/            # Static data files (about, portfolio, services)
  template/        # Reusable component templates
  App.jsx          # Root component with routing
  main.jsx         # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YB122/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

## Projects Showcase

### React

- **Admin Dashboard** - E-commerce dashboard with CRUD, dark/light mode
- **Todo App** - Task management with JWT auth and Zod validation

### Vue.js

- **Todo App Vue** - Clean Todo with state management

### Vanilla JS

- **Clinic Website** - Healthcare site with glassmorphism UI
- **Movie Cruds** - Movie management with LocalStorage
- **Guess The Word** - Interactive word guessing game
- **Bondi Agency** - Creative agency with Bootstrap 5
- **Special Design** - Advanced CSS techniques showcase

### Backend

- **E-Commerce Backend** - Scalable REST API with auth & payments
- **Sky Chat** - Real-time messaging with WebSocket
- **Courses Platform** - Online courses with role-based access
- **ATM System** - Banking backend with secure PIN auth

### Full Stack

- **Library Management System** - Complete ecosystem with Node.js/Express backend, React admin dashboard, and Next.js frontend
- **NTI Sara7a** - NTI training program project
- **YFF Platform** - Complete frontend/backend integration

## Deployment

The site is configured for Vercel deployment. See `vercel.json` for configuration.

## About

**Youssef Benyamine Tawfike Amine**  
Full Stack Developer | Engineering Graduate, Alexandria University

Currently completing 420 hours of intensive full-stack training at NTI, building production-ready applications using React, Next.js, Vue, Node.js, Express, and MongoDB.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email:** [youssefbenyamine2eme@gmail.com](mailto:youssefbenyamine2eme@gmail.com)
- **Phone:** +20 128 458 4675
- **GitHub:** [@YB122](https://github.com/YB122)
- **LinkedIn:** [Youssef Benyamine](https://www.linkedin.com/in/youssef-benyamine-b55a81219/)
- **Portfolio:** [Live Demo](https://youssef-portfolio-chi.vercel.app/)
