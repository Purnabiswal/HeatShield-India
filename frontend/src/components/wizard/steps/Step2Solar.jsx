import { useEffect, useMemo, useState } from "react";
import { useWizard } from "../WizardContext";
import { useScene } from "../../../context/SceneContext";
import SolarCard from "../cards/SolarCard";
import { calculateSolar, CUSTOMER_CATEGORY } from "../utils/solarCalculator";

export default function Step2Solar() {
  const { wizardData, updateSection } = useWizard();
  const { setSceneState } = useScene();

  const { area } = wizardData.house;
  const { state } = wizardData.location;
  const monthlyBill = wizardData.location.monthlyBill ?? 2500;

  const result = useMemo(
    () =>
      calculateSolar({
        houseArea: area,
        monthlyBill,
        state,
        customerCategory: CUSTOMER_CATEGORY.RESIDENTIAL,
      }),
    [area, monthlyBill, state],
  );

  const cards = useMemo(() => {
    const build = (kw, recommended = false) => {
      kw = Math.max(1, Math.min(kw, result.maxRoofCapacity || 1));

      const monthlyGeneration = kw * 120;
      const annualGeneration = monthlyGeneration * 12;
      const monthlySaving =
        Math.min(monthlyGeneration, result.monthlyUnits) * result.tariff;
      const annualSaving = monthlySaving * 12;

      const ratio = kw / result.recommendedKW;

      return {
        kw,
        recommended,
        roofArea: kw * 9,
        monthlyGeneration,
        annualGeneration,
        monthlySaving,
        annualSaving,
        subsidy: Math.round(result.subsidy * ratio),
        cost: Math.round(result.cost * ratio),
        payable: Math.round(result.payable * ratio),
        roi:
          annualSaving === 0
            ? 0
            : Math.round(((result.payable * ratio) / annualSaving) * 10) / 10,
      };
    };

    return [
      build(result.recommendedKW - 1),
      build(result.recommendedKW, true),
      build(result.recommendedKW + 1),
    ].filter((v, i, a) => a.findIndex((x) => x.kw === v.kw) === i);
  }, [result]);

  const [selected, setSelected] = useState(cards[1] || cards[0]);

  useEffect(() => {
    setSelected(cards.find((c) => c.kw === result.recommendedKW) || cards[0]);
  }, [cards, result.recommendedKW]);

  useEffect(() => {
    if (!selected) return;

    // updateSection("solar", {
    //   recommendedKW: result.recommendedKW,
    //   selectedKW: selected.kw,
    //   roofArea: selected.roofArea,
    //   generation: selected.monthlyGeneration,
    //   saving: selected.monthlySaving,
    //   subsidy: selected.subsidy,
    //   cost: selected.cost,
    //   payable: selected.payable,
    //   roi: selected.roi,
    //   carbonReduction: selected.monthlyGeneration * 0.82,
    // });
    updateSection("solar", {
      recommendedKW: result.recommendedKW,
      selectedKW: selected.kw,

      roofArea: selected.roofArea,

      monthlyGeneration: selected.monthlyGeneration,
      annualGeneration: selected.annualGeneration,

      monthlySaving: selected.monthlySaving,
      annualSaving: selected.annualSaving,

      subsidy: selected.subsidy,

      cost: selected.cost,
      payable: selected.payable,

      roi: selected.roi,

      monthlyCarbonReduction: result.monthlyCO2,
      annualCarbonReduction: result.annualCO2,
    });

    setSceneState((prev) => ({
      ...prev,
      solar: true,
      selectedKW: selected.kw,
    }));
  }, [selected, result, updateSection, setSceneState]);

  return (
    <div className="space-y-6">
      <div>
        <p className="font-semibold text-green-600">Step 2 of 4</p>

        <h2 className="mt-1 text-2xl font-bold">Solar Recommendation</h2>

        <p className="mt-2 text-gray-500">
          Recommended rooftop solar system based on your electricity usage, roof
          size and PM Surya Ghar subsidy.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 rounded-xl border bg-blue-50 p-5">
        <Summary title="Monthly Bill" value={`₹${monthlyBill}`} />
        <Summary title="Tariff" value={`₹${result.tariff}/unit`} />
        <Summary
          title="Consumption"
          value={`${Math.round(result.monthlyUnits)} Units`}
        />
        <Summary
          title="Usable Roof"
          value={`${result.usableRoofArea.toFixed(1)} m²`}
        />
      </div>

      {result.roofWarning && (
        <div className="rounded-xl border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-800">
          Roof size limits installation to {result.maxRoofCapacity} kW.
        </div>
      )}

      <div className="space-y-4">
        {cards.map((card) => (
          <SolarCard
            key={card.kw}
            data={card}
            selected={selected?.kw === card.kw}
            onSelect={setSelected}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 rounded-xl border bg-green-50 p-5">
        <Summary
          title="Monthly CO₂ Reduction"
          value={`${result.monthlyCO2.toFixed(1)} kg`}
        />

        <Summary
          title="Annual CO₂ Reduction"
          value={`${result.annualCO2.toFixed(1)} kg`}
        />
      </div>
    </div>
  );
}

function Summary({ title, value }) {
  return (
    <div className="rounded-lg bg-white p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="mt-1 text-xl font-bold">{value}</h3>
    </div>
  );
}
