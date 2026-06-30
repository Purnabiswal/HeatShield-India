import { CircleCheckBig } from "lucide-react";

export default function Step5Complete() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 text-center">
      <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center shadow-lg mb-6">
        <CircleCheckBig
          className="text-green-600"
          size={56}
          strokeWidth={2.5}
        />
      </div>

      <h2 className="text-3xl font-bold text-green-700">
        Your Sustainability Plan is Ready
      </h2>

      <p className="text-gray-500 mt-3 max-w-sm">
        Congratulations! Your personalized cooling and solar recommendations
        have been successfully prepared.
      </p>
    </div>
  );
}
