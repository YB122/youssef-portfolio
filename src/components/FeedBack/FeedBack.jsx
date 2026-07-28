import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import axios from "axios";
import { motion, AnimatePresence } from "motion/react";
import styles from "./FeedBack.module.css";

const feedbackSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  message: z.string().min(5, "Message must be at least 5 characters"),
  rating: z.string().min(1, "Please select a rating"),
});

export default function FeedBack() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        const feedbackArray = Array.isArray(data)
          ? data
          : data.feedbacks || data.data || [];
        const validFeedbacks = feedbackArray.filter(
          (item) => item && item.name && item.message,
        );
        setFeedbacks(validFeedbacks);
      })
      .catch((err) => console.error("Failed to load feedbacks:", err));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      message: "",
      rating: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(import.meta.env.VITE_API_URL, {
        name: data.name,
        message: data.message,
        rating: +data.rating,
      });
      console.log("API response:", response);
      const responseData = response.data;
      const newFeedback =
        responseData.feedback ||
        responseData.data ||
        (responseData.name ? responseData : null);

      if (!newFeedback || !newFeedback.name) {
        throw new Error("Invalid response from server");
      }

      setFeedbacks((prev) => [newFeedback, ...prev]);
      toast.success("Feedback saved!");
      reset();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving feedback:", error);
      toast.error("Failed to save feedback.");
    }
  };

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid date";

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;

    return `${year}/${month}/${day} ${hours}:${minutes} ${ampm}`;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={styles.feedbackSection}
      id="feedback"
    >
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.title}
          >
            What People Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.subtitle}
          >
            Feedback from clients and visitors
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsModalOpen(true)}
            className={styles.addButton}
          >
            <i className="fas fa-plus"></i>
            Add Your Feedback
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.feedbackList}
        >
          {feedbacks.length === 0 ? (
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className={styles.emptyState}
            >
              <i className="fas fa-comments"></i>
              <p>No feedback yet. Be the first to share your thoughts!</p>
            </motion.div>
          ) : (
            feedbacks.map((item, index) => (
              <motion.div
                key={item.id || Math.random()}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={styles.feedbackCard}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.avatar}>
                    {(item.name || "?").charAt(0).toUpperCase()}
                  </div>
                  <div className={styles.meta}>
                    <h4 className={styles.name}>{item.name || "Anonymous"}</h4>
                    <span className={styles.date}>
                      {formatDate(item.createdAt || item.date)}
                    </span>
                  </div>
                  <div className={styles.stars}>
                    {renderStars(item.rating || 0)}
                  </div>
                </div>
                <p className={styles.message}>{item.message || ""}</p>
              </motion.div>
            ))
          )}
        </motion.div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.modalOverlay}
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={styles.modalHeader}>
                  <h3>Share Your Feedback</h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className={styles.closeButton}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={styles.field}
                  >
                    <label className={styles.label} htmlFor="name">
                      Your Name
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Enter your name"
                      className={`${styles.input} ${styles.inputFocus}`}
                    />
                    {errors.name && (
                      <p className={styles.error}>{errors.name.message}</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className={styles.field}
                  >
                    <label className={styles.label} htmlFor="rating">
                      Rating
                    </label>
                    <div className={styles.starContainer}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.button
                          key={star}
                          type="button"
                          whileHover={{ scale: 1.2, rotate: 20 }}
                          onClick={() => {
                            const ratingValue = star.toString();
                            const event = {
                              target: { value: ratingValue, name: "rating" },
                            };
                            register("rating").onChange(event);
                          }}
                          className={styles.starButton}
                          aria-label={`${star} star${star > 1 ? "s" : ""}`}
                        >
                          <i
                            className={`fas fa-star ${styles.star} ${
                              star <= (watch("rating") || 0)
                                ? styles.starFilled
                                : ""
                            }`}
                          ></i>
                        </motion.button>
                      ))}
                    </div>
                    <input type="hidden" {...register("rating")} />
                    {errors.rating && (
                      <p className={styles.error}>{errors.rating.message}</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className={styles.field}
                  >
                    <label className={styles.label} htmlFor="message">
                      Your Message
                    </label>
                    <textarea
                      {...register("message")}
                      placeholder="Share your experience..."
                      rows={4}
                      className={`${styles.textarea} ${styles.inputFocus}`}
                    />
                    {errors.message && (
                      <p className={styles.error}>{errors.message.message}</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className={styles.modalActions}
                  >
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className={`${styles.cancelButton} ${styles.buttonHover}`}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={`${styles.submitButton} ${styles.buttonHover}`}
                    >
                      Submit Feedback
                    </button>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
