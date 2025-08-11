import { BoxGeometry } from "three"
import { Line } from '@react-three/drei';
import fragment from "../fragment";
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Box({ linew, positionVal }) {
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 12, 0] }));
    const points = [
        [1, 2, 1],
        [1, 8, 1],
        [1, -5, 1]

    ];
    // const rotate=function(){
    //     api.position.set(0,2,0)
    // }
    // window.addEventListener('click',rotate)
    // rotate()
       useFrame(()=>{
        api.position.y+=0.1
//    console.log('working')
    })
    return (
        <mesh ref={ref}>

            {/* <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" /> */}
            <Line
                points={points}
                ref={ref}
                // color={clr ? clr : 'red'}
                lineWidth={linew}
                position={positionVal}
                fragmentShader={fragment}
            />
        </mesh>
    );
}


function Plane() {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
    return (
        <mesh ref={ref}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="lightgray" />
        </mesh>
    );
}
function Lines({ positionVal, clr, linew }) {
    const [refBox, api] = useBox(() => ({ mass: 10, position: positionVal }));
 
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
    const [state, setState] = useState(false)
    const itemProps = state ? { ref: ref } : {};
    const Particles = () => {
        const positions = new Float32Array([
            0, 0, 1, // Point 1 (x, y, z)
            -1, 0, 0, // Point 2
            0, 1, 1, // Point 3
            // ... more points
        ])


        // api.position.set(0,0,0)
        // console.log(api.position)
        // window.addEventListener('click', () => {
        // })
        //     useEffect(()=>{

        // },[])
        return (
            <>
                {/* <points>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            count={positions.length / 3} // Number of points
                            itemSize={3} // x, y, z
                            array={positions}
                        />
                    </bufferGeometry>
                    <pointsMaterial size={0.05} color="hotpink" transparent />
                </points> */}
                {/* <mesh>
                <boxGeometry args={[10,10,10]}/>
                <meshBasicMaterial color={'white'} />
                </mesh> */}
                {/* <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
                <Box linew={linew} positionVal={positionVal} />
                {/* <mesh ref={ref} > */}

                {/* <Plane /> */}
                {/* <Plane/> */}
                {/* </mesh> */}
            </>
        )
    }
    return (
        <>
            <Particles />
        </>
    )
}
export default Lines