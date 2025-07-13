import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { montSerrat } from '@/components/export-font';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { siteUrl } from '@/constants/constant';
import PageTransitionLoader from '@/components/page-transistion';

export const metadata: Metadata = {
  title: 'Pratham Parikh (Portfolio)',
  description:
    'Pratham Parikh, a software engineer and developer specializing in full-stack web development and performance-focused design.',
  keywords: [
    'Pratham Parikh',
    'software engineer',
    'web developer',
    'portfolio',
    'React developer',
    'Next.js',
    'JavaScript',
  ],
  authors: [{ name: 'Pratham Parikh' }],
  creator: 'Pratham Parikh',
  openGraph: {
    title: 'Pratham Parikh - Full Stack Developer',
    description:
      'Explore projects, experience, and resume of Pratham Parikh, a passionate software developer.',
    url: siteUrl,
    siteName: 'Pratham Parikh Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratham Parikh - Developer Portfolio',
    description: 'Check out projects, skills, and experience by Pratham Parikh.',
    creator: '@pratham15541', // optional
  },
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montSerrat.className} antialiased flex flex-col h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />

          <main className="relative grow">
            <PageTransitionLoader />
            {children}
          </main>

          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
