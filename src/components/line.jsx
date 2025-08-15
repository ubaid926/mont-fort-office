import { BoxGeometry } from "three"
import { Line } from '@react-three/drei';
import fragment from "../fragment";
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { EffectComposer } from '@react-three/postprocessing';
import { BrightnessContrast, Pixelation, LensFlare, HueSaturation, GodRays } from '@react-three/postprocessing'
import { Bloom } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'

function Lines({ positionVal, clr, linew, pos }) {
    const ref = useRef()
    const [state, setState] = useState(0)
    // const itemProps = state ? { ref: ref } : {};
    const Particles = () => {
        const positions = new Float32Array([
            0, 0, 1, // Point 1 (x, y, z)
            -1, 0, 0, // Point 2
            0, 1, 1, // Point 3
            // ... more points
        ])
        const points = [
            [1, 2, 1],
            [1, 8, 1],
            [1, -5, 1]

        ];
        if (pos) {
            // if (positionVal[1] < 5 && positionVal[1] > 0) {
            // for(let i=0; i<20; i++){
            //         ref.current.position.y += 0.01
            // console.log('plus', ref.current.position)
            // }}
            //  else {

            useFrame(() => {

                if (ref.current.position.y >= -5 && ref.current.position.y < 0) {
                    for (let i = 0; i < 50; i++) {
                        ref.current.position.y += 0.009
                        setState(ref.current.position.y)
                        // console.log('minus ---', ref.current.position.y)
                        if (ref.current.position.y == 38) {
                            // console.log('stop')
                            break;
                        }
                    }
                }
                //  else if (ref.current.position.y >= 5 && ref.current.position.y > 0) {
                //     for (let i = 0; i < 20; i++) {
                //         ref.current.position.y -= 0.009
                //         setState(ref.current.position.y)
                //         if (ref.current.position.y == -5) {
                //             console.log('stop')
                //             break;
                //         }
                //     }
                // }

            }
            )
        }

        if (state) {
            positionVal[1] = state
        }
        // }
        return (
            <>
                {/* <EffectComposer> */}
                <Line
                    points={points}
                    ref={ref}
                    lineWidth={linew}
                    position={positionVal}
                    fragmentShader={fragment}
                    opacity={1}
                    // transparent
                />
                {/* <Bloom

                        luminanceThreshold={0.9}

                        mipmapBlur intensity={1.0}
                    /> */}
                {/* <BrightnessContrast
                        brightness={0.5}
                        contrast={0}
                    /> */}
                {/* </EffectComposer> */}



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