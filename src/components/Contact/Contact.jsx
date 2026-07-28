import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import axios from "axios";
import styles from "./Contact.module.css";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  timeline: z.string().min(1, "Please enter a timeline"),
  details: z.string().min(10, "Project details must be at least 10 characters"),
});

const API_BASE_URL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL.replace(/\/feedback\/?$/, "")
  : "http://localhost:3000";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAdminPortal, setShowAdminPortal] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      timeline: "",
      details: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    let isSavedInDb = false;
    try {
      // 1. Save to MongoDB Database via API
      await axios.post(`${API_BASE_URL}/contact`, {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        timeline: data.timeline,
        details: data.details,
      });
      isSavedInDb = true;

      // 2. Also send notification via EmailJS
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
            service: data.service,
            timeline: data.timeline,
            title: data.service,
            message: `
                     Name:     ${data.name}
                     Email:    ${data.email}
                     Phone:    ${data.phone}
                     Service:  ${data.service}
                     Timeline: ${data.timeline}
                     
                     Details:
                     ${data.details}
            `.trim(),
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      } catch (emailErr) {
        console.warn("EmailJS notification failed, but message was saved in DB:", emailErr);
      }

      toast.success("Message saved and sent successfully!");
      reset();
    } catch (error) {
      console.error("Contact Submission Error:", error);
      if (isSavedInDb) {
        toast.success("Message saved successfully!");
        reset();
      } else {
        const errorMsg = error.response?.data?.message || error.message || "Failed to submit contact message. Please try again.";
        toast.error(errorMsg);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setIsLoadingMessages(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/contact/all`, {
        email: adminEmail,
        password: adminPassword,
      });

      setMessages(response.data.data || []);
      setIsAdminLoggedIn(true);
      toast.success("Welcome back, Youssef!");
    } catch (error) {
      console.error("Admin Auth Error:", error);
      toast.error(error.response?.data?.message || "Invalid email or password");
    } finally {
      setIsLoadingMessages(false);
    }
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    setAdminEmail("");
    setAdminPassword("");
    setMessages([]);
    setShowAdminPortal(false);
    toast.success("Logged out from admin portal.");
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid date";

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;

    return `${year}/${month}/${day} ${hours}:${minutes} ${ampm}`;
  };

  return (
    <section
      className={`py-20 bg-[#1a1a1a] ${styles.sectionFadeIn}`}
      id="contact"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-lg p-6 sm:p-10 bg-[#1f1f1f] ${styles.formContainer} ${styles.gradientShift}`}
        >
          <div className="text-center mb-10">
            <h2
              className={`text-3xl sm:text-4xl font-bold text-white mb-4 ${styles.titleSlideIn}`}
            >
              Contact me
            </h2>
            <p
              className={`text-[#888888] text-base sm:text-lg ${styles.subtitleFadeIn}`}
            >
              Cultivating Connections: Reach Out And Connect With Me
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`space-y-6 ${styles.formSlideIn}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={styles.delay100}>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Name"
                  className={`w-full bg-[#2a2a2a] border border-[#333] rounded-md px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#FF6B35] transition-colors ${styles.fieldSlideIn} ${styles.inputFocus} ${errors.name ? styles.errorShake : ""}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className={styles.delay200}>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  className={`w-full bg-[#2a2a2a] border border-[#333] rounded-md px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#FF6B35] transition-colors ${styles.fieldSlideIn} ${styles.inputFocus} ${errors.email ? styles.errorShake : ""}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={styles.delay300}>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Phone Number"
                  className={`w-full bg-[#2a2a2a] border border-[#333] rounded-md px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#FF6B35] transition-colors ${styles.fieldSlideIn} ${styles.inputFocus} ${errors.phone ? styles.errorShake : ""}`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className={styles.delay400}>
                <select
                  {...register("service")}
                  className={`w-full bg-[#2a2a2a] border border-[#333] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#FF6B35] transition-colors appearance-none cursor-pointer ${styles.fieldSlideIn} ${styles.inputFocus} ${errors.service ? styles.errorShake : ""}`}
                >
                  <option value="" disabled className="text-[#888888]">
                    Service Of Interest
                  </option>
                  <option value="fullstack-web">
                    Full Stack Web Development
                  </option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="api-development">API Development</option>
                  <option value="database">Database Design</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={styles.delay500}>
                <input
                  {...register("timeline")}
                  type="text"
                  placeholder="Timeline"
                  className={`w-full bg-[#2a2a2a] border border-[#333] rounded-md px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#FF6B35] transition-colors ${styles.fieldSlideIn} ${styles.inputFocus} ${errors.timeline ? styles.errorShake : ""}`}
                />
                {errors.timeline && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.timeline.message}
                  </p>
                )}
              </div>

              <div className={styles.delay600}>
                <textarea
                  {...register("details")}
                  placeholder="Project Details..."
                  rows={5}
                  className={`w-full bg-[#2a2a2a] border border-[#333] rounded-md px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#FF6B35] transition-colors resize-none ${styles.fieldSlideIn} ${styles.inputFocus} ${errors.details ? styles.errorShake : ""}`}
                />
                {errors.details && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.details.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#2a2a2a] border border-[#666] text-[#888888] px-8 py-2.5 rounded-md font-medium transition-all duration-300 hover:border-[#FF6B35] hover:text-[#FF6B35] disabled:opacity-50 disabled:cursor-not-allowed ${styles.buttonHover} ${styles.buttonSlideIn} ${styles.buttonPulse} ${isSubmitting ? styles.submitButtonLoading : ""}`}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </form>

          {/* Admin Toggle / Section Divider */}
          <div className="mt-12 pt-8 border-t border-[#333] text-center">
            {!showAdminPortal && !isAdminLoggedIn && (
              <button
                onClick={() => setShowAdminPortal(true)}
                className="text-[#888888] hover:text-[#FF6B35] text-sm font-medium transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                <i className="fas fa-lock text-xs"></i> Admin Login to View Messages
              </button>
            )}
          </div>

          {/* Admin Login Form */}
          {showAdminPortal && !isAdminLoggedIn && (
            <div className="mt-6 p-6 bg-[#252525] border border-[#333] rounded-lg animate-fadeIn">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white text-lg font-semibold flex items-center gap-2">
                  <i className="fas fa-user-shield text-[#FF6B35]"></i> Admin Access
                </h3>
                <button
                  onClick={() => setShowAdminPortal(false)}
                  className="text-[#888] hover:text-white text-sm"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <input
                  type="email"
                  required
                  placeholder="Admin Email (e.g. youssef@nti.com)"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-md px-4 py-2.5 text-white placeholder-[#777] focus:outline-none focus:border-[#FF6B35] transition-colors"
                />
                <input
                  type="password"
                  required
                  placeholder="Admin Password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-md px-4 py-2.5 text-white placeholder-[#777] focus:outline-none focus:border-[#FF6B35] transition-colors"
                />
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAdminPortal(false)}
                    className="px-4 py-2 text-sm text-[#888] hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoadingMessages}
                    className="px-6 py-2 bg-[#FF6B35] hover:bg-[#ff8555] text-white text-sm font-medium rounded transition-colors disabled:opacity-50"
                  >
                    {isLoadingMessages ? "Authenticating..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Admin Messages View */}
          {isAdminLoggedIn && (
            <div className="mt-8 pt-6 border-t border-[#333] animate-fadeIn">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <i className="fas fa-inbox text-[#FF6B35]"></i> Contact Submissions
                  </h3>
                  <p className="text-[#888] text-sm mt-0.5">
                    Total messages: {messages.length}
                  </p>
                </div>
                <button
                  onClick={handleAdminLogout}
                  className="px-4 py-2 bg-[#2a2a2a] border border-[#444] text-[#888] hover:text-white hover:border-red-500 hover:bg-red-500/10 text-sm rounded transition-all flex items-center gap-2"
                >
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              </div>

              {messages.length === 0 ? (
                <div className="text-center py-10 bg-[#252525] rounded-lg text-[#888]">
                  <i className="fas fa-envelope-open text-3xl mb-3 text-[#555]"></i>
                  <p>No contact messages stored in database yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((item) => (
                    <div
                      key={item._id || item.id || Math.random()}
                      className="p-5 bg-[#252525] border border-[#333] rounded-lg hover:border-[#FF6B35]/50 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3 border-b border-[#333] pb-3">
                        <div>
                          <h4 className="text-white font-semibold text-lg flex items-center gap-2">
                            {item.name}
                          </h4>
                          <div className="flex flex-wrap gap-4 text-xs text-[#aaa] mt-1">
                            <span className="flex items-center gap-1">
                              <i className="fas fa-envelope text-[#FF6B35]"></i> {item.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <i className="fas fa-phone text-[#FF6B35]"></i> {item.phone}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs text-[#888] whitespace-nowrap bg-[#1a1a1a] px-3 py-1 rounded border border-[#333]">
                          {formatDate(item.createdAt)}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs bg-[#FF6B35]/15 text-[#FF6B35] px-2.5 py-1 rounded font-medium border border-[#FF6B35]/30">
                          Service: {item.service}
                        </span>
                        <span className="text-xs bg-[#2a2a2a] text-[#bbb] px-2.5 py-1 rounded font-medium border border-[#444]">
                          Timeline: {item.timeline}
                        </span>
                      </div>

                      <p className="text-[#ccc] text-sm whitespace-pre-wrap bg-[#1a1a1a] p-3 rounded border border-[#2a2a2a] leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
