import Head from 'next/head'
import IndexStyles from '../styles/indexStyles'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <IndexStyles />
      <div className={"container"}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={"main"}>
          <h1 className={"title"}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={"description"}>
            Get started by clicking the link above:
          </p>
          <Link href="/start">
            <a style={{fontSize: "3em"}}>
              Start Page
            </a>          
          </Link>
        </main>

        <footer className={"footer"}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={"logo"} />
          </a>
        </footer>
      </div>
    </>
  )
}
