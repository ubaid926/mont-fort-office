import { Canvas } from '@react-three/fiber';
import { CameraControls, OrbitControls, useHelper, useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Clouds from './clouds'
import { useRef } from 'react';
import { RectAreaLightHelper } from 'three/examples/jsm/Addons.js';
import { HemisphereLightHelper } from 'three';
import Lines from './line';
import { cameraPosition } from 'three/tsl';
function First3dsection() {
    function MyPointLight() {
        const hemisphereLightRef = useRef();
        // Attach the PointLightHelper to the light using useHelper
        useHelper(hemisphereLightRef, HemisphereLightHelper, 1); // The '1' is the size of the helper

        return (
            <hemisphereLight ref={hemisphereLightRef} args={[0xffffff, 0x000000, 1]} />
        );
    }
    function Model() {
        // const gltf = useLoader(GLTFLoader, '../models/3_mountain/scene.gltf');
        const { scene } = useLoader(GLTFLoader, '../models/snowy_mountain_terrain/scene.gltf');
        // const texture = useTexture('../images/images.jfif');
        // const texture = useLoader(TextureLoader,'../images/snow.jpg');
        // console.log(texture)
        scene.traverse((child) => {
            if (child) {
                // child.material = new THREE.MeshStandardMaterial({ map: texture });
                // child.material.map = texture;
                // child.material.needsUpdate = true;  
                console.log(child)
            }
        })
        return <primitive  object={scene} />
    }
    
    return (
        <>
            {/* <img src='../images/snow.jpg'/> */}
            {/* <Canvas camera={{ position: [9, 2, 2] }} > */}
            <Canvas camera={{ position: [9, -2, 2] }}  >
                <ambientLight intensity={1} position={[5, 5, 5]} />
                <directionalLight position={[5, 5, 5]} intensity={3} />
                {/* <pointLight  position={[10, 10, 10]} intensity={1} color="red" /> */}
              
                <Model />
                {/* <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh> */}
                <Lines clr='' positionVal={[-4,5,2]}/>
                <Lines clr='' positionVal={[-9,5,0.5]}/>
                <Lines clr='' positionVal={[-4,5,3]}/>
                <Lines clr='' positionVal={[-6,5,-4]}/>
                <Lines clr='' positionVal={[-4,5,-3]}/>
                <Lines clr='' positionVal={[-4,5,-1]}/>
                <Lines clr='' positionVal={[-4,5,1]}/>
                <Lines clr='' positionVal={[-7,5,3]}/>
                <Lines clr='' positionVal={[-5,5,3]}/>
                <Lines clr='' positionVal={[-8,5,0]}/>
                <Lines clr='' positionVal={[-7,5,-2]}/>
                <Lines clr='' positionVal={[-6,5,-3]}/>
                <Lines clr='' positionVal={[-7,5,1]}/>
                <OrbitControls onChange={()=>{
                    console.log(CameraControls)
                }}
                     minDistance={8} maxDistance={8} 
                     minPolarAngle={Math.PI / 3}
                        maxPolarAngle={Math.PI / 3}
                    // minAzimuthAngle={Math.PI / 3}
                    // maxAzimuthAngle={Math.PI / 4}
                    rotateSpeed={0.3}
                />
                <Clouds  position={[0,2, -2]} opacity={0.2} speed={0.9} width={500} depth={1.1}  segments={500} />
            </Canvas>
        </>
    );
}

export default First3dsection