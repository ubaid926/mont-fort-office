import { useMemo, useRef } from 'react';
// import { CustomPass } from '@react-three/postprocessing';
import { ShaderMaterial } from 'three';
import vertex from '../vertex';
import fragment from '../fragment';

function CustomEffect() {
    const passRef = useRef();

    // Create a custom shader material
    const shaderMaterial = useMemo(() => {
        return new ShaderMaterial({
            vertexShader: vertex,
            fragmentShader: fragment,
            uniforms: {
                time: { value: 0 },
                tDiffuse: { value: null }, // Texture from previous pass
            },
        });
    }, []);

    return (<></>
        // <CustomPass
        //     ref={passRef}
        //     material={shaderMaterial}
        //     attachArray="passes"
        // />
    );
}

export default CustomEffect;
