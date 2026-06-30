import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

const PANELS_PER_KW = 1;
const PANEL_SCALE = 0.3;

const PANEL_WIDTH = 1.2 * PANEL_SCALE;
const PANEL_HEIGHT = 2.0 * PANEL_SCALE;

// spacing
const PANEL_SPACING_X = PANEL_WIDTH - 0.02;
const PANEL_SPACING_Z = PANEL_HEIGHT + 0.04;

export default function SolarModel({ houseArea, selectedKW = 0 }) {
  const { scene } = useGLTF("/models/solar.glb");

  const requiredPanels = useMemo(() => {
    return Math.max(0, selectedKW * PANELS_PER_KW);
  }, [selectedKW]);

  const columns = 4;

  const rows = useMemo(() => {
    return Math.ceil(requiredPanels / columns);
  }, [requiredPanels]);

  // ✅ SMALL / SUBTLE UPWARD MOVEMENT
  const heightOffset = useMemo(() => {
    return (houseArea - 50) * 0.0018; //  reduced intensity
  }, [houseArea]);

  const panels = useMemo(() => {
    const list = [];

    const totalWidth = (columns - 1) * PANEL_SPACING_X;
    const totalDepth = (rows - 1) * PANEL_SPACING_Z;

    let index = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        if (index >= requiredPanels) break;

        list.push({
          id: index,
          x: c * PANEL_SPACING_X - totalWidth / 2,
          z: r * PANEL_SPACING_Z - totalDepth / 2,
        });

        index++;
      }
    }

    return list;
  }, [requiredPanels, columns, rows]);

  return (
    <group position={[-0.3, 0.2, 0]}>
      {panels.map((panel) => (
        <primitive
          key={panel.id}
          object={scene.clone()}
          scale={[0.3, 0.08, 0.5]}
          position={[
            panel.x,
            heightOffset, // ✅ subtle upward movement
            panel.z,
          ]}
        />
      ))}
    </group>
  );
}

useGLTF.preload("/models/solar.glb");
