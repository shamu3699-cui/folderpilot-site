import { Shield, HardDrive, Eye, RotateCcw, Lock } from 'lucide-react'

const trustPoints = [
  {
    icon: HardDrive,
    title: 'Runs 100% locally',
    description: 'Your files never leave your machine. No cloud, no uploads, no tracking.',
  },
  {
    icon: Eye,
    title: 'Preview before moving',
    description: 'See exactly what will happen before a single file is moved.',
  },
  {
    icon: RotateCcw,
    title: 'Full undo support',
    description: 'Changed your mind? One click to restore everything to the exact original state.',
  },
  {
    icon: Lock,
    title: 'No permissions abuse',
    description: 'Only accesses the folder you choose. Nothing else on your system.',
  },
  {
    icon: Shield,
    title: 'Open-source & auditable',
    description: 'Every line of code is public on GitHub. Verify it yourself.',
  },
]

export function Trust() {
  return (
    <section className="py-24 px-6" id="trust">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Safe by design
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We get it — letting software touch your files is scary.
            That's why safety is built into every layer of FolderPilot.
          </p>
        </div>

        {/* Trust grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, i) => (
            <div
              key={point.title}
              className="group p-6 rounded-xl border border-border gradient-card shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-trust/10 flex items-center justify-center mb-4">
                <point.icon className="w-5 h-5 text-trust" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
