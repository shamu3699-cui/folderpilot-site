import { Sparkles, FolderTree, RotateCcw } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'One-click cleanup',
    description:
      'Select a folder, click "Clean My Folder", done. No complex settings or configuration needed.',
    color: 'primary',
  },
  {
    icon: FolderTree,
    title: 'AI-powered categorization',
    description:
      'Intelligent sorting recognizes documents, images, code, media, archives, and more — automatically.',
    color: 'primary',
  },
  {
    icon: RotateCcw,
    title: 'Instant undo',
    description:
      'Every operation is reversible. One click brings all files back to their original locations.',
    color: 'trust',
  },
]

export function Features() {
  return (
    <section className="py-24 px-6" id="features">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps from chaos to organized.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="relative p-8 rounded-2xl border border-border gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              {/* Step number */}
              <div className="absolute top-4 right-4 text-5xl font-bold text-muted/50 select-none">
                {i + 1}
              </div>

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  feature.color === 'trust'
                    ? 'bg-trust/10'
                    : 'bg-primary/10'
                }`}
              >
                <feature.icon
                  className={`w-6 h-6 ${
                    feature.color === 'trust'
                      ? 'text-trust'
                      : 'text-primary'
                  }`}
                />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
