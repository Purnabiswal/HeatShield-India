import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MESSAGES = [
  "🔍 Inspecting your rooftop...",
  "🌞 Finding the best solar layout...",
  "🏠 Cooling your home virtually...",
  "⚡ Estimating annual energy generation...",
  "💰 Calculating government subsidy...",
  "🌱 Saving carbon emissions...",
  "📊 Preparing your sustainability report...",
  "🚀 Almost finished...",
];

export default function Processing() {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;

    const timer = setInterval(() => {
      i++;

      if (i >= MESSAGES.length) {
        clearInterval(timer);

        setTimeout(() => {
          setDone(true);
        }, 600);
      } else {
        setIndex(i);
      }
    }, 900);

    return () => clearInterval(timer);
  }, []);

  if (done) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10 text-center max-w-lg w-full">
          <div className="text-7xl mb-6">🌿</div>

          <h1 className="text-3xl font-bold text-green-700">
            Proposal Generated
          </h1>

          <p className="text-gray-600 mt-4">
            Your personalized HeatShield sustainability plan is ready.
          </p>

          <div className="mt-8 space-y-3 text-left bg-green-50 rounded-xl p-5">
            <p>✅ Solar Recommendation Prepared</p>
            <p>✅ Cooling Analysis Completed</p>
            <p>✅ Government Subsidy Estimated</p>
            <p>✅ Savings Report Generated</p>
          </div>

          <Link
            to="/"
            className="block mt-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-lg w-full text-center">
        <div className="w-20 h-20 mx-auto rounded-full border-[6px] border-green-600 border-t-transparent animate-spin"></div>

        <h1 className="text-3xl font-bold mt-8">Generating Your Proposal</h1>

        <p className="text-green-700 font-semibold mt-8">{MESSAGES[index]}</p>

        <div className="mt-8 h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="bg-green-600 h-full transition-all duration-700"
            style={{
              width: `${((index + 1) / MESSAGES.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
