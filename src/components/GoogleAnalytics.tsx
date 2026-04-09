import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

// Validate GA ID format to prevent script injection (must be G-XXXXXXXXXX or UA-XXXXXXXX-X)
const isValidGaId = (id: string) => /^(G-[A-Z0-9]+|UA-\d+-\d+)$/.test(id)

export default function GoogleAnalytics() {
  if (!GA_ID || !isValidGaId(GA_ID)) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  )
}
