import { useState } from 'react'
import { ThemeContext } from './ThemeContext'
import type { Theme } from './ThemeContext'

import Layout from './Layout'
import './App.css'

function App() {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <Layout />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
