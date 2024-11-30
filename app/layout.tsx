import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'GloboLead - AI-Powered Lead Management Platform',
  description: 'Transform your lead management with AI-powered intelligence. Automate qualification, enhance customer experience, and boost conversions.',
  keywords: ['lead management', 'AI', 'automation', 'CRM', 'sales', 'customer experience'],
  authors: [{ name: 'GloboLead Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://globolead.ai',
    title: 'GloboLead - AI-Powered Lead Management Platform',
    description: 'Transform your lead management with AI-powered intelligence',
    siteName: 'GloboLead',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GloboLead - AI-Powered Lead Management Platform',
    description: 'Transform your lead management with AI-powered intelligence',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}