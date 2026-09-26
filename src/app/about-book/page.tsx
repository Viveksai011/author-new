import type { Metadata } from 'next'
import { TopStrip } from '@/components/top-strip'
import { SiteHeader } from '@/components/site-header'
import { Footer } from '@/components/footer'
import { CursorFollower } from '@/components/cursor-follower'
import { BookHeroSection } from '@/components/about-book/book-hero-section'
import { BookNarrativeSection } from '@/components/about-book/book-narrative-section'
import { BookTargetAudienceSection } from '@/components/about-book/book-target-audience-section'
import { BookChaptersSection } from '@/components/about-book/book-chapters-section'
import { BookPurchaseSection } from '@/components/about-book/book-purchase-section'
import { BOOK_DETAILS } from '@/constants/site-data'

export const metadata: Metadata = {
  title: BOOK_DETAILS.meta.title,
  description: BOOK_DETAILS.meta.description,
  keywords: BOOK_DETAILS.meta.keywords,
  openGraph: {
    title: BOOK_DETAILS.meta.title,
    description: BOOK_DETAILS.meta.description,
    type: 'article',
    url: '/about-book',
  },
  alternates: {
    canonical: '/about-book',
  },
}

export default function AboutBookPage() {
  return (
    <main className="trendbiz-site min-h-screen">
      <CursorFollower />
      <TopStrip />
      <SiteHeader />
      <BookHeroSection />
      <BookNarrativeSection />
      <BookTargetAudienceSection />
      <BookChaptersSection />
      <BookPurchaseSection />
      <Footer />
    </main>
  )
}
