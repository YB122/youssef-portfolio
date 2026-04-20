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
      <Toaster position="top-center" />
    </>
  );
}

export default App;
