import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Babydaddy Records!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Get your beat today!!!<br><br><br><br>call 0728479523" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
