
export const CUSTOMER_CATEGORY = {
  RESIDENTIAL: "Residential",
  COMMERCIAL: "Commercial",
  INDUSTRIAL: "Industrial",
  INSTITUTIONAL: "Institutional",
  AGRICULTURAL: "Agricultural",
};

export const ROOF_UTILIZATION_FACTOR = 0.7;
export const UNITS_PER_KW = 120;
export const ROOF_AREA_PER_KW = 9;
export const CO2_PER_UNIT = 0.82;

/* State Tariff */
export const STATE_TARIFF = {
  "Andhra Pradesh": 7.6,
  "Arunachal Pradesh": 6.5,
  "Assam": 7,
  "Bihar": 7,
  "Chhattisgarh": 6.8,
  "Delhi": 8,
  "Goa": 7.8,
  "Gujarat": 7.5,
  "Haryana": 7.8,
  "Himachal Pradesh": 6.5,
  "Jharkhand": 7,
  "Karnataka": 8.5,
  "Kerala": 7.8,
  "Madhya Pradesh": 7.2,
  "Maharashtra": 9,
  "Manipur": 6.5,
  "Meghalaya": 6.5,
  "Mizoram": 6,
  "Nagaland": 6.5,
  "Odisha": 7,
  "Punjab": 8,
  "Rajasthan": 7.5,
  "Sikkim": 6.5,
  "Tamil Nadu": 8,
  "Telangana": 8.2,
  "Tripura": 6.5,
  "Uttar Pradesh": 7.5,
  "Uttarakhand": 7,
  "West Bengal": 7.5,
};
// export const STATE_TARIFF = {
//   Andhra Pradesh: 7.6,
//   Arunachal Pradesh: 6.5,
//   Assam: 7,
//   Bihar: 7,
//   Chhattisgarh: 6.8,
//   Delhi: 8,
//   Goa: 7.8,
//   Gujarat: 7.5,
//   Haryana: 7.8,
//   Himachal Pradesh: 6.5,
//   Jharkhand: 7,
//   Karnataka: 8.5,
//   Kerala: 7.8,
//   Madhya Pradesh: 7.2,
//   Maharashtra: 9,
//   Manipur: 6.5,
//   Meghalaya: 6.5,
//   Mizoram: 6,
//   Nagaland: 6.5,
//   Odisha: 7,
//   Punjab: 8,
//   Rajasthan: 7.5,
//   Sikkim: 6.5,
//   Tamil Nadu: 8,
//   Telangana: 8.2,
//   Tripura: 6.5,
//   Uttar Pradesh: 7.5,
//   Uttarakhand: 7,
//   West Bengal: 7.5,
// };

export const getTariff = (state) => STATE_TARIFF[state] ?? 7;

/* Solar Pricing */

export const SOLAR_PRICING = {
  1: 65000,
  2: 130000,
  3: 180000,
  4: 240000,
  5: 270000,
  6: 330000,
  7: 360000,
  8: 420000,
  9: 470000,
  10: 520000,
};

const getPrice = (kw) =>
  SOLAR_PRICING[Math.min(Math.max(kw, 1), 10)] ?? 520000;

/* -------------------- Central Subsidy -------------------- */

const CENTRAL_SUBSIDY = {
  1: 30000,
  2: 60000,
  3: 78000,
};

const getSubsidy = (kw, category) => {
  if (category !== CUSTOMER_CATEGORY.RESIDENTIAL) return 0;
  return kw <= 2
    ? CENTRAL_SUBSIDY[kw]
    : kw >= 3
    ? CENTRAL_SUBSIDY[3]
    : 0;
};

/* -------------------- Main Calculator -------------------- */

export function calculateSolar({
  houseArea,
  monthlyBill,
  state,
  customerCategory = CUSTOMER_CATEGORY.RESIDENTIAL,
}) {
  const tariff = getTariff(state);

  const usableRoofArea = houseArea * ROOF_UTILIZATION_FACTOR;

  const monthlyUnits = monthlyBill / tariff;

  const requiredKW = Math.ceil(monthlyUnits / UNITS_PER_KW);

  const maxRoofCapacity = Math.floor(usableRoofArea / ROOF_AREA_PER_KW);

  const recommendedKW = Math.max(
    1,
    Math.min(requiredKW, Math.max(maxRoofCapacity, 1))
  );

  const monthlyGeneration = recommendedKW * UNITS_PER_KW;

  const annualGeneration = monthlyGeneration * 12;

  const monthlySaving = Math.min(monthlyGeneration, monthlyUnits) * tariff;

  const annualSaving = monthlySaving * 12;

  const cost = getPrice(recommendedKW);

  const subsidy = getSubsidy(recommendedKW, customerCategory);

  const payable = cost - subsidy;

  const roi = annualSaving ? payable / annualSaving : 0;

  const monthlyCO2 = monthlyGeneration * CO2_PER_UNIT;

  const annualCO2 = monthlyCO2 * 12;

  return {
    tariff,
    usableRoofArea,
    monthlyUnits,
    requiredKW,
    maxRoofCapacity,
    recommendedKW,
    roofWarning: requiredKW > maxRoofCapacity,
    cost,
    subsidy,
    payable,
    monthlyGeneration,
    annualGeneration,
    monthlySaving,
    annualSaving,
    roi,
    monthlyCO2,
    annualCO2,
  };
}