import { useState } from 'react'
import { extend } from '@react-three/fiber';
import AppNavbar from './components/navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import First3dsection from './components/first3dsection';
import Clouds from './components/clouds'
import { Canvas } from '@react-three/fiber';
import Line from './components/line'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main h-screen w-full relative'
      //  style={{width:'1500px'}}
      //  style={{
      //   backgroundImage: `url(../images/premium_photo-1667689956673-8737a299aa8c.avif)`,
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat'
      // }}
      >
        {/* <Clouds  position={[0, -2, 0]} opacity={0.9} speed={0.1} width={50} depth={0.5}  segments={40} /> */}
        <AppNavbar />
        <First3dsection />

    

      </div >
    </>
  )
}

export default App
