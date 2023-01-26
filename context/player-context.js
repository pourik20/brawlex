import { createContext, useState, useContext } from 'react'
// import testPlayer from '../public/test_data/test-player.json'

const PlayerContext = createContext()

export const PlayerContextProvider = ({ children }) => {
  const [player, setPlayer] = useState({})
  // const [player, setPlayer] = useState(testPlayer)

  const updatePlayer = (newPlayer) => {
    setPlayer(newPlayer)
  }

  return (
    <PlayerContext.Provider value={{ player, updatePlayer }}>
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  const context = useContext(PlayerContext)
  if (context === undefined) {
    throw new Error(
      `usePlayerContext must be used within a PlayerContextProvider`
    )
  }
  return context
}
