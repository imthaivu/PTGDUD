import { useEffect, useReducer } from 'react'
import './App.css'

type User = {
  id: number
  name: string
  email: string
}

type State = {
  status: 'idle' | 'loading' | 'success' | 'error'
  users: User[]
  error: string | null
}

type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: User[] }
  | { type: 'FETCH_ERROR'; payload: string }

const initialState: State = {
  status: 'idle',
  users: [],
  error: null
}

// ✅ reducer = pure function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_START':
      return {
        status: 'loading',
        users: [],
        error: null
      }

    case 'FETCH_SUCCESS':
      return {
        status: 'success',
        users: action.payload,
        error: null
      }

    case 'FETCH_ERROR':
      return {
        status: 'error',
        users: [],
        error: action.payload
      }

    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchUsers = async () => {
    dispatch({ type: 'FETCH_START' })

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!res.ok) throw new Error('Fetch failed')

      const data: User[] = await res.json()
      dispatch({ type: 'FETCH_SUCCESS', payload: data })
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: (err as Error).message
      })
    }
  }

  useEffect(() => {
    // load lần đầu
    fetchUsers()
  }, [])

  return (
    <>
      <h1>Fetch Users</h1>

      {state.status === 'idle' && <p>Idle</p>}

      {state.status === 'loading' && <p>Loading...</p>}

      {state.status === 'error' && (
        <>
          <p>Error: {state.error}</p>
          <button onClick={fetchUsers}>Retry</button>
        </>
      )}

      {state.status === 'success' && (
        <ul>
          {state.users.map(user => (
            <li key={user.id}>
              {user.name} – {user.email}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
