import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export default function HouseModel({ houseArea, sceneState }) {
  const { scene } = useGLTF("/models/house.glb");

  const scale = useMemo(() => {
    return 0.8 + ((houseArea - 50) / 200) * 0.65;
  }, [houseArea]);

  const clonedScene = useMemo(() => scene.clone(), [scene]);

  const baseYOffset = useMemo(() => {
    const box = new THREE.Box3().setFromObject(clonedScene);
    return -box.min.y;
  }, [clonedScene]);

  return (
    <primitive
      object={clonedScene}
      scale={scale}
      position={[-0.5, baseYOffset * scale - 0.12, 0]}
    />
  );
}

useGLTF.preload("/models/house.glb");
