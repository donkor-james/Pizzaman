import { useState } from 'react'
import viteLogo from '/vite.svg'
import Services from './Components/Branches/Branches'
import './App.css'
import NavBar from './Components/NavBar/Navbar'
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Branches from './Components/Branches/Branches'
import Contact from './Pages/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBar/> */}
      <Router>
        <Routes>
          <Route exact path='/branches' element={<Branches/>}/>
        </Routes>
        <Routes>
          <Route exact path='/contact' element={<Contact />}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
