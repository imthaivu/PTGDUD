import { useCallback, useState, memo } from 'react'
import './App.css'

type Todo = {
  id: number
  text: string
  completed: boolean
}

const TodoItem = memo(
  ({
    todo,
    onToggle,
    onDelete
  }: {
    todo: Todo
    onToggle: (id: number) => void
    onDelete: (id: number) => void
  }) => {
    console.log('render item', todo.id)

    return (
      <li>
        <span
          onClick={() => onToggle(todo.id)}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer'
          }}
        >
          {todo.text}
        </span>
        <button onClick={() => onDelete(todo.id)}>❌</button>
      </li>
    )
  }
)

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = () => {
    if (!input) return

    setTodos(prev => [
      ...prev,
      { id: Date.now(), text: input, completed: false }
    ])
    setInput('')
  }

  // ✅ useCallback để không tạo function mới mỗi render
  const onToggle = useCallback((id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }, [])

  const onDelete = useCallback((id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }, [])

  return (
    <>
      <h1>Todo Performance</h1>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  )
}

export default App
