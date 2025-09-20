import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks } from "../Data";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 backdrop-blur bg-zinc-900/70">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">


          <NavLink to="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400" />
            <span className="text-white font-semibold tracking-tight">Auto Emailer</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.to}
                href={l.to}
                className="text-sm text-zinc-300 hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
           <NavLink  
                to="/auto-emailer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-zinc-900 px-4 py-2 text-sm font-medium shadow hover:shadow-md"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </NavLink>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-zinc-200 hover:bg-white/10"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-3xl" onClick={() => setOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-72 bg-zinc-900 border-l border-white/10 shadow-xl p-6">
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold">Menu</span>
              <button
                className="rounded-lg p-2 hover:bg-white/10"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-zinc-200" />
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-zinc-200 hover:text-white py-2"
                >
                  {l.label}
                </a>
              ))}
              <NavLink  
                to="/auto-emailer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-zinc-900 px-4 py-2 text-sm font-medium shadow hover:shadow-md"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;