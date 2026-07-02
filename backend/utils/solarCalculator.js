export function calculateSolar(data) {
  const { address = "", monthlyBill = 2500, houseArea = 120 } = data;

  const tariff = 8;

  const roofArea = Math.round(houseArea * 0.7);

  const usableRoofArea = roofArea;

  const maxRoofCapacity = Math.max(1, Math.floor(usableRoofArea / 9));

  const monthlyUnits = monthlyBill / tariff;

  const recommendedKW = Math.max(
    1,
    Math.min(Math.ceil(monthlyUnits / 120), maxRoofCapacity),
  );

  function buildCard(kw, recommended = false) {
    kw = Math.max(1, Math.min(kw, maxRoofCapacity));

    const cost = kw * 60000;

    const subsidy = kw >= 3 ? 78000 : kw === 2 ? 60000 : 30000;

    const payable = cost - subsidy;

    const monthlyGeneration = kw * 120;

    const annualGeneration = monthlyGeneration * 12;

    const monthlySaving = Math.min(monthlyGeneration, monthlyUnits) * tariff;

    const annualSaving = monthlySaving * 12;

    const roi = annualSaving === 0 ? 0 : +(payable / annualSaving).toFixed(1);

    return {
      kw,
      recommended,

      roofArea: kw * 9,

      cost,
      subsidy,
      payable,

      monthlyGeneration,
      annualGeneration,

      monthlySaving,
      annualSaving,

      roi,
    };
  }

  // Build unique cards while preserving the recommended one
  const map = new Map();

  [
    buildCard(recommendedKW - 1),
    buildCard(recommendedKW, true),
    buildCard(recommendedKW + 1),
  ].forEach((card) => {
    if (!map.has(card.kw) || card.recommended) {
      map.set(card.kw, card);
    }
  });

  const cards = [...map.values()];

  const recommended = cards.find((c) => c.recommended) || cards[0];

  return {
    address,

    tariff,

    monthlyBill,

    monthlyUnits,

    houseArea,

    roofArea,

    usableRoofArea,

    maxRoofCapacity,

    roofWarning: recommendedKW >= maxRoofCapacity,

    recommendedKW,

    cost: recommended.cost,

    subsidy: recommended.subsidy,

    payable: recommended.payable,

    monthlyGeneration: recommended.monthlyGeneration,

    annualGeneration: recommended.annualGeneration,

    monthlySaving: recommended.monthlySaving,

    annualSaving: recommended.annualSaving,

    roi: recommended.roi,

    monthlyCO2: recommended.monthlyGeneration * 0.82,

    annualCO2: recommended.annualGeneration * 0.82,

    cards,
  };
}
