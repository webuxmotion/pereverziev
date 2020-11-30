
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Head from 'next/head'
import '../styles/globals.css'

import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>pereverziev andrii - Full Stack web-developer</title>
      <link rel="icon" href="/favicon.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
    <ToastContainer />
  </>
}

export default MyApp
