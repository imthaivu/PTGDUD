import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Button() {
  const context = useContext(ThemeContext)

  if (!context) return null

  const { theme, toggleTheme } = context

  return (
    <button onClick={toggleTheme}>
      Theme: {theme}
    </button>
  )
}

export default Button
