import type { Metadata } from "next";
import { business } from "@/data/business";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(business.seo.url),
  title: business.seo.title,
  description: business.seo.description,
  robots: { index: business.seo.indexable, follow: business.seo.indexable },
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
  openGraph: {
    type: "website",
    locale: business.seo.locale,
    siteName: business.name,
    title: business.seo.title,
    description: business.seo.description,
    url: business.seo.url,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
