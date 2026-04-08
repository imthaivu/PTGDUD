import './App.css'
import {useRecoilState} from 'recoil'
import {themeState} from '../src/state/theme.js'
function App() {
  const [theme, setTheme] =  useRecoilState(themeState)

  return (
    < >
      <section id="center" className={theme} >
        
       
        <button
          onClick={() => setTheme('dark-theme')}
        >
          toggle dark
        </button>
        <button
          onClick={() => setTheme('light-theme')}
        >
          toggle light
        </button>
        <span>Theme is {theme}</span>
      </section>


      

    
    </>
  )
}

export default App
