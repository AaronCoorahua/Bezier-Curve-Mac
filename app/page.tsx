"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Layers, Cpu, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-700/20 via-transparent to-transparent" />

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
              >
                <Sparkles className="w-4 h-4 text-zinc-400" />
                <span className="text-sm text-zinc-400">Tessellation Shaders</span>
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                Bezier Surface
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                Visualización dinámica mediante{" "}
                <span className="text-white font-medium">tessellation shaders</span>
              </p>
            </motion.div>

            {/* Feature cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 max-w-4xl mx-auto"
            >
              {[
                { icon: Layers, text: "Subdivisión en tiempo real" },
                { icon: Cpu, text: "Procesamiento GPU" },
                { icon: Sparkles, text: "Arte matemático interactivo" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <feature.icon className="w-6 h-6 mb-3 text-zinc-400" />
                  <p className="text-sm text-zinc-300">{feature.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500"
            >
              El Arte de la Geometría
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl hover:border-white/20 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Tessellation Dinámica</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Subdivisión en tiempo real de la geometría mediante shaders especializados, 
                    transformando superficies simples en formas complejas y orgánicas con millones de vértices.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl hover:border-white/20 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Superficie Bézier</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Curvas paramétricas controladas por puntos que deforman la geometría como una 
                    tela flexible, creando formas suaves y naturales mediante interpolación matemática.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Main description card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
              <div className="relative p-10 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">GPU + Matemáticas = Arte Visual</h3>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                      La coloración basada en altura revela la curvatura y el volumen de la superficie, 
                      creando gradientes que fluyen naturalmente a través de la geometría. Cada píxel 
                      es calculado en paralelo por la GPU, permitiendo deformaciones complejas en tiempo real.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      El resultado es una <span className="text-white font-semibold">experiencia visual inmersiva</span> que 
                      demuestra cómo las matemáticas puras pueden transformarse en formas orgánicas y artísticas, 
                      difuminando la línea entre código y creatividad.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
              Galería Visual
            </h2>

            {/* First image - Large */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="aspect-video relative">
                  <Image
                    src="/image1.png"
                    alt="Superficie Bézier - Vista principal"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>

            {/* Two images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[2, 3].map((num, i) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                >
                  <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <div className="aspect-video relative">
                      <Image
                        src={`/image${num}.png`}
                        alt={`Superficie Bézier - Vista ${num}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Technical Details */}
        <section className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
              Características Técnicas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Tessellation Shaders",
                  desc: "Subdivisión dinámica de geometría en la GPU para mayor detalle",
                },
                {
                  title: "Superficie Bézier",
                  desc: "Curvas paramétricas que generan formas suaves y orgánicas",
                },
                {
                  title: "Control Interactivo",
                  desc: "Puntos de control que deforman la superficie en tiempo real",
                },
                {
                  title: "Coloración Procedural",
                  desc: "Gradientes basados en altura que revelan la geometría",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-6 mb-6"
            >
              <a
                href="https://github.com/AaronCoorahua"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
            </motion.div>
            <p className="text-sm text-zinc-500">
              Matemáticas transformadas en arte visual interactivo
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
