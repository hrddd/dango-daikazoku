import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DangoDaikazoku from '../components/organisms/DangoDaikazoku/';
import { ViewerContextProvider } from '../contexts/viewerContext';
import { EditorContextProvider } from '../contexts/editorContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>DangoDaikazoku</h1>
        <ViewerContextProvider>
          <EditorContextProvider>
            <DangoDaikazoku />
          </EditorContextProvider>
        </ViewerContextProvider>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
