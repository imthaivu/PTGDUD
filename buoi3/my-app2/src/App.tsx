import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState<Date>(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    // cleanup khi component unmount
    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <>
      <h1>Digital Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </>
  )
}

export default App
