import type { ReactNode } from 'react'

/** Letterspaced label with a short leading brass rule — the editorial eyebrow. */
export function Eyebrow({
  children,
  invert = false,
}: {
  children: ReactNode
  invert?: boolean
}) {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        aria-hidden="true"
        className="h-px w-8 bg-[var(--color-brass)]"
      />
      <span
        className={`eyebrow ${
          invert ? 'text-[var(--color-brass-soft)]' : 'text-[var(--color-brass)]'
        }`}
      >
        {children}
      </span>
    </span>
  )
}

/** A section wrapper providing the page's vertical rhythm and scroll anchoring. */
export function Section({
  id,
  children,
  className = '',
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-24 md:py-32 lg:py-40 ${className}`}
    >
      {children}
    </section>
  )
}

/** Small monospaced-feeling section index, e.g. "02 / 08". */
export function Index({
  n,
  invert = false,
}: {
  n: string
  invert?: boolean
}) {
  return (
    <span
      aria-hidden="true"
      className={`text-[0.72rem] font-semibold tracking-[0.22em] ${
        invert ? 'text-[var(--color-brass-soft)]' : 'text-[var(--color-brass)]'
      }`}
    >
      {n} <span className={invert ? 'text-[var(--color-line-invert)]' : 'text-[var(--color-line)]'}>/ 07</span>
    </span>
  )
}
