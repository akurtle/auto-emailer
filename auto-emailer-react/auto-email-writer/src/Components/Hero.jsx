import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle2, Github, Linkedin, Mail } from "lucide-react";
import Section from "./Section";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Section id="home" className="pt-28 sm:pt-32 pb-16 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            >
              An auto emailer powered by Gemini AI.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-zinc-300 text-lg"
            >
              This helps generate replies to emails using the Gemini AI model by Google. 
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                id="cta"
                to="/auto-emailer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white text-zinc-900 px-5 py-3 font-medium shadow hover:shadow-lg"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-2xl bg-zinc-800 text-white px-5 py-3 font-medium hover:bg-zinc-700 border border-white/10"
              >
                See Features
              </a>
            </motion.div>

            <div className="mt-8 flex items-center gap-4 text-sm text-zinc-400">
              <div className="flex items-center gap-1"><Star className="h-4 w-4" /> Instant response</div>
              <div className="flex items-center gap-1"><Star className="h-4 w-4" /> AI Modified email templates</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative"
          >
            <div className="mx-auto h-[450px] w-full rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-2xl lg:h-[460px]" />
            <motion.img
              src="/public/main_image.png"
              alt="App screenshot"
              className="absolute top-1/2 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-2xl md:h-[400px] md:w-[550px]"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            />
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-cyan-400/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

export default Hero;