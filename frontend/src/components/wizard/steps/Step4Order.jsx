import { useEffect, useState } from "react";
import { useWizard } from "../WizardContext";

const STEPS = [
  "Preparing proposal...",
  "Checking roof suitability...",
  "Calculating subsidy...",
  "Generating solar layout...",
  "Estimating ROI...",
  "Creating installation estimate...",
];

export default function Step4Order() {
  const { wizardData, setStep } = useWizard();

  const { location, house, cooling, solar } = wizardData;

  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);

  const installationCharge = 15000;
  const subtotal = cooling.cost + solar.cost + installationCharge;
  const payable = cooling.cost + solar.payable + installationCharge;

  useEffect(() => {
    if (!loading) return;

    let i = 0;

    const timer = setInterval(() => {
      i++;

      if (i >= STEPS.length) {
        clearInterval(timer);
        setTimeout(() => setStep(5), 700);
      } else {
        setIndex(i);
      }
    }, 800);

    return () => clearInterval(timer);
  }, [loading, setStep]);

  const Card = ({ title, children }) => (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-bold">{title}</h3>
      <div className="space-y-2 text-sm">{children}</div>
    </div>
  );

  const Row = ({ k, v, color = "" }) => (
    <div className="flex justify-between">
      <span className="text-gray-500">{k}</span>
      <span className={`font-semibold ${color}`}>{v}</span>
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <p className="font-semibold text-green-600">Step 4 of 4</p>

        <h2 className="mt-1 text-2xl font-bold">Final Proposal</h2>

        <p className="mt-2 text-gray-500">
          Review your installation proposal before generating the final report.
        </p>
      </div>

      <Card title="🏠 Installation Summary">
        <Row k="Customer State" v={location.state} />
        <Row k="Category" v={location.customerCategory} />
        <Row k="House Area" v={`${house.area} m²`} />
        <Row k="Roof Area" v={`${solar.roofArea} m²`} />
        <Row k="Solar System" v={`${solar.selectedKW} kW`} />
        <Row k="Cooling Solutions" v={cooling.selected.length} />
      </Card>

      <Card title="💰 Financial Breakdown">
        <Row k="Cooling Cost" v={`₹${cooling.cost.toLocaleString()}`} />

        <Row k="Solar Cost" v={`₹${solar.cost.toLocaleString()}`} />

        <Row
          k="Installation Charges"
          v={`₹${installationCharge.toLocaleString()}`}
        />

        <Row k="Subtotal" v={`₹${subtotal.toLocaleString()}`} />

        <Row
          k="Government Subsidy"
          v={`- ₹${solar.subsidy.toLocaleString()}`}
          color="text-red-600"
        />

        <hr />

        <Row
          k="Final Payable"
          v={`₹${payable.toLocaleString()}`}
          color="text-green-700 text-lg"
        />
      </Card>

      <Card title="📅 Estimated Timeline">
        <Row k="Site Inspection" v="1–2 Days" />
        <Row k="Quotation Approval" v="Same Day" />
        <Row k="Installation" v="2–5 Days" />
        <Row k="Net Metering" v="7–30 Days" />
      </Card>

      <Card title="🌱 Expected Benefits">
        <Row
          k="Monthly Saving"
          v={`₹${Math.round(solar.monthlySaving).toLocaleString()}`}
          color="text-green-700"
        />

        <Row
          k="Annual Saving"
          v={`₹${Math.round(solar.annualSaving).toLocaleString()}`}
          color="text-green-700"
        />

        <Row k="ROI" v={`${solar.roi} Years`} />

        <Row
          k="CO₂ Reduction"
          v={`${solar.annualCarbonReduction.toFixed(1)} kg/year`}
        />

        <Row k="Indoor Temperature" v={`${cooling.indoorTemperature}°C`} />
      </Card>

      {loading && (
        <div className="rounded-xl border border-green-300 bg-green-50 p-5">
          <div className="mb-4 h-2 overflow-hidden rounded-full bg-green-100">
            <div
              className="h-full bg-green-600 transition-all duration-700"
              style={{
                width: `${((index + 1) / STEPS.length) * 100}%`,
              }}
            />
          </div>

          <p className="font-semibold text-green-700">{STEPS[index]}</p>
        </div>
      )}

      {/* <div className="flex gap-4">
        <button
          onClick={() => setStep(3)}
          className="flex-1 rounded-xl border py-3 font-semibold"
        >
          Previous
        </button>

        <button
          disabled={loading}
          onClick={() => {
            setIndex(0);
            setLoading(true);
          }}
          className="flex-1 rounded-xl bg-green-600 py-3 font-semibold text-white disabled:opacity-60"
        >
          {loading ? "Generating..." : "Generate Proposal"}
        </button>
      </div> */}
    </div>
  );
}
