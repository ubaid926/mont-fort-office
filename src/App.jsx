import { useState } from 'react'
import { extend } from '@react-three/fiber';
import AppNavbar from './components/navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import First3dsection from './components/first3dsection';
import Clouds from './components/clouds'
import { Canvas } from '@react-three/fiber';
import Line from './components/line'
import * as THREE from 'three';
import { ShaderMaterial } from 'three';
import vertex from './vertex';
import fragment from './fragment';
import { EffectComposer } from '@react-three/postprocessing';
import CustomEffect from './components/customeff';
import { BrightnessContrast, Pixelation, LensFlare, HueSaturation, GodRays } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div className='main  w-full relative h-lvw'
      //  style={{width:'1500px'}}
      //  style={{
      //   backgroundImage: `url(../images/premium_photo-1667689956673-8737a299aa8c.avif)`,
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat'
      // }}
      >
        <AppNavbar />
        <Canvas camera={{ position: [9, -2, 2]}} >
          <EffectComposer>
            <First3dsection />
          </EffectComposer>
        </Canvas>


      </div >
    </>
  )
}

export default App
