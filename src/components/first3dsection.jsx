import { Canvas, useThree } from '@react-three/fiber';
import { CameraControls, OrbitControls, useHelper, useTexture } from '@react-three/drei';
import { useLoader, extend } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Clouds from './clouds'
import { useRef, useState } from 'react';
import { RectAreaLightHelper } from 'three/examples/jsm/Addons.js';
import { HemisphereLightHelper } from 'three';
import Lines from './line';
import { cameraPosition } from 'three/tsl';
import { Fog, FogExp2 } from 'three';
import vertex from '../vertex';
import fragment from '../fragment';
import { Physics } from '@react-three/cannon';
import { EffectComposer } from '@react-three/postprocessing';
import { BrightnessContrast, Pixelation, LensFlare, HueSaturation, GodRays } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'
import { Bloom } from '@react-three/postprocessing'
extend({ Fog, FogExp2 });
function First3dsection() {
    const [far, setFar] = useState(10)
    let linePos = false
    const [lineWidth, setLineWidth] = useState(0)
    const { camera, viewport } = useThree()

    let lastScrollY = 0;
    // console.log(window.scrollY, 'scroll')

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;
        // console.log(far,'far')
        if (
            // window.scrollY <= 300 &&
            currentScrollY > lastScrollY ) {
            // if (far) {
            //     if (far < 20) {
            //         setFar(far + 0.1)
            // console.log('current', currentScrollY)
            console.log('last')
            console.log(currentScrollY)
            console.log(lastScrollY)
            // }
            // else {
            //     if (far > 10) {
            //         setFar(far - 0.1)
            //     }
            // }

        }
        // }
        else  if (currentScrollY < lastScrollY
            // && currentScrollY < 300
            // && far > 10
        ) {

            // setFar(far - 0.1)
            console.log('minus', far)
        }
        lastScrollY = currentScrollY;
        
    }
    )
    function Model() {
        const { scene } = useLoader(GLTFLoader, '../models/snowy_mountain_terrain/scene.gltf');
        // scene.traverse((child) => {
        //     if (child) {
        //         child.material
        //     }
        // })
        return <primitive object={scene} />
    }

    if (lineWidth) {
        linePos = true
    }
    return (
        <>
            <ambientLight intensity={1} position={[5, 5, 5]} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Model />
            {lineWidth &&
                <>
                    <EffectComposer>
                        <Lines clr='' positionVal={[-4, -5, 2]} linew={lineWidth} pos={linePos} />
                        <Lines clr='' positionVal={[-9, -5, 0.5]} linew={lineWidth} pos={linePos} />
                        <Lines clr='' positionVal={[-4, -5, 3]} linew={lineWidth} pos={linePos} />
                        <Lines clr='' positionVal={[-6, -5, -4]} linew={lineWidth} pos={linePos} />
                        <Lines clr='' positionVal={[-4, -5, -3]} linew={lineWidth} pos={linePos} />
                        <Lines clr='' positionVal={[-7, -5, -1]} linew={lineWidth} pos={linePos} />
                        <Lines clr='' positionVal={[-4, -5, 1]} linew={lineWidth} pos={linePos} />
                        <Lines clr='' positionVal={[-7, -5, 3]} linew={lineWidth} pos={linePos} />
                        <Lines clr='' positionVal={[-5, -5, 3]} linew={lineWidth} pos={linePos} />
                        <Lines clr='' positionVal={[-8, -5, 0]} linew={lineWidth} pos={linePos} />
                        <Lines clr='' positionVal={[-7, -5, -2]} linew={lineWidth} pos={linePos} />
                        <Lines clr='' positionVal={[-6, -5, -3]} linew={lineWidth} pos={linePos} />
                        <Lines clr='' positionVal={[-7, -5, 1]} linew={lineWidth} pos={linePos} />
                        <Lines clr='' positionVal={[-7, -5, 1]} linew={lineWidth} pos={linePos} />
                        <Bloom
                            intensity={0.1} 
                            blurPass={undefined} 
                            kernelSize={KernelSize.LARGE} 
                            luminanceThreshold={0.4} 
                            luminanceSmoothing={0.025} 
                            mipmapBlur={true} 
                            resolutionX={Resolution.AUTO_SIZE}
                            resolutionY={Resolution.AUTO_SIZE} 
                        />
                    </EffectComposer>
                </>
            }
            <OrbitControls onChange={() => {
                if (
                    (camera.position.x < 6.806021618585722 && camera.position.z < -5.355190914182591) &&
                    (camera.position.x > 3.856138425454241 && camera.position.z > -7.754366282536264
                    )) {
                    setLineWidth(1)
                }
                else {
                    if (lineWidth) {
                        setLineWidth(0)
                    }
                }
                if (
                    camera.position.x < 3.2737044196112337 && camera.position.z > -8.017659220309744) {
                }
            }}
                minDistance={!far ? 10 : far}
                maxDistance={!far ? 10 : far}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 3}
                minAzimuthAngle={Math.PI / 3}
                maxAzimuthAngle={Math.PI / 4}
                rotateSpeed={0.3}
                enableZoom={false}
            />
         
            <Clouds scale={[1,1,8]} position={lineWidth ? [4, 3, 8] : [2, 1, 4]} opacity={lineWidth ? 0.04 : 0.3} speed={0.4} width={window.innerWidth / window.innerHeight} depth={lineWidth ? 0.9 : 2} segments={lineWidth ? 50 : 100} />
      
            {/* { */}
                {/* <> */}
            {/* condition */}
                {/* <Clouds position={[6, 1, -2] } scale={[1,1,11]} opacity={ 0.5} speed={0.4} width={window.innerWidth / window.innerHeight} depth={  2} segments={ 100} /> */}
            {/* <Clouds position={[6, -1, 0] } opacity={ 0.5} speed={0.4} width={window.innerWidth / window.innerHeight} depth={  2} segments={ 100} />
            <Clouds position={[6, -1, 5] } opacity={ 0.5} speed={0.4} width={window.innerWidth / window.innerHeight} depth={  2} segments={ 100} /> */}
            {/* </> */}
{/* } */}
        </>
    );
}

export default First3dsection