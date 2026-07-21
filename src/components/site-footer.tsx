import { CONTACT_EMAIL, nav } from '@/content'

const YEAR = 2026

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-navy)]">
      <div className="shell border-t border-[var(--color-line-invert)] py-16 md:py-20">
        <div className="grid gap-y-12 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-5">
            <img
              src="/brand/curate-equity-logo-light.png"
              alt="Curate Equity"
              className="h-11 w-auto"
              width={2136}
              height={1080}
            />
            <p className="mt-6 max-w-[34ch] text-[0.95rem] leading-relaxed text-[rgba(248,246,242,0.66)]">
              A Nordic investment house building specialist investment
              platforms with exceptional teams.
            </p>
          </div>

          <nav className="md:col-span-4 md:col-start-7">
            <span className="eyebrow text-[var(--color-brass-soft)]">
              Explore
            </span>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {nav.sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="link-underline text-[0.95rem] text-[rgba(248,246,242,0.8)]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <span className="eyebrow text-[var(--color-brass-soft)]">
              Enquiries
            </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="link-underline mt-5 block text-[0.95rem] text-[rgba(248,246,242,0.8)]"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-3 text-[0.95rem] text-[rgba(248,246,242,0.66)]">
              The Nordics
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[var(--color-line-invert)] pt-8 text-[0.8rem] text-[rgba(248,246,242,0.55)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {YEAR} Curate Equity. All rights reserved.</p>
          <p>Building specialist investment platforms.</p>
        </div>
      </div>
    </footer>
  )
}
