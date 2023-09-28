import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Router>
       
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
