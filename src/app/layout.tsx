import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { SITE_INFO } from '@/constants/site-data'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: SITE_INFO.title,
  description: SITE_INFO.tagline,
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2806.jpg-bgSyaVR5t9ZT51v0ENw0yHOB7GR7z6.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2806.jpg-bgSyaVR5t9ZT51v0ENw0yHOB7GR7z6.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2806.jpg-bgSyaVR5t9ZT51v0ENw0yHOB7GR7z6.jpeg',
      },
    ],
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2806.jpg-bgSyaVR5t9ZT51v0ENw0yHOB7GR7z6.jpeg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#132d2c' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={jakarta.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${jakarta.className} antialiased`} suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
