import { useRecoilState } from 'recoil'
import { counterState } from '../state/counterAtom.js'

function CounterControls() {
  const [count, setCount] = useRecoilState(counterState)

  return (
    <section className="card">
      <h2>Component B</h2>
      <div className="actions">
        <button type="button" onClick={() => setCount(count - 1)}>
          Giam
        </button>
        <button type="button" onClick={() => setCount(count + 1)}>
          Tang
        </button>
      </div>
    </section>
  )
}

export default CounterControls
