import clsx from "clsx";

export default function SolarCard({ data, selected, onSelect }) {
  const {
    kw,
    roofArea,
    monthlyGeneration,
    annualGeneration,
    monthlySaving,
    annualSaving,
    subsidy,
    cost,
    payable,
    roi,
    recommended = false,
  } = data;

  return (
    <button
      type="button"
      onClick={() => onSelect(data)}
      className={clsx(
        "w-full rounded-2xl border p-5 text-left transition-all duration-300 hover:shadow-lg",
        selected
          ? "border-green-600 bg-green-50 shadow-lg ring-2 ring-green-500"
          : "border-gray-200 bg-white hover:border-green-300",
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{kw} kW</h3>

          <p className="mt-1 text-sm text-gray-500">Rooftop Solar System</p>
        </div>

        <div className="flex flex-col items-end gap-2">
          {recommended && (
            <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
              Recommended
            </span>
          )}

          {selected && (
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Selected
            </span>
          )}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <Info title="Roof Usage" value={`${roofArea.toFixed(1)} m²`} />

        <Info
          title="Monthly Generation"
          value={`${monthlyGeneration.toFixed(0)} Units`}
        />

        <Info
          title="Annual Generation"
          value={`${annualGeneration.toLocaleString()} Units`}
        />

        <Info
          title="Monthly Saving"
          value={`₹${Math.round(monthlySaving).toLocaleString()}`}
        />

        <Info
          title="Annual Saving"
          value={`₹${Math.round(annualSaving).toLocaleString()}`}
        />

        <Info
          title="Government Subsidy"
          value={`₹${subsidy.toLocaleString()}`}
        />

        <Info title="System Cost" value={`₹${cost.toLocaleString()}`} />

        <Info title="Amount Payable" value={`₹${payable.toLocaleString()}`} />

        <div className="col-span-2 rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Estimated ROI</p>

          <p className="mt-1 text-2xl font-bold text-green-700">
            {roi.toFixed(1)} Years
          </p>
        </div>
      </div>
    </button>
  );
}

function Info({ title, value }) {
  return (
    <div className="rounded-xl bg-gray-50 p-4">
      <p className="text-xs text-gray-500">{title}</p>

      <p className="mt-1 font-semibold text-gray-900">{value}</p>
    </div>
  );
}
