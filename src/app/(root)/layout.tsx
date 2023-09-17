import Header from '@/components/layout/Header'
import { ClerkProvider } from "@clerk/nextjs";
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LeftSideBar from '@/components/layout/LeftSideBar'
import RightSideBar from '@/components/layout/RightSideBar'
import Footer from '@/components/layout/Footer'
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Tweethub",
  description: "Social media platform with next js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="flex flex-row">
            <LeftSideBar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSideBar />
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
