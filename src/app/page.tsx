import { CursorFollower } from '@/components/cursor-follower'
import { TopStrip } from '@/components/top-strip'
import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { FeatureCardsSection } from '@/components/feature-cards-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { VideoBand } from '@/components/video-band'
import { WhyCoachSection } from '@/components/why-coach-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { StatsSection } from '@/components/stats-section'
import { BookFeatureSection } from '@/components/book-feature-section'
import { NewsletterSection } from '@/components/newsletter-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="trendbiz-site">
      <CursorFollower />
      <TopStrip />
      <SiteHeader />
      <HeroSection />
      <FeatureCardsSection />
      <AboutSection />
      <ServicesSection />
      <VideoBand />
      <WhyCoachSection />
      <TestimonialsSection />
      <StatsSection />
      <BookFeatureSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
