import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | RizzCorps.",
    default: "RizzCorps.",
  },
  description: "Inovation Your Website with RizzCorps.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/logo-favicon-bgtransparent.png",
        href: "/assets/logo-favicon-bgtransparent.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/next.svg" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
