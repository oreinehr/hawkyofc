"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* TITLE */}
        <motion.h2
          className="text-4xl md:text-5xl font-black mb-4 text-balance"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Entre em Contato
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Vamos criar algo incrível juntos
        </motion.p>

        {/* SOCIAL LINKS */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Redes Sociais
          </motion.h3>

          <div className="space-y-4">
            {/* Instagram */}
            <motion.a
              href="https://instagram.com/hawky_ofc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border transition-all"
              whileHover={{
                scale: 1.03,
                borderColor: "rgb(59,130,246)",
                boxShadow: "0 10px 35px rgba(0,80,255,0.25)",
              }}
            >
              <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <Instagram size={26} className="text-primary" />
              </motion.div>

              <div>
                <div className="font-semibold">Instagram</div>
                <div className="text-sm text-muted-foreground">@hawky_ofc</div>
              </div>
            </motion.a>

            {/* YouTube */}
            <motion.a
              href="https://www.youtube.com/@Hawkyyy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border transition-all"
              whileHover={{
                scale: 1.03,
                borderColor: "rgb(59,130,246)",
                boxShadow: "0 10px 35px rgba(0,80,255,0.25)",
              }}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <Youtube size={26} className="text-primary" />
              </motion.div>

              <div>
                <div className="font-semibold">YouTube</div>
                <div className="text-sm text-muted-foreground">Canal do YouTube</div>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:jean.felix.silva.2040@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border transition-all"
              whileHover={{
                scale: 1.03,
                borderColor: "rgb(59,130,246)",
                boxShadow: "0 10px 35px rgba(0,80,255,0.25)",
              }}
            >
              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <Mail size={26} className="text-primary" />
              </motion.div>

              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-muted-foreground">
                  jean.felix.silva.2040@gmail.com
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
