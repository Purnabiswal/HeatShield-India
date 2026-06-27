import clsx from "clsx";

export default function CoolingCard({ option, selected, onToggle }) {
  const averageReduction = (
    (option.minReduction + option.maxReduction) /
    2
  ).toFixed(1);

  return (
    <button
      onClick={() => onToggle(option)}
      className={clsx(
        "w-full rounded-xl border p-4 transition text-left",
        selected
          ? "border-green-600 bg-green-50"
          : "border-gray-200 hover:border-green-400",
      )}
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="text-3xl">{option.icon}</div>

          <div>
            <h3 className="font-semibold">{option.title}</h3>

            <p className="text-sm text-gray-500 mt-1">{option.description}</p>
          </div>
        </div>

        <div
          className={clsx(
            "w-6 h-6 rounded-full border flex items-center justify-center",
            selected
              ? "bg-green-600 border-green-600 text-white"
              : "border-gray-400",
          )}
        >
          {selected ? "✓" : ""}
        </div>
      </div>

      <div className="flex justify-between mt-5 text-sm">
        <span className="font-medium text-green-700">
          ↓ {averageReduction}°C
        </span>

        <span className="text-gray-500">
          {option.costType === "sqm" && `₹${option.costPerSqm}/sq.m`}

          {option.costType === "fixed" &&
            `₹${option.fixedCost.toLocaleString()}`}

          {option.costType === "none" && "Calculated in Solar Step"}
        </span>
      </div>
    </button>
  );
}
