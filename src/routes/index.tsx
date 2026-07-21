import { createFileRoute } from '@tanstack/react-router'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import {
  Approach,
  Perspectives,
  Philosophy,
  Pillars,
  Platforms,
  Sectors,
  Team,
} from '@/components/sections'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Philosophy />
        <Pillars />
        <Approach />
        <Sectors />
        <Platforms />
        <Team />
        <Perspectives />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
