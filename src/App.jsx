/* eslint-disable react/jsx-no-undef */
// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Catalog from './Components/Catalog'
import '../src/bootstrap.css'
import Footer from './Components/Footer'
import NotFound from './Components/NotFound'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Router>
        <footer>
          <Footer />
        </footer>
      </div>
      
  )
}

export default App
