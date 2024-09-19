import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from '../Providers';
import React, { Suspense } from 'react';
import Head from 'next/head';
import Script from 'next/script'

import { GoogleTagManager } from '@next/third-parties/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Artiart',
  description: 'Welcome to Artiart UAE',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <GoogleTagManager gtmId="GTM-TPTTH6Q7" />
        <Head>
          <GoogleTagManager gtmId="GTM-TPTTH6Q7" />


          <Script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '734868487823383');
                fbq('track', 'PageView');
              `,
            }}
          />



          <Script
            dangerouslySetInnerHTML={{
              __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "n50ryrk9nl");
            `,
            }}
          />

          <Script type="application/ld+json" id="product-json-ld" strategy="afterInteractive">
            {JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "ICEBERG SMALL – SUCTION CUP",
              "image": "https://artiart.ae/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717486823%2F2guysProducts%2Fxpigeoh6xm5njvwk6kcu.jpg&w=3840&q=75",
              "description": "Buy ARTIART Unbreakable Tritan Transparent Plastic Iceberg No Fall Party Mug, Small (280 ml) online on artiart.ae at best prices",
              "brand": {
                "@type": "Brand",
                "name": "ArtiArt"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "4",
                "ratingCount": "15"
              }
            })}
          </Script>
          

          <Script type="application/ld+json" id="product-json-ld" strategy="afterInteractive">
            {JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "ICEBERG BIG SUCTION CUP",
              "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715267046%2F2guysProducts%2Fw1qyngaybzswhdxot6cv.jpg&w=3840&q=75",
              "description": "Buy ARTIART Unbreakable Tritan Transparent Plastic Iceberg No Fall Party Mug, Big (430 ml)online on artiart.ae at best prices.",
              "brand": {
                "@type": "Brand",
                "name": "ArtiArt"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "4",
                "ratingCount": "22"
              }
            })}
          </Script>


          <Script type="application/ld+json" id="product-json-ld" strategy="afterInteractive">
            {JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "IDEA CAFE SUCTION BOTTLE",
              "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715267694%2F2guysProducts%2Fhvj2d03rzrysvjn2oglh.jpg&w=3840&q=75",
              "description": "Shop the  spill-proof coffee cup! Our 340ml travel mug features patented technology to keep drinks hot or cold on-the-go.",
              "brand": {
                "@type": "Brand",
                "name": "ArtiArt"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "4",
                "ratingCount": "20"
              }
            })}
          </Script>









          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=734868487823383&ev=PageView&noscript=1"
            />
          </noscript>

          {/* End Meta Pixel Code */}
        </Head>
        <body className={inter.className}>
          <GoogleTagManager gtmId="GTM-TPTTH6Q7" />
          <Suspense>
            {children}
            <ToastContainer />
          </Suspense>
        </body>
      </html>
    </Providers>
  );
}
