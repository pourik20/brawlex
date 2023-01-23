import { createContext, useState, useContext } from 'react'

const PlayerContext = createContext()

export const PlayerContextProvider = ({ children }) => {
  const [player, setPlayer] = useState({})

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
