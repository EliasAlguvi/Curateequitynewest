import { useEffect, useState } from 'react'
import { useRouterState } from '@tanstack/react-router'
import { nav } from '@/content'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isHome = pathname === '/'
  const prefix = isHome ? '' : '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        !isHome
          ? 'border-b border-[var(--color-line)] bg-[var(--color-paper)]'
          : scrolled || open
            ? 'border-b border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-paper)_88%,transparent)] backdrop-blur-md'
            : 'border-b border-transparent'
      }`}
    >
      <div className="shell flex h-[4.75rem] items-center justify-between md:h-[5.5rem]">
        <a
          href={isHome ? '#top' : '/'}
          className="flex items-center"
          aria-label="Curate Equity — home"
          onClick={() => setOpen(false)}
        >
          <img
            src="/brand/curate-equity-logo-dark.png"
            alt="Curate Equity"
            className="h-10 w-auto md:h-12"
            width={2136}
            height={1080}
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.sections.map((s) => (
            <a
              key={s.id}
              href={`${prefix}#${s.id}`}
              className="link-underline text-[0.82rem] font-medium tracking-wide text-[var(--color-ink)] transition-colors hover:text-[var(--color-navy)]"
            >
              {s.label}
            </a>
          ))}
          <a
            href={isHome ? nav.cta.href : `/#contact`}
            className="link-underline text-[0.82rem] font-semibold tracking-wide text-[var(--color-navy)] transition-colors hover:text-[var(--color-navy-soft)]"
          >
            {nav.cta.label}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 block h-px w-6 bg-[var(--color-ink)] transition-transform duration-300 ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-6 bg-[var(--color-ink)] transition-opacity duration-300 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-6 bg-[var(--color-ink)] transition-transform duration-300 ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-paper)] transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="shell flex flex-col py-6">
          {nav.sections.map((s) => (
            <a
              key={s.id}
              href={`${prefix}#${s.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-[var(--color-line-soft)] py-4 text-lg font-medium text-[var(--color-ink)]"
            >
              {s.label}
            </a>
          ))}
          <a
            href={isHome ? nav.cta.href : `/#contact`}
            onClick={() => setOpen(false)}
            className="arrow-link mt-6 justify-center rounded-full bg-[var(--color-navy)] px-6 py-4 text-base font-semibold text-[var(--color-paper)]"
          >
            {nav.cta.label}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
        </nav>
      </div>
    </header>
  )
}
