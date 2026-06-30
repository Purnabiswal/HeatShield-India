import { useWizard } from "../WizardContext";

export default function Step3Summary() {
  const { wizardData } = useWizard();

  const { location, house, cooling, solar } = wizardData;

  const subtotal = cooling.cost + solar.cost;
  const finalInvestment = cooling.cost + solar.payable;

  const trees = Math.round((solar.annualCarbonReduction || 0) / 22);
  const cars = ((solar.annualCarbonReduction || 0) / 4600).toFixed(2);

  const Card = ({ title, children }) => (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h3 className="mb-3 text-lg font-bold">{title}</h3>
      <div className="space-y-2 text-sm">{children}</div>
    </div>
  );

  const Row = ({ k, v, c = "" }) => (
    <div className="flex justify-between">
      <span className="text-gray-500">{k}</span>
      <span className={`font-semibold ${c}`}>{v}</span>
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <p className="font-semibold text-green-600">Step 3 of 4</p>
        <h2 className="text-2xl font-bold">Investment Summary</h2>
        <p className="mt-2 text-gray-500">
          Review your complete HeatShield India quotation.
        </p>
      </div>

      <Card title="🏠 Cooling Improvements">
        {cooling.selected?.length ? (
          cooling.selected.map((x) => (
            <Row
              key={x.id}
              k={`${x.icon} ${x.title}`}
              v={
                x.costType === "fixed"
                  ? `₹${x.fixedCost.toLocaleString()}`
                  : `₹${(x.costPerSqm * house.area).toLocaleString()}`
              }
            />
          ))
        ) : (
          <p className="text-gray-500">No cooling solution selected.</p>
        )}

        <hr />
        <Row k="Total Cooling Cost" v={`₹${cooling.cost.toLocaleString()}`} />
      </Card>

      <Card title="☀️ Solar System">
        <Row k="Capacity" v={`${solar.selectedKW} kW`} />
        <Row k="Roof Used" v={`${solar.roofArea} m²`} />
        <Row k="Monthly Generation" v={`${solar.monthlyGeneration} Units`} />
        <Row k="Annual Generation" v={`${solar.annualGeneration} Units`} />
        <Row
          k="Government Subsidy"
          v={`₹${solar.subsidy.toLocaleString()}`}
          c="text-red-600"
        />
        <Row k="System Cost" v={`₹${solar.cost.toLocaleString()}`} />
        <Row
          k="Payable Amount"
          v={`₹${solar.payable.toLocaleString()}`}
          c="text-green-700"
        />
      </Card>

      <Card title="💰 Financial Summary">
        <Row k="Cooling Cost" v={`₹${cooling.cost.toLocaleString()}`} />
        <Row k="Solar Cost" v={`₹${solar.cost.toLocaleString()}`} />
        <Row k="Subtotal" v={`₹${subtotal.toLocaleString()}`} />
        <Row
          k="Government Subsidy"
          v={`- ₹${solar.subsidy.toLocaleString()}`}
          c="text-red-600"
        />
        <Row k="Final Investment" v={`₹${finalInvestment.toLocaleString()}`} />
        <Row
          k="Monthly Saving"
          v={`₹${Math.round(solar.monthlySaving).toLocaleString()}`}
          c="text-green-700"
        />
        <Row
          k="Annual Saving"
          v={`₹${Math.round(solar.annualSaving).toLocaleString()}`}
          c="text-green-700"
        />
        <Row k="ROI" v={`${solar.roi} Years`} />
      </Card>

      <Card title="🌱 Environmental Impact">
        <Row k="Temperature Reduction" v={`${cooling.reduction}°C`} />
        <Row k="Indoor Temperature" v={`${cooling.indoorTemperature}°C`} />
        <Row
          k="Annual CO₂ Reduction"
          v={`${solar.annualCarbonReduction?.toFixed(1)} kg`}
        />
        <Row k="Equivalent Trees Saved" v={trees} />
        <Row k="Equivalent Cars Removed" v={cars} />
      </Card>

      <Card title="📊 House Statistics">
        <Row k="House Area" v={`${house.area} m²`} />
        <Row
          k="Usable Roof Area"
          v={`${house.usableRoofArea?.toFixed?.(1) ?? 0} m²`}
        />
        <Row k="Customer Category" v={location.customerCategory} />
        <Row k="State" v={location.state} />
        <Row k="Monthly Electricity Bill" v={`₹${location.monthlyBill}`} />
      </Card>

      <div className="rounded-xl border border-green-300 bg-green-50 p-5">
        <h3 className="font-bold text-green-800">✅ Recommendation</h3>

        <p className="mt-2 text-sm leading-6 text-gray-700">
          Your selected cooling improvements and <b>{solar.selectedKW} kW</b>{" "}
          rooftop solar system are expected to recover their investment in about{" "}
          <b>{solar.roi} years</b>, while saving approximately{" "}
          <span className="font-semibold text-green-700">
            ₹{Math.round(solar.annualSaving).toLocaleString()}
          </span>{" "}
          every year. Over the system lifetime, the investment can significantly
          reduce electricity expenses while lowering carbon emissions.
        </p>
      </div>
    </div>
  );
}
