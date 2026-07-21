import { Reveal } from '@/components/reveal'
import { Eyebrow } from '@/components/ui'
import { CONTACT_EMAIL, contact } from '@/content'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[var(--color-navy)]">
      <div className="shell py-28 md:py-40">
        <Reveal>
          <Eyebrow invert>{contact.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal>
          <h2 className="display t-h2 mt-9 max-w-[20ch] text-[var(--color-paper)]">
            {contact.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-y-10 md:grid-cols-12 md:items-end md:gap-x-10">
          <Reveal delay={120} className="md:col-span-6">
            <p className="t-lead max-w-[46ch] text-[rgba(248,246,242,0.74)]">
              {contact.body}
            </p>
          </Reveal>

          <Reveal
            delay={200}
            className="md:col-span-5 md:col-start-8 md:justify-self-end"
          >
            <a
              href={contact.cta.href}
              className="arrow-link rounded-full border border-[var(--color-brass)] px-9 py-4 text-[0.9rem] font-semibold tracking-wide text-[var(--color-paper)] transition-colors duration-300 hover:bg-[var(--color-brass)] hover:text-[var(--color-navy)]"
            >
              {contact.cta.label}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
            <div className="mt-6 md:text-right">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="link-underline text-[0.95rem] text-[rgba(248,246,242,0.8)]"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
