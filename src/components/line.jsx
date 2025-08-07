import { BoxGeometry } from "three"
import { Line } from '@react-three/drei';
import fragment from "../fragment";

function Lines({ positionVal, clr }) {
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
                <Line points={points} color={clr ? clr : 'red'} lineWidth={1} position={positionVal} shadowSide={[0, 11, 12]} fragmentShader={fragment} />
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