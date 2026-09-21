import { createFileRoute } from '@tanstack/react-router'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { perspectiveArticles } from '@/content'

export const Route = createFileRoute('/perspectives/sodra-vindbolaget')({
  component: SodraVindbolagetPage,
})

type Article = (typeof perspectiveArticles)[string]

function SodraVindbolagetPage() {
  const article = perspectiveArticles['sodra-vindbolaget']
  return (
    <>
      <SiteNav />
      <PerspectiveLayout article={article} />
      <SiteFooter />
    </>
  )
}

function PerspectiveLayout({ article }: { article: Article }) {
  return (
    <main className="min-h-screen bg-[var(--color-paper)]">
      <div className="bg-[var(--color-navy)] pb-20 pt-40 md:pb-28 md:pt-52">
        <div className="shell">
          <p className="eyebrow text-[var(--color-brass-soft)]">{article.kind}</p>
          <h1 className="display t-h2 mt-4 max-w-[22ch] text-[var(--color-paper)]">
            {article.title}
          </h1>
        </div>
      </div>
      <div className="shell py-20 md:py-28">
        <div className="mx-auto max-w-[68ch]">
          {article.quote && (
            <blockquote className="mb-14 border-l-2 border-[var(--color-brass)] pl-8">
              <p className="t-lead italic text-[var(--color-ink)]">"{article.quote.text}"</p>
              <footer className="mt-4 text-[0.9rem] font-medium text-[var(--color-brass)]">
                — {article.quote.attribution}
              </footer>
            </blockquote>
          )}
          <div className="t-body space-y-7 text-[var(--color-body)]">
            {article.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
