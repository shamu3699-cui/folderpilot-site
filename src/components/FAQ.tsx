import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../lib/utils'

const faqs = [
  {
    question: 'Is it really safe? Will I lose files?',
    answer:
      'FolderPilot only moves files — it never deletes them. Every operation is tracked and fully reversible with one-click undo. Your files are only moved within the same folder, and you can preview everything before confirming.',
  },
  {
    question: 'Does it upload my files anywhere?',
    answer:
      'No. FolderPilot runs 100% locally on your machine. File analysis happens on-device. No internet connection is required for the core functionality. Your files never leave your computer.',
  },
  {
    question: 'What file types does it support?',
    answer:
      'FolderPilot categorizes all common file types: documents (PDF, DOCX, TXT), images (PNG, JPG, SVG), code files, media (MP3, MP4), archives (ZIP, RAR), and more. Unrecognized extensions are grouped in an "Other" category.',
  },
  {
    question: 'Is it free?',
    answer:
      'Yes, FolderPilot is completely free and open-source under the MIT license. You can view, audit, and contribute to the source code on GitHub.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-6" id="faq">
      <div className="container mx-auto max-w-3xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border rounded-xl overflow-hidden gradient-card"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200',
                    openIndex === i && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
