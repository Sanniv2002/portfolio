import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sanniv - Backend Developer & Software Engineer',
  description: 'Experienced Full Stack Developer specializing in React, Node.js, and cloud technologies. View my portfolio, projects, and professional journey.',
  keywords: ['Full Stack Developer', 'Software Engineer', 'React Developer', 'Node.js Developer', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Sanniv' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.sanniv.tech',
    title: 'Sanniv - Backend Developer & Software Engineer',
    description: 'Experienced Full Stack Developer specializing in React, Node.js, and cloud technologies.',
    siteName: 'Sanniv Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanniv - Backend Developer',
    description: 'Full Stack Developer specializing in modern web technologies',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}