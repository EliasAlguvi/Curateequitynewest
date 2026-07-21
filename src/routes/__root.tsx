import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

const DESCRIPTION =
  'Curate Equity is a Nordic investment house that builds and develops specialist investment platforms together with exceptional investment teams — combining entrepreneurial ambition with institutional capital, governance and execution.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Curate Equity — Building specialist investment platforms' },
      { name: 'description', content: DESCRIPTION },
      { name: 'theme-color', content: '#192b43' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Curate Equity — Building specialist investment platforms',
      },
      { property: 'og:description', content: DESCRIPTION },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap',
      },
      { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
      { rel: 'icon', href: '/brand/favicon.svg', type: 'image/svg+xml' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
