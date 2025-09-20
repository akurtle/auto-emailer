import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400" />
            <span className="text-white font-semibold tracking-tight">Auto Emailer</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-300">
            <a href="https://github.com/akurtle" className="hover:text-white" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/mirza-yousuf-myzab/" className="hover:text-white" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:myzbaig@mun.ca"  className="hover:text-white" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <p className="mt-6 text-center md:text-left text-sm text-zinc-400">
          Auto Emailer by Mirza.
        </p>
      </div>
    </footer>
  );
}

export default Footer;