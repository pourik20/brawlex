import Navbar from '../components/navbar'
import { PlayerContextProvider } from '../context/player-context'
import { BrawlContextProvider } from '../context/brawl-context'

export default function Layout({ children }) {
  return (
    <>
      <BrawlContextProvider>
        <PlayerContextProvider>
          <Navbar />
          {children}
        </PlayerContextProvider>
      </BrawlContextProvider>
    </>
  )
}
