import { motion } from "framer-motion";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";

export const Connect = () => {
  const [message, setMessage] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send("service_jgwb1sj", "template_ucjuy2r", {
        message,
      })
      .then(
        (_) => {
          setFormSubmitted(true);
          setMessage("");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("Failed to send message. Error:", error);
        }
      );
  };

  return (
    <motion.div
      className="w-full py-16 px-4 md:px-12 max-w-xl mx-auto"
      id="connect-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/10 p-8 rounded-xl flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center pb-4 border-b border-neutral-100 dark:border-neutral-800">
          <Mail size={22} className="text-neutral-800 dark:text-neutral-200" />
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
            Get in Touch
          </h3>
          <p className="text-xs text-neutral-400">
            Leave a message below and I will get back to you shortly.
          </p>
        </div>

        {formSubmitted ? (
          <motion.div
            className="bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 p-4 rounded text-center text-xs font-mono border border-neutral-200 dark:border-neutral-800"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Thank you! Your message has been sent.
          </motion.div>
        ) : (
          <form className="space-y-6" id="connectForm" onSubmit={handleSubmit}>
            <div className="space-y-2 flex flex-col">
              <label
                htmlFor="connect-message"
                className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest"
              >
                Message
              </label>
              <textarea
                id="connect-message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                rows={3}
                required
                className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-850 py-2 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors duration-300 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-bold uppercase tracking-widest py-3 rounded transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Send Message
            </motion.button>
          </form>
        )}
      </div>
    </motion.div>
  );
};
