import { useRecoilValue } from 'recoil'
import { counterState } from '../state/counterAtom.js'

function CounterDisplay() {
  const count = useRecoilValue(counterState)

  return (
    <section className="card">
      <h2>Component A</h2>
      <p>Count hiện tại: {count}</p>
    </section>
  )
}

export default CounterDisplay
