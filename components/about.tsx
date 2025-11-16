"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid md:grid-cols-2 items-center mt-3 md:gap-12"
        >

          {/* TEXTO */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-5"
            >
              Sobre Mim
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Jean, conhecido como Hawky, é um cantor e compositor independente de São Paulo.
              Geralmente produz todas as suas músicas em seu próprio quarto. Atualmente,
              cria canções inspiradas em personagens da cultura pop e em ideias espontâneas 
              que surgem em sua mente.
            </motion.p>
          </div>

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center justify-center mt-8 md:mt-0"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full md:w-96 md:h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="/azul.png"
                alt="Foto de Hawky"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
