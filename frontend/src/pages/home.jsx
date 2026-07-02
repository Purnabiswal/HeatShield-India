import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { calculateSolar } from "../services/api";

export default function Home() {
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [bill, setBill] = useState("");

  async function testBackend() {
    try {
      const res = await calculateSolar({
        address: "Bhubaneswar",
        monthlyBill: 2500,
        houseArea: 120,
      });

      console.log(res);
    } catch (e) {
      console.error(e);
    }
  }

  function startPlanning() {
    navigate("/builder", {
      state: {
        address,
        monthlyBill: Number(bill),
      },
    });
  }

  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-70px)] bg-gradient-to-br from-green-50 via-white to-orange-50 flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-xl rounded-3xl shadow-xl p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">HeatShield India</h1>

            <p className="text-gray-500 mt-3">
              Plan a cooler home with rooftop solar in just a few steps.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Address</label>

              <input
                type="text"
                placeholder="Enter your state..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {/* <p className="text-xs text-gray-400 mt-2">
                Suggestions will appear while typing.
              </p> */}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Monthly Electricity Bill (₹)
              </label>

              <input
                type="number"
                placeholder="e.g. 2500"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              onClick={startPlanning}
              disabled={!address || !bill}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition"
            >
              Start
            </button>

            <button onClick={testBackend}>Test Backend</button>
          </div>
        </div>
      </div>
    </>
  );
}
