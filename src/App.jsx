import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout/Layout";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import FeedBack from "./components/FeedBack/FeedBack";
import NotFound from "./components/NotFound/NotFound";
import emailjs from "@emailjs/browser";
const routes = createBrowserRouter([
  {
    // 1. PUBLIC & GUEST ROUTES
    path: "/",
    element: <Layout />,
    children: [
      { path: "/contact", element: <Contact /> },
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/about", element: <About /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/feedback", element: <FeedBack /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  // main.jsx
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1f1f1f",
            color: "#ffffff",
            border: "1px solid #333",
            borderRadius: "0.5rem",
            padding: "12px 16px",
            fontSize: "0.9rem",
          },
          success: {
            iconTheme: {
              primary: "#FF6B35",
              secondary: "#ffffff",
            },
            style: {
              border: "1px solid rgba(255, 107, 53, 0.3)",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#ffffff",
            },
            style: {
              border: "1px solid rgba(239, 68, 68, 0.3)",
            },
          },
        }}
      />
    </>
  );
}

export default App;
