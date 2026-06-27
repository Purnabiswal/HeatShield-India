import coolingOptions from "../data/coolingOptions";

export function calculateCooling(selectedOptions, houseArea, outdoorTemp) {
  let reduction = 0;

  let totalCost = 0;

  const applied = [];

  selectedOptions.forEach((id) => {
    const option = coolingOptions.find((o) => o.id === id);

    if (!option) return;

    reduction += option.averageReduction;

    const cost =
      option.costType === "sqm" ? option.cost * houseArea : option.cost;

    totalCost += cost;

    applied.push({
      ...option,
      finalCost: cost,
    });
  });

  const indoorBefore = outdoorTemp;

  const indoorAfter = Math.max(22, indoorBefore - reduction);

  return {
    applied,

    reduction,

    indoorBefore,

    indoorAfter,

    totalCost,
  };
}
