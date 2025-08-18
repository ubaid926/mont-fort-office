import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { CameraControls, OrbitControls, useHelper, useTexture } from '@react-three/drei';
import { useLoader, extend } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Clouds from './clouds'
import { useRef, useState, useMemo } from 'react';
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
    const [cameraPos, setCameraPos] = useState(false)
    const [far, setFar] = useState(10)
    let linePos = false
    const [lineWidth, setLineWidth] = useState(0)
    const { camera, viewport } = useThree()

    let lastScrollY = 0;
    useFrame(() => {
        if (cameraPos && camera.position.x < 5.560083201835774 && camera.position.x > -8.383379965915095 && camera.position.z < -6.026728049467684 && camera.position.z > -10.102960091440439) {
            // for (let i=0; i<80; i++){
            camera.position.z -= 0.09
            if (camera.position.y > 4) {
                camera.position.y -= 0.09
            }
            //  camera.position.x-=0.01
            // console.log('working', camera.position.y)
            //   }
        }
    })
    // console.log(window.scrollY, 'scroll')

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;
        // console.log(far,'far')
        if (
            // window.scrollY <= 300 &&
            currentScrollY > lastScrollY) {
            // if (far) {
            //     if (far < 20) {
            //         setFar(far + 0.1)
            // console.log('current', currentScrollY)
            // console.log('last')
            // console.log(currentScrollY)
            // console.log(lastScrollY)
            // }
            // else {
            //     if (far > 10) {
            //         setFar(far - 0.1)
            //     }
            // }

        }
        // }
        else if (currentScrollY < lastScrollY
            // && currentScrollY < 300
            // && far > 10
        ) {

            // setFar(far - 0.1)
            // console.log('minus', far)
        }
        lastScrollY = currentScrollY;

    }
    )
    const Model = function () {
        const { scene } = useLoader(GLTFLoader, '../models/snowy_mountain_terrain/scene.gltf');
        // scene.traverse((child) => {
        //     if (child) {
        //         child.material
        //     }
        // })
        return <primitive object={scene} />
    }

    // const Model=useMemo(()=>ModelComp() ,[]) 

    if (lineWidth) {
        linePos = true
    }

    return (
        <>
            <ambientLight intensity={lineWidth ? 2 : 3} position={[5, 5, 5]} />
            {!lineWidth && <directionalLight position={[5, 5, 5]} intensity={1} />
            }
            <Model />
         {!lineWidth &&   <Clouds scale={lineWidth?[1,1,1]:[1,1,8]} position={lineWidth?[4, 3, 1] : [4, 0, 0]} opacity={lineWidth ? 0.01 : 0.6} speed={lineWidth? 0 :0.4} width={window.innerWidth / window.innerHeight} depth={lineWidth ? 0.9 : 2} segments={lineWidth ? 50 : 100} />
          }  {lineWidth &&
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
                        {/* <Clouds scale={[1,1,11]} position={[0, 2, 0] }  speed={0.4} width={100}  segments={ 10} /> */}
                    </EffectComposer>
                </>
            }
            <OrbitControls onChange={() => {
                // console.log(camera.position)
                //  setCameraPos(cameraPos-0.1) 
                if
                    (camera.position.x < 6.806021618585722 && camera.position.z < -5.355190914182591)
                // &&
                // (camera.position.x > 3.856138425454241 && camera.position.z > -7.754366282536264)
                {
                    setLineWidth(1)
                    // setCameraPos(() => 0.01)
                    // setCameraPos(0.7)
                    if (camera.position.x < -0.631227735925021) {
                        setCameraPos(true)
                        // for (let i=0; i<20; i++){
                        // camera.position.z -= cameraPos
                        // camera.position.set(camera.position.x, camera.position.y, camera.position.z-cameraPos );
                        // console.log('working')


                        // }
                        // camera.position.x -= cameraPos
                    }
                    // camera.zoo=cameraPos
                }

                else if (camera.position.x > 6.806021618585722 && camera.position.z > -8.355190914182591) {
                    //     console.log("working")
                    setLineWidth(0)
                    setCameraPos(false)
                    //     setCameraPos(10)
                }
                else if (camera.position.x < 6.806021618585722) {
                    if (cameraPos) {
                        // setCameraPos(0)
                    }
                }
            }}
                minDistance={10}
                maxDistance={50}
                minPolarAngle={cameraPos ? Math.PI / 3 : Math.PI / 3}
                maxPolarAngle={cameraPos ? Math.PI / 2.5 : Math.PI / 3}
                // minAzimuthAngle={Math.PI / 3}
                // maxAzimuthAngle={Math.PI / 1}
                rotateSpeed={0.3}
                enableZoom={false}
                // enablePan={false}
                enableDamping={false}


            />



            {/* { */}
            {/* <> */}
            {/* condition */}
            {/* <Clouds  scale={[1,1,11]} position={lineWidth? [0, 0, 4]:[-3, 1, -2] } opacity={ lineWidth ? 0.01 : 0.3} speed={lineWidth? 0 :0.4} width={window.innerWidth / window.innerHeight} depth={  2} segments={ 100} /> */}
            {/* {/* <Clouds position={[6, -1, 0] } opacity={ 0.5} speed={0.4} width={window.innerWidth / window.innerHeight} depth={  2} segments={ 100} /> */}
            <Clouds position={lineWidth?[6, 0, 5]:[6, -1, 5] } opacity={ lineWidth?0.5: 0.5} speed={0.4} width={window.innerWidth / window.innerHeight} depth={lineWidth?1:2} segments={ 100} /> 
            {/* </> */}
            {/* } */}
        </>
    );
}

export default First3dsection