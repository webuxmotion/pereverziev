import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>pereverziev andrii - Full Stack web-developer</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <span className={styles.logo}>_pereverziev-</span>
        <ul>
          <li>
            <a target="_blank" href="https://nextjs.org/docs/getting-started">Getting Started - DONE</a>
          </li>

          <li>
            <h2>Basic features</h2>
            <ul>
              <li>
                <a target="_blank" href="https://nextjs.org/docs/basic-features/pages">Pages - DONE</a>
              </li>
              <li>
                <a target="_blank" href="https://nextjs.org/docs/basic-features/data-fetching">Data Fetching - DONE</a>
              </li>
              <li>
                <a target="_blank" href="https://nextjs.org/docs/basic-features/built-in-css-support">Built-In CSS Support</a>
              </li>
            </ul>
          </li>

        </ul>
      </main>
    </div>
  )
}

export default Home;
