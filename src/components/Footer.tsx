
import { Github, Mail } from "lucide-react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-background/80 backdrop-blur text-sm text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-primary">Cortex</span>
          <span className=" sm:inline text-muted-foreground/60">&copy; {year}</span>
        </div>
        <div className="flex gap-4">
          <a
            href="mailto:hello@ethermindcortex.com"
            className="hover:text-primary transition-colors"
            aria-label="Contact support">
            <Mail size={18} />
          </a>
          <a 
            href="https://github.com/ethermindcortex"
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
