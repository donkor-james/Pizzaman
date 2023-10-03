import { useState } from 'react'
import viteLogo from '/vite.svg'
import Services from './Components/Branches/Branches'
import './App.css'
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Branches from './Components/Branches/Branches'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home'
import BranchMap from './Components/BranchMap/BranchMap'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
        <Routes>
          <Route exact path='/branches' element={<Branches/>}/>
        </Routes>

        <Routes>
          <Route exact path='/map' element={<BranchMap/>}/>
        </Routes>
        <Routes>
          <Route exact path='/contact' element={<Contact /> } />
        </Routes>
        
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </Router>
  )
}

export default App
