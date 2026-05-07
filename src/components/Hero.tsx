import { Download, Apple, Monitor } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-20 pb-24 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-trust animate-pulse" />
          100% local &middot; your files never leave your machine
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-up">
          Clean your messy folders
          <br />
          <span className="text-primary">in 1 click</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          FolderPilot uses AI to sort your Desktop & Downloads into neat categories.
          Preview before moving. Undo anytime. No cloud uploads.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <a
            href="https://github.com/nicepkg/folder-pilot/releases/latest"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-cta text-white font-semibold text-lg shadow-cta hover:scale-105 transition-transform"
          >
            <Apple className="w-5 h-5" />
            Download for macOS
          </a>
          <a
            href="https://github.com/nicepkg/folder-pilot/releases/latest"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-secondary border border-border text-foreground font-semibold text-lg hover:bg-accent transition-colors"
          >
            <Monitor className="w-5 h-5" />
            Download for Windows
          </a>
        </div>

        {/* Demo GIF placeholder */}
        <div className="relative max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="rounded-2xl border border-border overflow-hidden shadow-card bg-card">
            <div className="aspect-video flex items-center justify-center bg-muted/30">
              <img
                src="/images/hero-illustration.png"
                alt="FolderPilot app preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Glow behind the image */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/5 blur-3xl" />
        </div>

        {/* Quick stats */}
        <div className="flex items-center justify-center gap-8 mt-10 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <span className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Free &amp; open-source
          </span>
          <span>macOS &amp; Windows</span>
          <span>~5 MB</span>
        </div>
      </div>
    </section>
  )
}
