import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import BookTable from './components/BookTable'
import MenuList from './components/MenuList'

import Contact from './pages/Contact'
import Home from './pages/Home'
import Menu from './pages/Menu'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Header/>
      <div className='container mx-auto p-4'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/booktable' element={<BookTable/>} />
      </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
