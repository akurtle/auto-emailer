import { useState } from "react";
import Section from "./Section";
import { faqs } from "../Data";

function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <Section id="faq" className="py-20 bg-zinc-900 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Frequently asked questions</h2>
          <p className="mt-3 text-zinc-400">Quick answers for common questions.</p>
        </div>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-zinc-950">
          {faqs.map((f, idx) => (
            <button
              key={f.q}
              onClick={() => setOpenIdx(idx === openIdx ? -1 : idx)}
              className="w-full text-left px-6 py-5 hover:bg-white/5"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-medium text-white">{f.q}</p>
                  {openIdx === idx && (
                    <p className="mt-2 text-zinc-300">{f.a}</p>
                  )}
                </div>
                <span className="text-zinc-400">{openIdx === idx ? "–" : "+"}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}


export default FAQ;