import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { TopStrip } from '@/components/top-strip'
import { SiteHeader } from '@/components/site-header'
import { Footer } from '@/components/footer'
import { CursorFollower } from '@/components/cursor-follower'
import { ServiceHero } from '@/components/services/service-hero'
import { ServiceAudience } from '@/components/services/service-audience'
import { ServiceBenefits } from '@/components/services/service-benefits'
import { ServiceCarouselSection } from '@/components/services/service-carousel-section'
import { ServiceModules } from '@/components/services/service-modules'
import { ServiceProcess } from '@/components/services/service-process'
import { ServiceCTA } from '@/components/services/service-cta'
import { SERVICES_DATA } from '@/constants/services-data'
import { SITE_IMAGES } from '@/constants/site-data'

interface ServicePageProps {
  params: Promise<{ service: string }>
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    service: slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: slug } = await params
  const service = SERVICES_DATA[slug]

  if (!service) {
    return {
      title: 'Service Not Found | Pratima R. Hegde',
      description: 'The requested career coaching service page could not be found.',
    }
  }

  const pageTitle = service.meta.title
  const pageDescription = service.meta.description
  const pageCanonical = `/services/${slug}`

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: service.meta.keywords,
    authors: [{ name: 'Pratima R. Hegde' }],
    creator: 'Pratima R. Hegde',
    publisher: 'Pratima R. Hegde',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageCanonical,
      siteName: 'Pratima R. Hegde | Career Coach & Life Skills Trainer',
      type: 'article',
      images: [
        {
          url: SITE_IMAGES.confident,
          width: 1200,
          height: 630,
          alt: `${service.title} - Pratima R. Hegde`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [SITE_IMAGES.confident],
      creator: '@pratimahegde',
    },
    alternates: {
      canonical: pageCanonical,
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: slug } = await params
  const service = SERVICES_DATA[slug]

  if (!service) {
    notFound()
  }

  return (
    <main className="trendbiz-site min-h-screen">
      <CursorFollower />
      <TopStrip />
      <SiteHeader />
      <ServiceHero service={service} />
      <ServiceAudience service={service} />
      <ServiceBenefits service={service} />
      <ServiceCarouselSection service={service} />
      <ServiceModules service={service} />
      <ServiceProcess service={service} />
      <ServiceCTA service={service} />
      <Footer />
    </main>
  )
}
