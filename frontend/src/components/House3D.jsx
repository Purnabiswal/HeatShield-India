import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import BaseModel from "./BaseModel";
import HouseModel from "./HouseModel";
import SolarModel from "../models_3d/SolarModel";

function Scene({ houseArea, scene }) {
  return (
    <>
      {/* Fixed Ground */}

      {/* <BaseModel /> */}

      {/* Scalable House */}

      {/* <HouseModel houseArea={houseArea} /> */}

      {/* Solar */}

      {/* {solar && <SolarModel houseArea={houseArea} />} */}

      <BaseModel scene={scene} />

      <HouseModel houseArea={houseArea} scene={scene} />

      {scene.solar && <SolarModel houseArea={houseArea} />}
    </>
  );
}

export default function House3D(props) {
  return (
    <Canvas
      camera={{
        position: [6, 5, 7],
        fov: 45,
      }}
    >
      <ambientLight intensity={2} />

      <directionalLight intensity={2} position={[6, 8, 5]} />

      <Scene {...props} />

      <OrbitControls enablePan enableZoom minDistance={4} maxDistance={10} />
    </Canvas>
  );
}
