import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="">
      <Head>
        <title className="">Daily Joe Biden</title>
        <meta name="title" content="Daily Joe Biden" />
        <meta name="description" content="Daily Joe Biden Quotes" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dailyjoebiden.vercel.app" />
        <meta property="og:title" content="Daily Joe Biden" />
        <meta property="og:description" content="Daily Joe Biden Quotes" />
        <meta
          property="og:image"
          content="https://dailyjoebiden.vercel.app/images/joeog.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dailyjoebiden.vercel.app"
        />
        <meta property="twitter:title" content="Daily Joe Biden" />
        <meta property="twitter:description" content="Daily Joe Biden Quotes" />
        <meta
          property="twitter:image"
          content="https://dailyjoebiden.vercel.app/images/joeog.png"
        />

        <body className="">
          <Main />
          <NextScript />
        </body>
      </Head>
    </Html>
  );
}
