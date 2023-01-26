import Navbar from '../components/navbar'
import { PlayerContextProvider } from '../context/player-context'
import { BrawlContextProvider } from '../context/brawl-context'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <BrawlContextProvider>
        <PlayerContextProvider>
          <Navbar />
          {children}
        </PlayerContextProvider>
      </BrawlContextProvider>
    </>
  )
}
