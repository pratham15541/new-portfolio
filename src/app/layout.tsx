import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { montSerrat } from '@/components/export-font';
import PageWrapper from './page-wrapper';

export const metadata: Metadata = {
  title: 'Pratham Parikh (Portfolio)',
  description:
    'Pratham Parikh, a software engineer and developer specializing in web development and design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${montSerrat.className} antialiased flex flex-col h-screen `}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="grow ">
            <PageWrapper>{children}</PageWrapper>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
