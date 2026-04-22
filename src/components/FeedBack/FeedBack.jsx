import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import axios from "axios";
import styles from "./FeedBack.module.css";

const feedbackSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  message: z.string().min(5, "Message must be at least 5 characters"),
  rating: z.string().min(1, "Please select a rating"),
});

export default function FeedBack() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  // Load feedbacks from deployed API
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        const feedbackArray = Array.isArray(data)
          ? data
          : data.feedbacks || data.data || [];
        // Filter out invalid items
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
      // Handle different API response structures
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
    <section className={styles.feedbackSection} id="feedback">
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${styles.headerSlideIn}`}>
          <h2 className={`${styles.title} ${styles.titleSlideIn}`}>
            What People Say
          </h2>
          <p className={`${styles.subtitle} ${styles.subtitleSlideIn}`}>
            Feedback from clients and visitors
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className={`${styles.addButton} ${styles.addButtonHover} ${styles.buttonSlideIn}`}
          >
            <i className="fas fa-plus"></i>
            Add Your Feedback
          </button>
        </div>

        {/* Feedback List */}
        <div className={`${styles.feedbackList} ${styles.feedbackListSlideIn}`}>
          {feedbacks.length === 0 ? (
            <div className={`${styles.emptyState} ${styles.emptyStateBounce}`}>
              <i className="fas fa-comments"></i>
              <p>No feedback yet. Be the first to share your thoughts!</p>
            </div>
          ) : (
            feedbacks.map((item, index) => (
              <div
                key={item.id || Math.random()}
                className={`${styles.feedbackCard} ${styles.feedbackCardHover} ${styles.feedbackCardSlideIn} ${styles[`delay-${(index + 1) * 100}`]}`}
              >
                <div className={styles.cardHeader}>
                  <div className={`${styles.avatar} ${styles.avatarBounce}`}>
                    {(item.name || "?").charAt(0).toUpperCase()}
                  </div>
                  <div className={styles.meta}>
                    <h4 className={styles.name}>{item.name || "Anonymous"}</h4>
                    <span className={styles.date}>
                      {formatDate(item.createdAt || item.date)}
                    </span>
                  </div>
                  <div className={`${styles.stars} ${styles.starPulse}`}>
                    {renderStars(item.rating || 0)}
                  </div>
                </div>
                <p className={styles.message}>{item.message || ""}</p>
              </div>
            ))
          )}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className={`${styles.modalOverlay} ${styles.overlayFadeIn}`}
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className={`${styles.modal} ${styles.modalSlideIn}`}
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
                <div
                  className={`${styles.field} ${styles.fieldSlideIn} ${styles.delay100}`}
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
                </div>

                <div
                  className={`${styles.field} ${styles.fieldSlideIn} ${styles.delay200}`}
                >
                  <label className={styles.label} htmlFor="rating">
                    Rating
                  </label>
                  <div className={styles.starContainer}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => {
                          const ratingValue = star.toString();
                          const event = {
                            target: { value: ratingValue, name: "rating" },
                          };
                          register("rating").onChange(event);
                        }}
                        className={`${styles.starButton} ${styles.starButtonHover}`}
                        aria-label={`${star} star${star > 1 ? "s" : ""}`}
                      >
                        <i
                          className={`fas fa-star ${styles.star} ${
                            star <= (watch("rating") || 0)
                              ? styles.starFilled
                              : ""
                          }`}
                        ></i>
                      </button>
                    ))}
                  </div>
                  <input type="hidden" {...register("rating")} />
                  {errors.rating && (
                    <p className={styles.error}>{errors.rating.message}</p>
                  )}
                </div>

                <div
                  className={`${styles.field} ${styles.fieldSlideIn} ${styles.delay300}`}
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
                </div>

                <div className={`${styles.modalActions} ${styles.delay400}`}>
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
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
