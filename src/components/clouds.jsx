import { BufferGeometry, MeshLambertMaterial, BufferAttribute, Mesh, MeshStandardMaterial } from "three"
import { DoubleSide } from 'three'
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';
import { useRef, useState } from "react";
import { Fog, FogExp2 } from 'three';
import { texture } from "three/tsl";
extend({ Fog, FogExp2 });

// const RotatingCircle = () => {
//     useFrame(() => {
//         if (circleRef.current) {
//             circleRef.current.rotation.x += 0.02
//             circleRef.current.
//                 console.log(circleRef.current.position.y)
//             if (Math.ceil(circleRef.current.position.y) == 4) {
//                 circleRef.current.position.y -= 0.02
//             } else {
//                 circleRef.current.position.y += 0.02
//             }
//         }
//     })
//     return (
//         <mesh ref={circleRef} >
//             <circleGeometry />
//             <meshLambertMaterial side={THREE.DoubleSide} map={colorMap} />
//         </mesh>
//     )
// }
function Clouds() {

    const [rot, setRot] = useState(Math.random() * 300)

    let arr = []
    for (let i = 0; i < 90; i++) {
        let num = i
        arr.push(

            [Math.random() * 1000 - 500, Math.random() * 1000 - 500, Math.random() * 1000 - 100]

        )
    }
    let meshRef = useRef(null)
    function Custom() {
        const texture = useTexture('../images/images (1).jfif');
        // console.log(arr)
        useFrame(({ clock }) => {
            if (meshRef.current) {
                for (let i = 0; i < arr.length; i++) {
                    //   if(meshRef==i){
                    // i.current.rotation.z += Math.random() * 0.12
                    // setRot((prev) => prev + clock.getDelta() * 0.01)
                }
                // console.log(rot)
                // meshRef.current.rotation.z += clock.getDelta() * 0.12
                // meshRef.current.position.y = Math.random() * 1000 - 500
                // meshRef.current.position.z = Math.random() * 1000 - 100
            }
        })
        // console.log(rot)
        return (
            <>
                {/* {console.log(arr)} */}
                {arr.length > 80 && arr.map((v, i) =>
                    <mesh ref={meshRef} key={i} position={v} rotateZ={rot}>
                        <hemisphereLight intensity={1} color={[0xd6e6ff, 0xa38c08]} />
                        <planeGeometry scale={[2, 2, 2]} >
                            <meshLambertMaterial transparent={true} opacity={0.5} map={texture} />
                        </planeGeometry>
                        {/* <Html>
                                <h1 style={{ color: 'white' }}>{v}</h1>
                            </Html> */}
                    </mesh >
                )}
            </>
        )
    }
    const particlecount = 5000
    const posArray = new Float32Array(particlecount * 3)
    for (let i = 0; i < particlecount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 16
    }
    return (
        <>
            <Canvas  >
                {/* <ambientLight intensity={4.5} /> */}
                {/* <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh> */}
                {/* <fogExp2 attach="fog" args={['#cccccc', 0.05]} /> */}
                {/* <fogExp2 attach="fog" args={['#a74aff', 1.5, 10, 50]} /> */}
                {/* <Custom /> */}
                <mesh>
                    <bufferGeometry >
                        <BufferAttribute
                            attach='attributes-position'
                            array={posArray}
                            count={3}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <pointsMaterial map={texture} transparent alphaTest={0.5} size={0.5} />
                </mesh>
            </Canvas>
        </>
    )
}
// const Comp = () => {
//     const positions = new Float32Array([
//         1, 0, 0,
//         0, 1, 0,
//         -1, 0, 0,
//         0, -1, 0
//     ])

//     const normals = new Float32Array([
//         0, 0, 1,
//         0, 0, 1,
//         0, 0, 1,
//         0, 0, 1,
//     ])

//     const colors = new Float32Array([
//         0, 1, 1, 1,
//         1, 0, 1, 1,
//         1, 1, 0, 1,
//         1, 1, 1, 1,
//     ])

//     const indices = new Uint16Array([
//         0, 1, 3,
//         2, 3, 1,
//     ])
//     return (
//         <Canvas>
//             <mesh>
//                 <BufferGeometry>
//                     <BufferAttribute
//                         attach='attributes-position'
//                         array={positions}
//                         count={positions.length / 3}
//                         itemSize={3}
//                     />
//                     <BufferAttribute
//                         attach='attributes-color'
//                         array={colors}
//                         count={colors.length / 3}
//                         itemSize={3}
//                     />
//                     <BufferAttribute
//                         attach='attributes-normal'
//                         array={normals}
//                         count={normals.length / 3}
//                         itemSize={3}
//                     />
//                     <BufferAttribute
//                         attach="index"
//                         array={indices}
//                         count={indices.length}
//                         itemSize={1}
//                     />
//                 </BufferGeometry>
//                 <MeshStandardMaterial
//                     vertexColors
//                     side={DoubleSide}
//                 />
//             </mesh>
//         </Canvas>
//     )
// }
// function Clouds() {
//     return (

//          <>
//          <Canvas>
//             <Mesh>
//               <BufferGeometry >

//               </BufferGeometry>
//               <MeshLambertMaterial />
//             </Mesh>
//             </Canvas>
//         </>
//     )
// }
export default Clouds