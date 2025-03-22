"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { z } from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    try {
      formSchema.parse(formData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
        return;
      }
    }

    // Submit form
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");

      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white p-8 md:p-10 rounded-lg shadow-sm"
    >
      <h2 className="text-2xl md:text-3xl font-light mb-8">Send us a message</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {["name", "email", "phone", "subject", "message"].map((field) => (
          <div className="space-y-2" key={field}>
            <div className="relative">
              {field === "message" ? (
                <textarea
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)}*`}
                  rows={4}
                  className={`w-full border-b-2 ${
                    errors[field] ? "border-red-500" : "border-gray-200 focus:border-green-500"
                  } pb-2 pt-1 outline-none transition-colors text-lg resize-none`}
                />
              ) : (
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)}*`}
                  className={`w-full border-b-2 ${
                    errors[field] ? "border-red-500" : "border-gray-200 focus:border-green-500"
                  } pb-2 pt-1 outline-none transition-colors text-lg`}
                />
              )}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: formData[field] ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}

        {/* Submit Button */}
        <div className="pt-4">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`relative w-full md:w-auto px-8 py-3 text-white font-medium rounded-md overflow-hidden ${
              isSubmitting ? "bg-gray-400" : "bg-black hover:bg-gray-800"
            } transition-colors duration-300 flex items-center justify-center`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}

            {submitStatus !== "idle" && (
              <motion.div
                className={`absolute inset-0 flex items-center justify-center ${
                  submitStatus === "success" ? "bg-green-500" : "bg-red-500"
                }`}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
              >
                {submitStatus === "success" ? "Message sent!" : "Error sending message"}
              </motion.div>
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
