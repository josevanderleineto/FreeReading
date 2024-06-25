/* eslint-disable react/jsx-no-undef */
// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Catalog from './Components/Catalog'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Router>
      </div>
      
  )
}

export default App
