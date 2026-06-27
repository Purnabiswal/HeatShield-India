const coolingOptions = [
  {
    id: "coolRoof",

    name: "Cool Roof Coating",

    icon: "🏠",

    description:
      "High solar reflectance coating that keeps the roof significantly cooler.",

    reductionMin: 2,

    reductionMax: 5,

    averageReduction: 4,

    costType: "sqm",

    cost: 250,

    source: "TERI",

    visual: "coolRoof",
  },

  {
    id: "trees",

    name: "Strategic Shade Trees",

    icon: "🌳",

    description: "Trees on west and south sides reduce direct solar heat gain.",

    reductionMin: 1,

    reductionMax: 3,

    averageReduction: 2,

    costType: "fixed",

    cost: 3000,

    source: "Indian Council of Forestry Research",

    visual: "trees",
  },

  {
    id: "roofInsulation",

    name: "Roof Insulation",

    icon: "🧱",

    description: "Insulation layer slows heat transfer through the roof.",

    reductionMin: 2,

    reductionMax: 4,

    averageReduction: 3,

    costType: "sqm",

    cost: 120,

    source: "Bureau of Energy Efficiency (BEE)",

    visual: "insulation",
  },

  {
    id: "doubleRoof",

    name: "Ventilated Double Roof",

    icon: "🏡",

    description:
      "Creates an air gap that dramatically reduces roof heat transfer.",

    reductionMin: 4,

    reductionMax: 8,

    averageReduction: 6,

    costType: "fixed",

    cost: 65000,

    source: "Passive Cooling Research",

    visual: "doubleRoof",
  },

  {
    id: "greenRoof",

    name: "Green Roof",

    icon: "🌿",

    description: "Vegetation provides insulation and evaporative cooling.",

    reductionMin: 3,

    reductionMax: 7,

    averageReduction: 5,

    costType: "sqm",

    cost: 2200,

    source: "IGBC",

    visual: "greenRoof",
  },

  {
    id: "jaali",

    name: "Jaali Ventilation",

    icon: "🪟",

    description:
      "Traditional perforated walls improve airflow while reducing solar gain.",

    reductionMin: 1,

    reductionMax: 3,

    averageReduction: 2,

    costType: "fixed",

    cost: 18000,

    source: "IIT Delhi",

    visual: "jaali",
  },

  {
    id: "coolPavement",

    name: "Cool Pavement",

    icon: "🪨",

    description:
      "Reflective paving materials reduce the surrounding heat island effect.",

    reductionMin: 1,

    reductionMax: 3,

    averageReduction: 2,

    costType: "sqm",

    cost: 450,

    source: "US EPA",

    visual: "coolPavement",
  },
];

export default coolingOptions;
