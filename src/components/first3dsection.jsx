import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Fog, FogExp2 } from 'three';
// extend({ Fog, FogExp2 });
function First3dsection() {

    function Model() {
        // const gltf = useLoader(GLTFLoader, '../models/3_mountain/scene.gltf');
        const { scene } = useLoader(GLTFLoader, '../models/snowy_mountain_terrain/scene.gltf');
        // const texture = useTexture('../images/images.jfif');
        // const texture = useLoader(TextureLoader,'../images/snow.jpg');
        // console.log(texture)
        scene.traverse((child) => {
            if (child.isMesh) {
                // child.material = new THREE.MeshStandardMaterial({ map: texture });
                // child.material.map = texture;
                // child.material.needsUpdate = true;  
                // console.log(child.material.map)
            }
        })
        return <primitive object={scene} />
    }
    return (
        <>
            {/* <img src='../images/snow.jpg'/> */}
            <Canvas camera={{ position: [9, 3, 2] }}>
                <ambientLight intensity={1} position={[5, 5, 5]} />
                <directionalLight position={[5, 5, 5]} intensity={5} />
                <Model />
                {/* <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh> */}
                <OrbitControls minDistance={8} maxDistance={8} minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 3}
                    // minAzimuthAngle={Math.PI / 3}
                    // maxAzimuthAngle={Math.PI / 4}
                />
            </Canvas>
        </>
    );
}

export default First3dsection