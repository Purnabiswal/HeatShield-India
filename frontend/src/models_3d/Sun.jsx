import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Sun() {
  const sunRef = useRef();

  useFrame(({ clock }) => {
    sunRef.current.position.x = Math.sin(clock.elapsedTime * 0.1) * 10;
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[1]} />
      <meshBasicMaterial color="orange" />
    </mesh>
  );
}

export default Sun;