import { motion } from "framer-motion";
import { Certificates } from "./Components/Certificates";

export const Certifications = () => {
  return (
    <motion.div
      className="w-full h-full flex flex-col justify-start"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <Certificates />
    </motion.div>
  );
};
