import { useState } from "react";

import Navbar from "../components/Navbar";
import House3D from "../components/House3D";
// import Controls from "../components/Controls";
import Wizard from "../components/wizard/Wizard";
import { useScene } from "../context/SceneContext";


function Builder() {
  // const [solar, setSolar] = useState(false);
  // const [coolRoof, setCoolRoof] = useState(false);
  // const [trees, setTrees] = useState(false);

  const [houseArea, setHouseArea] = useState(120);
  const { sceneState } = useScene();

  return (
    <>
      <Navbar />

      <div className="flex h-[calc(100vh-70px)]">
        {/* Left */}

        <div className="w-[70%] flex flex-col">
          <div className="flex-1">
            {/* <House3D
              solar={solar}
              coolRoof={coolRoof}
              trees={trees}
              houseArea={houseArea}
            /> */}
            <House3D houseArea={houseArea} scene={sceneState} />
          </div>

          <div className="bg-white border-t p-6">
            <div className="flex justify-between mb-2">
              <h2 className="font-semibold">House Area</h2>

              <span>{houseArea} sq.m</span>
            </div>

            <input
              type="range"
              min={50}
              max={250}
              value={houseArea}
              onChange={(e) => setHouseArea(Number(e.target.value))}
              className="w-full"
            />

            <div className="flex justify-between text-sm text-gray-500">
              <span>50 sq.m</span>

              <span>250 sq.m</span>
            </div>
          </div>
        </div>

        {/* Right */}

        {/* <div className="w-[30%] bg-gray-50 border-l">
          <Controls
            solar={solar}
            setSolar={setSolar}
            coolRoof={coolRoof}
            setCoolRoof={setCoolRoof}
            trees={trees}
            setTrees={setTrees}
            houseArea={houseArea}
          />
        </div> */}
        <div className="w-[30%] bg-gray-50 border-l">
          {/* <Wizard
            address={address}
            city={city}
            state={state}
            outdoorTemp={temperature}
            houseArea={houseArea}
            monthlyBill={monthlyBill}
          /> */}
          <Wizard
            address=""
            city=""
            state="Odisha"
            outdoorTemp={42}
            houseArea={houseArea}
            monthlyBill={2500}
          />
          {/* <Wizard houseArea={houseArea} /> */}
        </div>
      </div>
    </>
  );
}

export default Builder;
