function CoolingCard({ option, selected, onToggle, houseArea }) {
  const cost =
    option.costType === "sqm" ? option.cost * houseArea : option.cost;

  return (
    <div
      onClick={() => onToggle(option.id)}
      className={`cursor-pointer rounded-xl border p-4 transition-all duration-300

      ${
        selected
          ? "border-green-600 bg-green-50"
          : "border-gray-200 bg-white hover:border-green-400"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="text-4xl">{option.icon}</div>

          <div>
            <h3 className="font-semibold">{option.name}</h3>

            <p className="text-sm text-gray-500 mt-1">{option.description}</p>
          </div>
        </div>

        <input type="checkbox" checked={selected} readOnly />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
        <div>
          <p className="text-gray-400">Cooling</p>

          <p className="font-semibold text-green-700">
            -{option.reductionMin}° to -{option.reductionMax}°
          </p>
        </div>

        <div>
          <p className="text-gray-400">Cost</p>

          <p className="font-semibold">₹{cost.toLocaleString()}</p>
        </div>

        <div>
          <p className="text-gray-400">Source</p>

          <p className="font-semibold text-xs">{option.source}</p>
        </div>
      </div>

      {selected && (
        <div className="mt-4 rounded-lg bg-green-600 text-white text-center py-2 font-medium">
          ✓ Applied
        </div>
      )}
    </div>
  );
}

export default CoolingCard;
