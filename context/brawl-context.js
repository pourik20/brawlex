import { createContext, useState, useContext, useEffect } from 'react'
import brawlerList from '../public/data/brawlers.json'
import iconList from '../public/data/icons.json'

const BrawlContext = createContext()

export const BrawlContextProvider = ({ children }) => {
  const [icons, setIcons] = useState(iconList)
  const [brawlers, setBrawlers] = useState(brawlerList.list)

  return (
    <BrawlContext.Provider value={{ icons, brawlers }}>
      {children}
    </BrawlContext.Provider>
  )
}

export const useBrawl = () => {
  const context = useContext(BrawlContext)
  if (context === undefined) {
    throw new Error(
      `useBrawlContext must be used within a BrawlContextProvider`
    )
  }
  return context
}
