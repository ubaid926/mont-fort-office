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
extend({ Fog, FogExp2 });
function First3dsection() {
    const [lineWidth, setLineWidth] = useState(0)
    const { camera, viewport } = useThree()
    // function MyPointLight() {
    //     const hemisphereLightRef = useRef();
    //     useHelper(hemisphereLightRef, HemisphereLightHelper, 1); 
    //     return (
    //         <hemisphereLight ref={hemisphereLightRef} args={[0xffffff, 0x000000, 1]} />
    //     );
    // }
    function Model() {
        // const gltf = useLoader(GLTFLoader, '../models/3_mountain/scene.gltf');
        const { scene } = useLoader(GLTFLoader, '../models/snowy_mountain_terrain/scene.gltf');
        // const texture = useTexture('../images/images.jfif');
        // const texture = useLoader(TextureLoader,'../images/snow.jpg');
        // console.log(texture)
        scene.traverse((child) => {
            if (child) {
                child.material
                // child.material = new THREE.MeshStandardMaterial({ map: texture });
                // child.material.map = texture;
                // child.material.needsUpdate = true;  
                // console.log(child)
            }
        })
        return <primitive object={scene} />
    }
    return (
        <>
            {/* <mesh scale={[viewport.width, viewport.height, 1]} position={[0, 0, -1]} >
                <shaderMaterial vertexShader={vertex} fragmentShader={fragment}  attach="material" />
                 <planeGeometry args={[1, 1]}  />
            </mesh> */}
            {/* <img src='../images/snow.jpg'/> */}
            {/* <Canvas camera={{ position: [9, 2, 2] }} > */}

            <ambientLight intensity={1} position={[5, 5, 5]} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            {/* <pointLight  position={[10, 10, 10]} intensity={1} color="red" /> */}

            <Model />
            {/* <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh> */}
            <Lines clr='red' positionVal={[-4, 5, 2]} linew={lineWidth} />
            <Lines clr='' positionVal={[-9, 5, 0.5]} linew={lineWidth} />
            <Lines clr='' positionVal={[-4, 5, 3]} linew={lineWidth} />
            <Lines clr='' positionVal={[-6, 5, -4]} linew={lineWidth} />
            <Lines clr='' positionVal={[-4, 5, -3]} linew={lineWidth} />
            <Lines clr='' positionVal={[-4, 5, -1]} linew={lineWidth} />
            <Lines clr='' positionVal={[-4, 5, 1]} linew={lineWidth} />
            <Lines clr='' positionVal={[-7, 5, 3]} linew={lineWidth} />
            <Lines clr='' positionVal={[-5, 5, 3]} linew={lineWidth} />
            <Lines clr='' positionVal={[-8, 5, 0]} linew={lineWidth} />
            <Lines clr='' positionVal={[-7, 5, -2]} linew={lineWidth} />
            <Lines clr='' positionVal={[-6, 5, -3]} linew={lineWidth} />
            <Lines clr='' positionVal={[-7, 5, 1]} linew={lineWidth} />
            <OrbitControls onChange={() => {
                if ((camera.position.x < 5.916367563079498 && camera.position.z < -3.6050790363791965) && (camera.position.x > 4.333242551233696 && camera.position.z > -5.4058310177231474
                )) {
                    setLineWidth(1)
                    
                }
                // else if(
                //      ( camera.position.x > 5.916367563079498 && camera.position.z > -3.6050790363791965) ){
                //     if(lineWidth==1){
                //     setLineWidth(0)}
                // }
                // else if(camera.position.x > 4.333242551233696 && camera.position.z > -5.4058310177231474   
                // ){
                //     setLineWidth(0)
                // }
                else {
                    if (lineWidth) {
                        setLineWidth(0)
                    }
                }
                //   console.log(camera.position)

            }}
                // minDistance={8} maxDistance={8}
                // minPolarAngle={Math.PI / 3}
                // maxPolarAngle={Math.PI / 3}
                // minAzimuthAngle={Math.PI / 3}
                // maxAzimuthAngle={Math.PI / 4}
                rotateSpeed={0.3}
            />
            {/* <fog attach="fog" args={['#ffffff', 0.001, 1, 15]} /> */}
            {/* <fogExp2 attach="fog" args={['#ffffff', 0.03]} /> */}
            {/* {!lineWidth &&
                <Clouds position={[0, 2, 2]} opacity={0.05} speed={0.9} width={200} depth={0.1} segments={100} />
            } */}

        </>
    );
}

export default First3dsection