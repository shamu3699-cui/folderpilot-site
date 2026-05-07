import { Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">FP</span>
          </div>
          <span className="text-sm text-muted-foreground">
            FolderPilot &mdash; Free &amp; open-source folder organizer
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/nicepkg/folder-pilot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#trust"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Safety
          </a>
          <a
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#faq"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </a>
        </div>
      </div>
    </footer>
  )
}
