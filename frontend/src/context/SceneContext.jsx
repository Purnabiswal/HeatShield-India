import { createContext, useContext, useState } from "react";

const SceneContext = createContext();

export function SceneProvider({ children }) {
  const [sceneState, setSceneState] = useState({
    coolRoof: false,

    solar: false,

    trees: false,

    reflectiveTiles: false,

    greenRoof: false,

    doubleRoof: false,

    bamboo: false,

    ventilation: false,

    heatReduction: 0,

    indoorTemp: 35,
  });

  return (
    <SceneContext.Provider
      value={{
        sceneState,
        setSceneState,
      }}
    >
      {children}
    </SceneContext.Provider>
  );
}

export function useScene() {
  return useContext(SceneContext);
}
