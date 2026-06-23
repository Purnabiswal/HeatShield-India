import { useGLTF } from "@react-three/drei";

export default function HouseModel() {
  const { scene } = useGLTF("/models/house.glb");

  return <primitive object={scene} scale={1.5} />;
}

export default HouseModel;