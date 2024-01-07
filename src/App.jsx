import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componants/Home/Home'
import Manu from './componants/NavManu/Menu'
import { Outlet } from 'react-router-dom';
import Footer from './componants/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Manu />
      <Outlet />
      {/* <Footer/> */}
      
    </>
  )
}

export default App
