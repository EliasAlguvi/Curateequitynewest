import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { Eyebrow, Index, Section } from '@/components/ui'
import {
  approach,
  perspectives,
  philosophy,
  pillars,
  platforms,
  sectors,
  team,
} from '@/content'

const INK = 'text-[var(--color-ink)]'
const PAPER = 'text-[var(--color-paper)]'
const MUTED_ON_NAVY = 'text-[rgba(248,246,242,0.74)]'

/* -- Header row shared across light sections -------------------------- */
function SectionHead({
  eyebrow,
  index,
}: {
  eyebrow: string
  index: string
}) {
  return (
    <Reveal className="shell flex items-center justify-between">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Index n={index} />
    </Reveal>
  )
}

/* -- 02 · Philosophy -------------------------------------------------- */
export function Philosophy() {
  return (
    <Section id="philosophy" className="border-t border-[var(--color-line)]">
      <SectionHead eyebrow={philosophy.eyebrow} index="01" />
      <div className="shell mt-12 grid gap-y-10 md:mt-16 md:grid-cols-12 md:gap-x-10">
        <Reveal className="md:col-span-7">
          <h2 className={`display t-h2 max-w-[13ch] ${INK}`}>
            {philosophy.headlineLead}{' '}
            <span className="text-[var(--color-brass)]">
              {philosophy.headlineEmphasis}
            </span>
          </h2>
        </Reveal>
        <Reveal delay={120} className="md:col-span-5 md:pt-2">
          <div className="t-body max-w-[44ch] space-y-6 text-[var(--color-body)]">
            {philosophy.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

/* -- 03 · Pillars ----------------------------------------------------- */
export function Pillars() {
  return (
    <Section
      id="principles"
      className="border-t border-[var(--color-line)] bg-[var(--color-paper-deep)]"
    >
      <SectionHead eyebrow={pillars.eyebrow} index="02" />
      <Reveal className="shell mt-10">
        <h2 className={`display t-h2 max-w-[20ch] ${INK}`}>{pillars.title}</h2>
      </Reveal>
      <div className="shell mt-14 grid border-t border-[var(--color-line)] md:grid-cols-3">
        {pillars.items.map((it, i) => (
          <Reveal
            key={it.title}
            delay={i * 90}
            className="border-b border-[var(--color-line)] py-9 md:border-b-0 md:border-l md:px-10 md:py-10 md:first:border-l-0 md:first:pl-0"
          >
            <span className="eyebrow text-[var(--color-brass)]">
              {`0${i + 1}`}
            </span>
            <h3 className={`display t-h3 mt-6 ${INK}`}>{it.title}</h3>
            <p className="t-body mt-4 max-w-[34ch] text-[var(--color-body)]">
              {it.body}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* -- 04 · Approach (numbered editorial rows) -------------------------- */
export function Approach() {
  return (
    <Section id="approach" className="border-t border-[var(--color-line)]">
      <SectionHead eyebrow={approach.eyebrow} index="03" />
      <Reveal className="shell mt-10">
        <h2 className={`display t-h2 max-w-[16ch] ${INK}`}>{approach.title}</h2>
      </Reveal>
      <div className="shell mt-14 border-t border-[var(--color-line)]">
        {approach.items.map((it, i) => (
          <Reveal
            key={it.title}
            className="group grid gap-3 border-b border-[var(--color-line)] py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
          >
            <span className="eyebrow text-[var(--color-brass)] md:col-span-1">
              {`0${i + 1}`}
            </span>
            <h3
              className={`display t-h3 transition-transform duration-500 ease-out group-hover:translate-x-1 md:col-span-5 ${INK}`}
            >
              {it.title}
            </h3>
            <p className="t-body max-w-[52ch] text-[var(--color-body)] md:col-span-6">
              {it.body}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* -- 05 · Sectors (dark navy) ----------------------------------------- */
export function Sectors() {
  return (
    <Section id="sectors" className="bg-[var(--color-navy)]">
      <div className="shell flex items-center justify-between">
        <Reveal>
          <Eyebrow invert>{sectors.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal>
          <Index n="04" invert />
        </Reveal>
      </div>
      <Reveal className="shell mt-10">
        <h2 className={`display t-h2 max-w-[18ch] ${PAPER}`}>{sectors.title}</h2>
      </Reveal>
      <div className="shell mt-14 grid border-t border-[var(--color-line-invert)] md:grid-cols-3">
        {sectors.items.map((it, i) => (
          <Reveal
            key={it.title}
            delay={i * 90}
            className="border-b border-[var(--color-line-invert)] py-9 md:border-b-0 md:border-l md:border-[var(--color-line-invert)] md:px-10 md:py-10 md:first:border-l-0 md:first:pl-0"
          >
            <span className="eyebrow text-[var(--color-brass-soft)]">
              {`0${i + 1}`}
            </span>
            <h3 className={`display t-h3 mt-6 ${PAPER}`}>{it.title}</h3>
            <p className={`t-body mt-4 max-w-[34ch] ${MUTED_ON_NAVY}`}>
              {it.body}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* -- 06 · Platforms --------------------------------------------------- */
export function Platforms() {
  return (
    <Section id="platforms" className="border-t border-[var(--color-line)]">
      <SectionHead eyebrow={platforms.eyebrow} index="05" />
      <div className="shell mt-10 grid gap-y-6 md:grid-cols-12 md:items-end md:gap-x-10">
        <Reveal className="md:col-span-6">
          <h2 className={`display t-h2 ${INK}`}>{platforms.title}</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-5 md:col-start-8">
          <p className="t-lead max-w-[40ch] text-[var(--color-body)]">
            {platforms.intro}
          </p>
        </Reveal>
      </div>

      <div className="shell mt-16 border-t border-[var(--color-line)]">
        {platforms.items.map((it, i) => (
          <Reveal
            key={it.name}
            className="grid gap-4 border-b border-[var(--color-line)] py-10 md:grid-cols-12 md:items-baseline md:gap-8 md:py-12"
          >
            <span className="eyebrow text-[var(--color-brass)] md:col-span-1">
              {`P.0${i + 1}`}
            </span>
            <h3 className={`display t-h3 md:col-span-4 ${INK}`}>{it.name}</h3>
            <p className="t-body max-w-[54ch] text-[var(--color-body)] md:col-span-7">
              {it.body}
            </p>
          </Reveal>
        ))}
      </div>

      {/* The Next Platform — forward-looking closer */}
      <Reveal className="shell mt-12">
        <a
          href="#contact"
          className="group block bg-[var(--color-paper-deep)] p-10 transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--color-paper-deep)_82%,var(--color-brass))] md:p-14"
        >
          <div className="border-t border-[var(--color-brass)] pt-8">
            <span className="eyebrow text-[var(--color-brass)]">
              {platforms.next.label}
            </span>
            <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-end md:gap-10">
              <p
                className={`t-lead max-w-[42ch] md:col-span-9 ${INK}`}
              >
                {platforms.next.body}
              </p>
              <span
                className={`arrow-link text-[0.9rem] font-semibold tracking-wide md:col-span-3 md:justify-self-end ${INK}`}
              >
                Start a conversation
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </span>
            </div>
          </div>
        </a>
      </Reveal>
    </Section>
  )
}

/* -- Team helpers ----------------------------------------------------- */
function TeamPlaceholder({ index }: { index: number }) {
  return (
    <div className="flex h-full w-full items-center justify-center border border-[var(--color-line)] bg-[var(--color-paper-deep)]">
      <span className="text-[3.5rem] font-bold leading-none tracking-tight text-[var(--color-line)]">
        {`0${index + 1}`}
      </span>
    </div>
  )
}

const PHOTO_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG']

function TeamPhoto({ src, alt, index }: { src: string; alt: string; index: number }) {
  // `src` is a base path without extension (e.g. /team/thomas-karlsson).
  // Try common image extensions in order before falling back to the placeholder.
  const [extIndex, setExtIndex] = useState(0)
  if (extIndex >= PHOTO_EXTS.length) return <TeamPlaceholder index={index} />
  return (
    <img
      src={`${src}${PHOTO_EXTS[extIndex]}`}
      alt={alt}
      className="h-full w-full object-cover object-top grayscale"
      onError={() => setExtIndex((i) => i + 1)}
    />
  )
}

/* -- 07 · Team -------------------------------------------------------- */
export function Team() {
  return (
    <Section
      id="team"
      className="border-t border-[var(--color-line)] bg-[var(--color-paper-deep)]"
    >
      <SectionHead eyebrow={team.eyebrow} index="06" />
      <div className="shell mt-10 grid gap-y-8 md:grid-cols-12 md:items-end md:gap-x-10">
        <Reveal className="md:col-span-7">
          <h2 className={`display t-h2 max-w-[16ch] ${INK}`}>{team.title}</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-5">
          <p className="t-body max-w-[44ch] text-[var(--color-body)]">
            {team.intro}
          </p>
        </Reveal>
      </div>

      <div className="shell mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
        {team.members.map((m, i) => (
          <Reveal key={m.name} delay={i * 80}>
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-paper)]">
              {m.photo ? (
                <TeamPhoto src={m.photo} alt={m.name} index={i} />
              ) : (
                <TeamPlaceholder index={i} />
              )}
              <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-[var(--color-brass)]" />
            </div>
            <h3 className={`display mt-5 text-lg ${INK}`}>{m.name}</h3>
            <p className="mt-1 text-[0.85rem] font-medium uppercase tracking-wide text-[var(--color-brass)]">
              {m.role}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* -- 08 · Perspectives ------------------------------------------------ */
export function Perspectives() {
  return (
    <Section id="perspectives" className="border-t border-[var(--color-line)]">
      <SectionHead eyebrow={perspectives.eyebrow} index="07" />
      <Reveal className="shell mt-10">
        <h2 className={`display t-h3 max-w-[30ch] ${INK}`}>
          {perspectives.title}
        </h2>
      </Reveal>
      <div className="shell mt-14 border-t border-[var(--color-line)]">
        {perspectives.items.map((it) => (
          <Reveal
            key={it.title}
            className="group grid gap-2 border-b border-[var(--color-line)] py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-9"
          >
            <span className="eyebrow text-[var(--color-brass)] md:col-span-3">
              {it.kind}
            </span>
            <a
              href={`/perspectives/${it.slug}`}
              className={`display t-h3 transition-colors duration-300 group-hover:text-[var(--color-navy)] md:col-span-8 ${INK}`}
            >
              {it.title}
            </a>
            <span
              className="hidden self-center justify-self-end text-[var(--color-brass)] transition-transform duration-300 group-hover:translate-x-1 md:col-span-1 md:block"
              aria-hidden="true"
            >
              →
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
