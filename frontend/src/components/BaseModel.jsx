import { useGLTF } from "@react-three/drei";

export default function BaseModel() {
  const { scene } = useGLTF("/models/base.glb");

  return (
    <primitive
      object={scene}
      scale={[3, 1, 3]} // wider ground
      position={[0, -0.02, 0]}
    />
  );
}

useGLTF.preload("/models/base.glb");
