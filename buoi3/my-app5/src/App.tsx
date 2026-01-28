import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  const [laps, setLaps] = useState<{ name: string; time: number }[]>([])

  // ✅ lưu intervalId (KHÔNG dùng state)
  const intervalRef = useRef<number | null>(null)

  // ✅ ref cho input
  const inputRef = useRef<HTMLInputElement | null>(null)

  const start = () => {
    if (running) return

    setRunning(true)
    intervalRef.current = window.setInterval(() => {
      setTime(prev => prev + 10)
    }, 10)
  }

  const pause = () => {
    setRunning(false)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const reset = () => {
    pause()
    setTime(0)
    setLaps([])
  }

  const addLap = () => {
    if (!inputRef.current) return

    setLaps(prev => [
      ...prev,
      { name: inputRef.current!.value, time }
    ])

    inputRef.current.value = ''
    inputRef.current.focus() // ✅ focus input
  }

  return (
    <>
      <h1>Stopwatch</h1>

      <h2>{(time / 1000).toFixed(2)} s</h2>

      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>

      <div>
        <input ref={inputRef} placeholder="Lap name" />
        <button onClick={addLap}>Add Lap</button>
      </div>

      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            {lap.name} – {(lap.time / 1000).toFixed(2)}s
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
