import { createContext, useState, useContext, useEffect } from 'react'

const BrawlContext = createContext()

export const BrawlContextProvider = ({ children }) => {
  const [icons, setIcons] = useState({})
  const [brawlers, setBrawlers] = useState([])

  useEffect(() => {
    const getIcons = async () => {
      const res = await fetch('https://api.brawlapi.com/v1/icons')
      const json = await res.json()
      setIcons(json)
    }
    const getBrawlers = async () => {
      const res = await fetch('https://api.brawlapi.com/v1/brawlers')
      const json = await res.json()
      setBrawlers(json.list)
    }
    getIcons()
    getBrawlers()
  }, [])

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
