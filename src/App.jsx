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
import { BrightnessContrast, Pixelation, LensFlare, HueSaturation ,GodRays} from '@react-three/postprocessing'
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
          <EffectComposer>
            <First3dsection />
            {/* <BrightnessContrast
              brightness={0}
              contrast={0} 
            /> */}
            {/* <LensFlare /> */}
            <HueSaturation
              blendFunction={BlendFunction.SOFT_LIGHT} // blend mode
              hue={0} // hue in radians
              saturation={0} // saturation in radians
            />
            <GodRays
              sun={sunRef}
              blendFunction={BlendFunction.Screen} // The blend function of this effect.
              samples={60} // The number of samples per pixel.
              density={0.96} // The density of the light rays.
              decay={0.9} // An illumination decay factor.
              weight={0.4} // A light ray weight factor.
              exposure={0.6} // A constant attenuation coefficient.
              clampMax={1} // An upper bound for the saturation of the overall effect.
              width={Resizer.AUTO_SIZE} // Render width.
              height={Resizer.AUTO_SIZE} // Render height.
              kernelSize={KernelSize.SMALL} // The blur kernel size. Has no effect if blur is disabled.
              blur={true} // Whether the god rays should be blurred to reduce artifacts.
            />
            {/* <CustomEffect /> */}
          </EffectComposer>
        </Canvas>


      </div >
    </>
  )
}

export default App
