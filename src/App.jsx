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
      <div className='main h-screen w-full relative'
      //  style={{width:'1500px'}}
      //  style={{
      //   backgroundImage: `url(../images/premium_photo-1667689956673-8737a299aa8c.avif)`,
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat'
      // }}
      >
        {/* <Clouds  position={[0, -2, 0]} opacity={0.9} speed={0.1} width={50} depth={0.5}  segments={40} /> */}
        {/* <AppNavbar /> */}
        <Canvas camera={{ position: [9, -2, 2] }} >
       
          {/* <EffectComposer> */}
            <First3dsection />
          {/* <BrightnessContrast
              brightness={0}
              contrast={0} 
            /> */}
          {/* <LensFlare /> */}
          {/* <HueSaturation
              blendFunction={BlendFunction.SOFT_LIGHT} 
              hue={0}
              saturation={0} 
            /> */}
          {/* <GodRays
              sun={sunRef}
              blendFunction={BlendFunction.Screen} 
              samples={60} 
              density={0.96} 
              decay={0.9} 
              weight={0.4} 
              exposure={0.6}// A cons
              clampMax={1} 
              width={Resize}
              height={Resizer.AUTO_SIZE} 
              kernelSize={KernelSize.SMALL} 
              blur={true} 
            /> */}
          {/* <CustomEffect /> */}
          {/* </EffectComposer> */}
        </Canvas>


      </div >
    </>
  )
}

export default App
