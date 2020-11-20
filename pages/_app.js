import Head from 'next/head'
import '../styles/globals.css'

import '../styles/BaseLayout.scss'

import '../components/shared/Footer/Footer.scss'
import '../components/shared/Hero/Hero.scss'
import '../components/shared/Logo/Logo.scss'
import '../components/shared/Navbar/Navbar.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>pereverziev andrii - Full Stack web-developer</title>
      <link rel="icon" href="/favicon.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
