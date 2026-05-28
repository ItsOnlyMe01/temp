import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "FollowProperty — Track Any Property in India Like an Investment",
  description:
    "Smart real-estate tracking and insights for Gurgaon property buyers and owners. Engineered for complete transparency.",

  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth light">
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-navy font-sans antialiased selection:bg-brand-primary selection:text-white">

        {children}

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>

      </body>
    </html>
  );
}