import { features } from "../Data";
import Section from "./Section";
import { motion } from "framer-motion";

function Features() {
  return (
    <Section id="features" className="py-20 bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">No longer worry about writing emails!</h2>
          <p className="mt-3 text-zinc-400">
            A click of a button is all it takes to generate a reply to your emails.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-zinc-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Features;