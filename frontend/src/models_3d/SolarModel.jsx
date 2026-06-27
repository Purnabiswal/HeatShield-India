import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export default function SolarModel({ houseArea }) {
  const { scene } = useGLTF("/models/solar.glb");

  const scale = useMemo(() => {
    return 0.8 + ((houseArea - 50) / 200) * 0.65;
  }, [houseArea]);

  return (
    <primitive object={scene.clone()} scale={scale} position={[0, 0, 0]} />
  );
}
