import { Reveal } from '@/components/reveal'
import { Eyebrow } from '@/components/ui'
import { hero } from '@/content'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="shell relative flex min-h-[92vh] flex-col justify-center pb-20 pt-36 md:pt-44">
        <Reveal>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal as="h1" delay={80} className="display t-hero mt-9 max-w-[15ch]">
          {hero.title}
        </Reveal>

        <div className="mt-14 grid gap-y-12 md:grid-cols-12 md:items-end md:gap-x-10">
          <Reveal delay={160} className="md:col-span-7 lg:col-span-6">
            <p className="t-lead max-w-[48ch] text-[var(--color-body)]">
              {hero.body}
            </p>
          </Reveal>

          <Reveal
            delay={240}
            className="md:col-span-4 md:col-start-9 lg:col-start-10"
          >
            <dl className="border-t border-[var(--color-line)]">
              {hero.meta.map((m) => (
                <div
                  key={m.k}
                  className="flex items-baseline justify-between gap-6 border-b border-[var(--color-line)] py-4"
                >
                  <dt className="eyebrow text-[var(--color-body)]">{m.k}</dt>
                  <dd className="text-right text-[0.95rem] font-medium text-[var(--color-ink)]">
                    {m.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
