import { BufferGeometry, MeshLambertMaterial, BufferAttribute, Mesh, MeshStandardMaterial } from "three"
import { DoubleSide } from 'three'
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { useRef } from "react";

//  const RotatingCircle = () => {
//     useFrame(() => {
//       if (circleRef.current) {
//         circleRef.current.rotation.x += 0.02
// circleRef.current.
// console.log(circleRef.current.position.y)
// if (Math.ceil(circleRef.current.position.y) == 4) {
//   circleRef.current.position.y -= 0.02
// } else {
//   circleRef.current.position.y += 0.02
// }
//       }
//     })
//     return (
//       <mesh ref={circleRef} >
//         <circleGeometry />
//         <meshLambertMaterial side={THREE.DoubleSide} map={colorMap} />
//       </mesh>
//     )
//   }
function Clouds() {
    function Custom() {
        // const meshRef = useRef()
        // let arr = []
        // const texture = useTexture('../images/images (1).jfif');
        // for (let i = 0; i < 90; i++) {
        //     arr.push(<mesh ref={meshRef} key={i} position={ } >
        //         <planeGeometry scale={[2, 2, 2]}>
        //             <meshStandardMaterial map={texture} />
        //         </planeGeometry>
        //     </mesh>)
        //     // console.log(arr)
        // }
        // useFrame(() => {
        //     if (meshRef.current) {
        //         meshRef.current.position.x = Math.random() * 1000 - 500
        //         meshRef.current.position.y = Math.random() * 1000 - 500
        //         meshRef.current.position.z = Math.random() * 1000 - 100
        //     }
        // })
        return (

            <>
                {/* {arr.map((v, i) =>
                    v
                )} */}
            </>


        )
    }
    return (
        <>
            <Canvas>

                <Custom />

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