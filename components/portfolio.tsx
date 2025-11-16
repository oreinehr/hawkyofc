"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    artist: "Luna Beats",
    title: "Midnight Dreams",
    description: "Eletrônico ambient com produção cinematográfica",
    youtubeId: "pgPw9EqzLFY?si=0sXRgVfn-yLlrOsK",
  },
  {
    id: 2,
    artist: "Urban Flow",
    title: "City Lights",
    description: "Hip-hop urbano com batidas inovadoras",
    youtubeId: "389nSW2hXqw?si=J5ff74TOhC0-0WRb",
  },
  {
    id: 3,
    artist: "Sophia Vocals",
    title: "Amanhecer",
    description: "Pop melódico com produção refinada",
    youtubeId: "ym8TamDZp_g?si=CwCBjZ4nFevRST9t",
  },
  {
    id: 4,
    artist: "Electric Minds",
    title: "Neon Vibes",
    description: "Synthwave com elementos experimentais",
    youtubeId: "3d9FpoLund4?si=Uc-C88JXRgW4ZlZj",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30"
    >
      <div className="max-w-6xl mx-auto">

        {/* Título com animação refinada */}
        <motion.h2
          className="text-4xl md:text-5xl font-black mb-2 text-balance"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Meus Projetos
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Confira alguns dos meus trabalhos recentes e clique para ouvir direto na página.
        </motion.p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group rounded-lg overflow-hidden bg-card border border-border backdrop-blur-sm 
              hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                rotateX: 3,
                rotateY: -3,
                boxShadow: "0 15px 40px rgba(0, 60, 255, 0.25)"
              }}
            >
              {/* YouTube Embed com fade + scale */}
              <motion.div
                className="relative w-full aspect-video bg-muted overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 
                bg-gradient-to-br from-blue-400/30 to-blue-900/30" />

                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${project.youtubeId}?controls=1&modestbranding=1`}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://youtube.com/playlist?list=PLOX5l8EfbJigZYc7YxKzAgYxTd2L9UwBw&si=0hn7TStAxkzfMeTQ"
            target="_blank"
            className="
              inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold 
              hover:bg-blue-800 transition-all hover:scale-[1.07] active:scale-95 
              relative overflow-hidden
            "
            whileHover={{
              boxShadow: "0 0 25px rgba(0,80,255,0.4)",
            }}
          >
            <span className="relative z-10">Ver mais projetos</span>

            {/* glow animado no hover */}
            <motion.div
              className="absolute inset-0 bg-blue-500 opacity-0"
              whileHover={{ opacity: 0.15 }}
              transition={{ duration: 0.4 }}
            />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
