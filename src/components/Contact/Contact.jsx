import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  timeline: z.string().min(1, "Please enter a timeline"),
  details: z.string().min(10, "Project details must be at least 10 characters"),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name, // ✅ matches {{name}} in template
          email: data.email, // ✅ matches {{email}} in template
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
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-[#1a1a1a]" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg p-6 sm:p-10 bg-[#1f1f1f]">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Contact me
            </h2>
            <p className="text-[#888888] text-base sm:text-lg">
              Cultivating Connections: Reach Out And Connect With Me
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Name"
                  className="w-full bg-[#2a2a2a] border border-[#333] rounded-md px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#FF6B35] transition-colors"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#2a2a2a] border border-[#333] rounded-md px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#FF6B35] transition-colors"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-[#2a2a2a] border border-[#333] rounded-md px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#FF6B35] transition-colors"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <select
                  {...register("service")}
                  className="w-full bg-[#2a2a2a] border border-[#333] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#FF6B35] transition-colors appearance-none cursor-pointer"
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
              <div>
                <input
                  {...register("timeline")}
                  type="text"
                  placeholder="Timeline"
                  className="w-full bg-[#2a2a2a] border border-[#333] rounded-md px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#FF6B35] transition-colors"
                />
                {errors.timeline && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.timeline.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  {...register("details")}
                  placeholder="Project Details..."
                  rows={5}
                  className="w-full bg-[#2a2a2a] border border-[#333] rounded-md px-4 py-3 text-white placeholder-[#888888] focus:outline-none focus:border-[#FF6B35] transition-colors resize-none"
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
                className="bg-[#2a2a2a] border border-[#666] text-[#888888] px-8 py-2.5 rounded-md font-medium transition-all duration-300 hover:border-[#FF6B35] hover:text-[#FF6B35] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
