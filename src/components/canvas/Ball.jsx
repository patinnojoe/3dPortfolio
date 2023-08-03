/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";
import {
  Decal,
  useTexture,
  Preload,
  Float,
  OrbitControls,
} from "@react-three/drei";

const Ball = (props) => {
  const { decal } = useTexture(props.imageURL);
  return (
    <Float speed={1.75} floatIntensity={1} rotationIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imageURL={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
export default BallCanvas;
