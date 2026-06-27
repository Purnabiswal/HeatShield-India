export function calculateCoolingCost(selected, houseArea) {
  let total = 0;

  selected.forEach((option) => {
    if (option.costType === "sqm") {
      total += option.costPerSqm * houseArea;
    }

    if (option.costType === "fixed") {
      total += option.fixedCost;
    }
  });

  return Math.round(total);
}

export function calculateTemperatureReduction(selected) {
  let reduction = 0;

  selected.forEach((option) => {
    reduction += (option.minReduction + option.maxReduction) / 2;
  });

  return Math.min(Math.round(reduction), 15);
}

export function calculateIndoorTemperature(outdoorTemperature, reduction) {
  const estimatedIndoor = outdoorTemperature - 6;

  return Math.max(18, estimatedIndoor - reduction);
}

export function calculateSummary(outdoorTemperature, houseArea, selected) {
  const reduction = calculateTemperatureReduction(selected);

  const indoor = calculateIndoorTemperature(outdoorTemperature, reduction);

  const cost = calculateCoolingCost(selected, houseArea);

  return {
    reduction,
    indoor,
    cost,
  };
}
