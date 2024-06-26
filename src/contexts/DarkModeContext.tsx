import { createContext, useContext, useEffect } from 'react'
import useLocalStore from '../hooks/useLocalStore'

interface DarkModeState {
  isDarkMode: boolean
  toggleDarkMode: () => void
}
const defaultDarkMode: DarkModeState = {
  isDarkMode: false,
  toggleDarkMode: () => {}
}

const DarkModeContext = createContext(defaultDarkMode)

const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStore(
    window.matchMedia('prefers-color-scheme: dark').matches,
    'isDarkMode'
  )
  useEffect(() => {
    document?.querySelector('html')?.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>
}

const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error('DarkModeContext was used outside of context provider')
  }
  return context
}
export { useDarkMode }

export default DarkModeProvider
