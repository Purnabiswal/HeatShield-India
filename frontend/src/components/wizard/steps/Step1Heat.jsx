import { useEffect, useMemo, useState } from "react";

import { useWizard } from "../WizardContext";

import CoolingCard from "../cards/CoolingCard";
import coolingOptions from "../data/coolingOptions";

import { calculateSummary } from "../utils/temperatureCalculator";

import { useScene } from "../../../context/SceneContext";

export default function Step1Heat() {
  const { wizardData, updateSection } = useWizard();

  const { outdoorTemp } = wizardData.location;

  const { area } = wizardData.house;

  const [selectedOptions, setSelectedOptions] = useState(
    wizardData.cooling.selected || [],
  );

  const { setSceneState } = useScene();

  function toggleOption(option) {
    setSelectedOptions((prev) => {
      const exists = prev.some((item) => item.id === option.id);

      if (exists) {
        return prev.filter((item) => item.id !== option.id);
      }

      return [...prev, option];
    });
  }

  const summary = useMemo(() => {
    return calculateSummary(outdoorTemp, area, selectedOptions);
  }, [selectedOptions, outdoorTemp, area]);

  //   useEffect(() => {
  //     updateSection("cooling", {
  //       selected: selectedOptions,
  //       reduction: summary.reduction,
  //       cost: summary.cost,
  //       indoorTemperature: summary.indoor,
  //     });
  //   }, [selectedOptions, summary, updateSection]);

  useEffect(() => {
    updateSection("cooling", {
      selected: selectedOptions,

      reduction: summary.reduction,

      cost: summary.cost,

      indoorTemperature: summary.indoor,
    });

    setSceneState({
      coolRoof: selectedOptions.some((o) => o.id === "coolRoof"),

      solar: selectedOptions.some((o) => o.id === "solar"),

      trees: selectedOptions.some((o) => o.id === "trees"),

      reflectiveTiles: selectedOptions.some((o) => o.id === "reflectiveTiles"),

      greenRoof: selectedOptions.some((o) => o.id === "greenRoof"),

      doubleRoof: selectedOptions.some((o) => o.id === "doubleRoof"),

      bamboo: selectedOptions.some((o) => o.id === "bamboo"),

      ventilation: selectedOptions.some((o) => o.id === "ventilation"),

      heatReduction: summary.reduction,

      indoorTemp: summary.indoor,
    });
  }, [selectedOptions, summary, updateSection, setSceneState]);

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <p className="text-green-600 font-semibold">Step 1 of 4</p>

        <h2 className="text-2xl font-bold mt-1">Heat Reduction Planner</h2>

        <p className="text-gray-500 mt-2">
          Select one or more cooling solutions to estimate indoor temperature
          improvement and investment cost.
        </p>
      </div>

      {/* Current Temperature */}

      <div className="rounded-xl border bg-red-50 border-red-200 p-5">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500 text-sm">Outdoor Temperature</p>

            <h3 className="text-3xl font-bold text-red-600">{outdoorTemp}°C</h3>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Estimated Indoor</p>

            <h3 className="text-3xl font-bold">{outdoorTemp - 6}°C</h3>
          </div>
        </div>
      </div>

      {/* Cooling Options */}

      <div>
        <h3 className="font-semibold mb-3">Cooling Solutions</h3>

        <div className="space-y-4">
          {coolingOptions.map((option) => (
            <CoolingCard
              key={option.id}
              option={option}
              selected={selectedOptions.some((item) => item.id === option.id)}
              onToggle={toggleOption}
            />
          ))}
        </div>
      </div>

      {/* Summary */}

      <div className="rounded-xl border bg-green-50 p-5">
        <h3 className="font-semibold mb-4">Estimated Results</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <p className="text-gray-500 text-sm">Indoor Temperature</p>

            <h2 className="text-3xl font-bold text-green-700 mt-2">
              {summary.indoor}°C
            </h2>
          </div>

          <div className="bg-white rounded-lg p-4">
            <p className="text-gray-500 text-sm">Heat Reduction</p>

            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              {summary.reduction}°C
            </h2>
          </div>

          <div className="bg-white rounded-lg p-4 col-span-2">
            <p className="text-gray-500 text-sm">Estimated Cooling Cost</p>

            <h2 className="text-3xl font-bold mt-2">
              ₹{summary.cost.toLocaleString()}
            </h2>
          </div>
        </div>
      </div>

      {/* Selected Solutions */}

      <div>
        <h3 className="font-semibold mb-3">Selected Solutions</h3>

        {selectedOptions.length === 0 ? (
          <div className="rounded-lg border border-dashed p-6 text-center text-gray-500">
            No cooling solution selected.
          </div>
        ) : (
          <div className="space-y-2">
            {selectedOptions.map((item) => (
              <div
                key={item.id}
                className="flex justify-between rounded-lg border bg-white p-3"
              >
                <span>
                  {item.icon} {item.title}
                </span>

                <span className="font-semibold text-green-700">
                  ↓{((item.minReduction + item.maxReduction) / 2).toFixed(1)}
                  °C
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recommendation */}

      <div className="rounded-xl bg-blue-50 border border-blue-200 p-5">
        <h3 className="font-semibold">Recommendation</h3>

        <p className="text-gray-600 mt-2 text-sm leading-6">
          For houses in hot Indian climates, combining <b>Cool Roof</b>,
          <b> Tree Plantation</b> and
          <b> Roof Ventilation</b> generally provides the best balance between
          investment and temperature reduction.
        </p>
      </div>
    </div>
  );
}
