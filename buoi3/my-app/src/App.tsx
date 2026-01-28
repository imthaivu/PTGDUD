import { useState } from 'react'
import './App.css'

type InputEvent = {
  target: {
    name: string
    value: string
  }
}

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: ''
  })

  const handleChange = (e: InputEvent) => {
    const { name, value } = e.target

    setUser({
      ...user,
      [name]: value
    })
  }

  return (
    <>
      <h1>Form thông tin người dùng</h1>

      <input name="name" value={user.name} onChange={handleChange} />
      <input name="email" value={user.email} onChange={handleChange} />
      <input name="age" value={user.age} onChange={handleChange} />

      

    </>
  )
}

export default App
