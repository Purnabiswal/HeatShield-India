const coolingOptions = [
  {
    id: "coolRoof",

    title: "Cool Roof Coating",

    description: "Reflective white coating that reduces roof heat absorption.",

    icon: "🏠",

    minReduction: 3,
    maxReduction: 5,

    costType: "sqm",

    costPerSqm: 250,

    modelEffect: "coolRoof",
  },

  {
    id: "solar",

    title: "Rooftop Solar",

    description: "Solar panels shade the roof while generating electricity.",

    icon: "☀️",

    minReduction: 1,
    maxReduction: 2,

    costType: "none",

    costPerSqm: 0,

    modelEffect: "solar",
  },

  {
    id: "trees",

    title: "Tree Plantation",

    description:
      "Strategically planted shade trees reduce west and south heat gain.",

    icon: "🌳",

    minReduction: 2,
    maxReduction: 4,

    costType: "fixed",

    fixedCost: 12000,

    modelEffect: "trees",
  },

  {
    id: "ventilation",

    title: "Roof Ventilation",

    description: "Passive ventilation removes trapped hot air from the roof.",

    icon: "💨",

    minReduction: 1,
    maxReduction: 2,

    costType: "fixed",

    fixedCost: 18000,

    modelEffect: "ventilation",
  },

  {
    id: "reflectiveTiles",

    title: "Reflective Roof Tiles",

    description: "High solar reflectance roof tiles reduce heat transfer.",

    icon: "🧱",

    minReduction: 2,
    maxReduction: 4,

    costType: "sqm",

    costPerSqm: 900,

    modelEffect: "reflectiveTiles",
  },

  {
    id: "greenRoof",

    title: "Green Roof",

    description:
      "Vegetation layer provides insulation and evaporative cooling.",

    icon: "🌿",

    minReduction: 3,
    maxReduction: 7,

    costType: "sqm",

    costPerSqm: 2200,

    modelEffect: "greenRoof",
  },

  {
    id: "doubleRoof",

    title: "Ventilated Double Roof",

    description: "Secondary roof creates an insulating air gap.",

    icon: "🏡",

    minReduction: 4,
    maxReduction: 8,

    costType: "sqm",

    costPerSqm: 650,

    modelEffect: "doubleRoof",
  },

  {
    id: "bamboo",

    title: "Bamboo Shade Structure",

    description: "Traditional bamboo canopy blocks direct sunlight.",

    icon: "🎋",

    minReduction: 2,
    maxReduction: 4,

    costType: "fixed",

    fixedCost: 35000,

    modelEffect: "bamboo",
  },
];

export default coolingOptions;
