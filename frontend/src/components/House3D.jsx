import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sun from "../models_3d/Sun";
import SolarModel from "../models_3d/SolarModel";

function House({ solar, coolRoof, trees }) {
  return (
    <>
      {/* House Body */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 1, 2]} />
        <meshStandardMaterial color="#f5deb3" />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 1.3, 0]}>
        <boxGeometry args={[2.2, 0.3, 2.2]} />
        <meshStandardMaterial color={coolRoof ? "white" : "brown"} />
      </mesh>

      {/* Solar Panel */}
      {/* {solar && (
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[1.5, 0.05, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      )} */}

      {solar && <SolarModel />}

      {/* Trees */}
      {trees && (
        <>
          <mesh position={[-3, 1, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 1]} />
            <meshStandardMaterial color="brown" />
          </mesh>

          <mesh position={[-3, 2, 0]}>
            <sphereGeometry args={[0.5]} />
            <meshStandardMaterial color="green" />
          </mesh>

          <mesh position={[3, 1, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 1]} />
            <meshStandardMaterial color="brown" />
          </mesh>

          <mesh position={[3, 2, 0]}>
            <sphereGeometry args={[0.5]} />
            <meshStandardMaterial color="green" />
          </mesh>
        </>
      )}
    </>
  );
}

function House3D(props) {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 5]} />

      {/* <Sun /> */}
      <House {...props} />

      <OrbitControls />
    </Canvas>
  );
}

export default House3D;
