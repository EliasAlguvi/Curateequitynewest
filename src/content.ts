/**
 * Curate Equity — site content.
 * All copy lives here so the page components stay presentational.
 */

export const CONTACT_EMAIL = 'partners@curateequity.com'

export const nav = {
  sections: [
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'approach', label: 'Approach' },
    { id: 'sectors', label: 'Sectors' },
    { id: 'platforms', label: 'Platforms' },
    { id: 'team', label: 'Team' },
    { id: 'perspectives', label: 'Perspectives' },
  ],
  cta: { label: 'Partner with us', href: '#contact' },
}

export const hero = {
  eyebrow: 'Nordic Investment House',
  title: 'Building specialist investment platforms.',
  body: 'Curate Equity builds and develops specialist investment platforms together with exceptional investment teams. We combine entrepreneurial ambition with institutional capital, governance and execution.',
  cta: { label: 'Partner with us', href: '#contact' },
  meta: [
    { k: 'Base', v: 'The Nordics' },
    { k: 'Focus', v: 'Specialist platforms' },
    { k: 'Horizon', v: 'Multi-decade' },
  ],
}

export const philosophy = {
  eyebrow: 'Philosophy',
  headlineLead: 'The best investment firms are built.',
  headlineEmphasis: 'Not assembled.',
  paragraphs: [
    'Great investment performance starts with exceptional people.',
    'But building a lasting investment firm requires far more than investment expertise. Capital. Governance. Fund structures. Operations. Distribution. Alignment.',
    'Curate exists to build that foundation—allowing investment teams to focus on what they do best: investing.',
  ],
}

export const pillars = {
  eyebrow: 'What we bring',
  title: 'Institutional quality. Entrepreneurial mindset.',
  items: [
    {
      title: 'Capital',
      body: 'Access to long-term capital from family offices, entrepreneurs and institutional investors.',
    },
    {
      title: 'Platform',
      body: 'Institutional infrastructure covering fund structuring, governance, compliance and operational execution.',
    },
    {
      title: 'Partnership',
      body: 'Long-term alignment through shared ownership, common incentives and enduring relationships.',
    },
  ],
}

export const approach = {
  eyebrow: 'Approach',
  title: 'Building firms that last.',
  items: [
    {
      title: 'Investment Platforms',
      body: 'We build investment businesses—not just individual funds.',
    },
    {
      title: 'Institutional Foundations',
      body: 'Governance, compliance, reporting and operational infrastructure designed to scale.',
    },
    {
      title: 'Capital Partnerships',
      body: 'Connecting differentiated investment strategies with long-term capital partners.',
    },
    {
      title: 'Long-term Value Creation',
      body: 'Building investment firms designed to compound value over decades.',
    },
  ],
}

export const sectors = {
  eyebrow: 'Where we invest',
  title: 'Backing exceptional teams in specialist markets.',
  items: [
    {
      title: 'Niche Private Equity',
      body: 'Partnering with specialist managers where deep expertise creates sustainable competitive advantages.',
    },
    {
      title: 'Energy Transition',
      body: 'Investing in infrastructure and real assets accelerating the transition to a more resilient energy system.',
    },
    {
      title: 'Future Platforms',
      body: 'Supporting the next generation of investment strategies addressing structural shifts across industries.',
    },
  ],
}

export const platforms = {
  eyebrow: 'Platforms',
  title: 'Investment Platforms.',
  intro: 'Building specialist investment platforms with exceptional teams.',
  items: [
    {
      name: 'byWiT',
      body: 'A private investment company with a long-term focus on building businesses and investment platforms across multiple sectors.',
      href: 'https://bywit.se/',
    },
    {
      name: 'Oryx Capital',
      body: 'A specialist investment platform focused on complex and distressed investment opportunities.',
      href: 'https://oryxcapital.se/',
    },
    {
      name: 'Södra Vindbolaget',
      body: 'Building the next chapter of renewable energy investing.',
      href: 'https://www.sodravindbolaget.se',
    },
  ],
  next: {
    label: 'The Next Platform',
    body: 'We continue to partner with exceptional investment teams to build the next generation of specialist investment firms.',
  },
}

export const team = {
  eyebrow: 'Team',
  title: 'Experienced investors. Entrepreneurs. Builders.',
  intro:
    'Curate brings together investment professionals, entrepreneurs and operators with extensive experience of building companies, funds and long-term partnerships.',
  members: [
    {
      name: 'Thomas Karlsson',
      role: 'Founding Partner',
      photo: '/team/thomas-karlsson',
      linkedin: 'https://www.linkedin.com/in/thomas-karlsson-8560285/',
    },
    {
      name: 'Elias Jacobson',
      role: 'Founding Partner',
      photo: '/team/elias-jacobson',
      linkedin: 'https://www.linkedin.com/in/elias-jacobson-65420686/',
    },
    {
      name: 'Frida Lönnqvist',
      role: 'Board Member',
      photo: '/team/frida-lonnqvist',
      linkedin: 'https://www.linkedin.com/in/frida-l%C3%B6nnqvist/',
    },
    {
      name: 'Nalle Söderström',
      role: 'Board Member',
      photo: '/team/nalle-soderstrom',
      linkedin: 'https://www.linkedin.com/in/nalles/',
    },
    {
      name: 'Ulf Söderström',
      role: 'Board Member',
      photo: '/team/ulf-soderstrom',
      linkedin: 'https://www.linkedin.com/in/ulf-s%C3%B6derstr%C3%B6m-a6a6852b/',
    },
  ],
}

export const perspectives = {
  eyebrow: 'Perspectives',
  title:
    'Perspectives on investing, partnerships and long-term value creation.',
  items: [
    {
      kind: 'Perspective',
      title: 'Why specialist managers continue to outperform.',
      slug: 'specialist-managers',
    },
    {
      kind: 'Platform',
      title: 'Building institutional investment platforms from the ground up.',
      slug: 'institutional-platforms',
    },
    {
      kind: 'Announcement',
      title: 'Introducing Södra Vindbolaget.',
      slug: 'sodra-vindbolaget',
    },
  ],
}

export const contact = {
  eyebrow: 'Contact',
  title: 'Building something exceptional starts with the right partner.',
  body: 'Whether you are launching a new investment strategy or scaling an established platform, we would welcome the opportunity to start a conversation.',
  cta: { label: 'Get in touch', href: `mailto:${CONTACT_EMAIL}` },
}

/* ------------------------------------------------------------------ *
 * Perspective articles — full content
 * ------------------------------------------------------------------ */

export const perspectiveArticles: Record<
  string,
  {
    kind: string
    title: string
    body: string[]
    quote?: { text: string; attribution: string }
  }
> = {
  'specialist-managers': {
    kind: 'Perspective',
    title: 'Why specialist managers continue to outperform.',
    body: [
      'In an increasingly complex investment landscape, deep domain expertise is no longer just a competitive advantage—it is a necessity. While generalist strategies often face saturated markets, specialist managers continue to outperform because they possess the granular knowledge required to identify underappreciated assets and drive operational improvements.',
      'Whether navigating the technical nuances of the energy transition or structuring complex distressed investments, specialist teams can act with higher conviction and precision.',
      'At Curate Equity, we believe the future of alpha generation belongs to these focused experts, which is why we partner with them to provide the institutional foundation needed to scale their specific edge.',
    ],
  },
  'institutional-platforms': {
    kind: 'Platform',
    title: 'Building institutional investment platforms from the ground up.',
    body: [
      'Great investment performance starts with exceptional people, but building a lasting investment firm requires far more than just investment expertise. It requires robust governance, operational excellence, and access to long-term capital.',
      'Building an institutional-grade platform from day one allows investment teams to focus entirely on their core competence: investing.',
      'At Curate Equity, we bridge the gap between entrepreneurial ambition and institutional requirements. By providing comprehensive infrastructure—covering fund structuring, compliance, and capital partnerships—we build investment businesses designed to compound value over decades, rather than simply assembling individual funds.',
    ],
  },
  'sodra-vindbolaget': {
    kind: 'Announcement',
    title: 'Introducing Södra Vindbolaget.',
    body: [
      'We are proud to announce the launch of Södra Vindbolaget, a new specialist investment platform developed in partnership with Curate Equity. The first two chapters of wind power focused on building and scaling infrastructure. Now, Södra Vindbolaget is writing the next phase: creating greater value from the wind power that already exists.',
      'Utilizing a proprietary software and data platform, Södra Vindbolaget identifies existing wind assets ready for modernization. Through targeted early-stage investments in Refit & Repowering, intelligent control systems, and battery storage (BESS), the team will optimize and extend the life of these critical assets.',
      'Built on Curate Equity\'s institutional foundation, Södra Vindbolaget represents our commitment to backing exceptional teams addressing structural shifts across industries.',
    ],
    quote: {
      text: 'The first two chapters of wind energy were about installation and scale. The third chapter is about intelligence, optimization, and extracting structural value from the infrastructure we\'ve already built.',
      attribution: 'Elias Jacobson, Founding Partner',
    },
  },
}
