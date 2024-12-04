import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Developer from "./Developer";
import CanvasLoader from "./CanvasLoader";
import { OrbitControls, useProgress } from "@react-three/drei";

// eslint-disable-next-line react/prop-types
const DevScene = ({ animationName }) => {
    const { progress } = useProgress();

    return (
        <Canvas>
            <ambientLight intensity={5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
            <Suspense fallback={<CanvasLoader progress={progress} />}>
                {progress === 100 ? (
                    <Developer position-y={-3} scale={3} animationName={animationName} />
                ) : (
                    <CanvasLoader progress={progress} />
                )}
            </Suspense>
        </Canvas>
    );
};

export default DevScene;