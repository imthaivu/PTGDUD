import { useRecoilState } from 'recoil'
import { counterState } from '../state/counterAtom.js'

function CounterControls() {
  const [count, setCount] = useRecoilState(counterState)
  return (
      <div >
        <button onClick={()=>setCount(count-1)}> giam</button>
        <button onClick={()=>setCount(count+1)}> tang</button>
      </div>
  )
}

export default CounterControls
