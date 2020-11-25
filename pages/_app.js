import Head from 'next/head'
import '../styles/globals.css'

import '../styles/BaseLayout.scss'

import '../pages/cards/CardsPage.scss'

import '../components/shared/Footer/Footer.scss'
import '../components/shared/Hero/Hero.scss'
import '../components/shared/Logo/Logo.scss'
import '../components/shared/Navbar/Navbar.scss'
import '../components/shared/Spinner/Spinner.scss'
import '../components/shared/Errors/Errors.scss'
import '../components/shared/Message/Message.scss'
import '../components/shared/Button/Button.scss'
import '../components/shared/Card/Card.scss'

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
