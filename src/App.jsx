import { useState } from 'react'
import AppNavbar from './components/navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import First3dsection from './components/first3dsection';
import Clouds from './components/clouds'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main h-screen'
      //  style={{
      //   backgroundImage: `url(../images/premium_photo-1667689956673-8737a299aa8c.avif)`,
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat'
      // }}
      >
        {/* <AppNavbar/> */}
        <First3dsection />
        <Clouds />
      </div >
    </>
  )
}

export default App
