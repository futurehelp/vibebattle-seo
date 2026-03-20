import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

const GTM_ID = "GTM-P5ZK9MH4";
const GA_ID = "G-9LJWQEC6B7";

export const metadata: Metadata = {
  metadataBase: new URL("https://vibebattle.space"),
  title: {
    default: "Vibebattle | Live AI Coding Battles",
    template: "%s | Vibebattle",
  },
  description:
    "Vibebattle is a premium live competition format for AI-native builders, spectator voting, and ranked creative battles.",
  alternates: {
    canonical: "https://vibebattle.space",
  },
  openGraph: {
    title: "Vibebattle | Live AI Coding Battles",
    description:
      "A premium live competition format for AI-native builders, spectator voting, and ranked creative battles.",
    url: "https://vibebattle.space",
    siteName: "Vibebattle",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibebattle | Live AI Coding Battles",
    description:
      "A premium live competition format for AI-native builders, spectator voting, and ranked creative battles.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
