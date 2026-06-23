import React from "react";
import { useGLTF } from "@react-three/drei";

const SolarModel = () => {
  const { scene } = useGLTF("/models/solar.glb");

  return <primitive object={scene} position={[0, 2, 0]} scale={0.5} />;
};

export default SolarModel;
