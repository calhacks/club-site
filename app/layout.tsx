import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Karla, Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-mono",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-karla",
});

export const metadata: Metadata = {
  title: "Hackathons at Berkeley",
  description: "Cal Hacks is the world's largest collegiate hackathon hosted at UC Berkeley, fostering a culture of hacking, entrepreneurship, and social good via the empowerment of technology.",
  openGraph: {
    title: "Hackathons at Berkeley",
    description: "Cal Hacks is the world's largest collegiate hackathon hosted at UC Berkeley, fostering a culture of hacking, entrepreneurship, and social good via the empowerment of technology.",
    images: ["https://hackberkeley.org/og.png"],
  },
  icons: {
    icon: "/branding/baby-ddoski.svg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@calhacks",
    creator: "@calhacks",
    images: ["https://hackberkeley.org/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} ${karla.variable} font-sans antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen">
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
