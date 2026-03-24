import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { FloatingQuestionButton } from "@/components/floating-question-button";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://selfwebsite-ten.vercel.app"),
  title: "David Lianqiao Xiao | Senior C++ Engineer | Autonomous Systems",
  description:
    "Portfolio for David Lianqiao Xiao, senior C++ engineer focused on autonomous vehicles, V2X, embedded systems, Databricks-based analysis, and applied AI.",
  openGraph: {
    title: "David Lianqiao Xiao | Senior C++ Engineer | Autonomous Systems",
    description:
      "Portfolio featuring autonomous vehicle engineering, applied AI work, technical experience, and contact details.",
    url: "https://selfwebsite-ten.vercel.app",
    siteName: "David Lianqiao Xiao Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Lianqiao Xiao | Senior C++ Engineer | Autonomous Systems",
    description:
      "Autonomous systems engineering, C++, embedded development, and applied AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
        {children}
        <FloatingQuestionButton />
      </body>
    </html>
  );
}
