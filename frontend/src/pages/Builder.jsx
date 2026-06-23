import { useState } from "react";

import Navbar from "../components/Navbar";
import House3D from "../components/House3D";
import Controls from "../components/Controls";
import MetricsPanel from "../components/MetricsPanel";
import HouseForm from "../components/HouseForm";
import Sun from "../models_3d/Sun";

function Builder() {
  const [solar, setSolar] = useState(false);
  const [coolRoof, setCoolRoof] = useState(false);
  const [trees, setTrees] = useState(false);

  return (
    <>
      <Navbar />

      <div className="grid grid-cols-3 h-screen">
        <div className="p-5 bg-gray-100">
          <MetricsPanel solar={solar} coolRoof={coolRoof} trees={trees} />
        </div>

        <div className="col-span-1 p-4">
          <div className="h-[500px]">
            <House3D solar={solar} coolRoof={coolRoof} trees={trees} />
          </div>

          {/* <HouseForm /> */}
        </div>

        <div className="p-5 bg-gray-100">
          <Controls
            solar={solar}
            setSolar={setSolar}
            coolRoof={coolRoof}
            setCoolRoof={setCoolRoof}
            trees={trees}
            setTrees={setTrees}
          />
        </div>
      </div>
    </>
  );
}

export default Builder;
