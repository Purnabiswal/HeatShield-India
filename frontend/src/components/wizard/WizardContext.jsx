import { createContext, useContext, useState } from "react";

const WizardContext = createContext();

export function WizardProvider({ children, initialData }) {
  const [step, setStep] = useState(1);
  

  const [wizardData, setWizardData] = useState({
    location: {
      address: initialData?.address || "",
      city: initialData?.city || "",
      state: initialData?.state || "",
      outdoorTemp: initialData?.outdoorTemp || 42,
      monthlyBill: initialData?.monthlyBill || 2500,
      customerCategory: "Residential",
    },

    house: {
      area: initialData?.houseArea || 120,
      usableRoofArea: 0,
    },

    cooling: {
      selected: [],
      reduction: 0,
      indoorTemperature: 0,
      cost: 0,
    },

    solar: {
      recommendedKW: 0,
      selectedKW: 0,

      roofArea: 0,

      monthlyGeneration: 0,
      annualGeneration: 0,

      monthlySaving: 0,
      annualSaving: 0,

      subsidy: 0,

      cost: 0,
      payable: 0,

      roi: 0,

      monthlyCarbonReduction: 0,
      annualCarbonReduction: 0,
    },
  });
  // const [wizardData, setWizardData] = useState({
  //   location: {
  //     address: initialData?.address || "",
  //     city: initialData?.city || "",
  //     state: initialData?.state || "",
  //     outdoorTemp: initialData?.outdoorTemp || 42,
  //   },

  //   house: {
  //     area: initialData?.houseArea || 120,
  //     usableRoofArea: 0,
  //   },

  //   cooling: {
  //     selected: [],
  //     reduction: 0,
  //     cost: 0,
  //   },

  //   solar: {
  //     recommendedKW: 0,
  //     selectedKW: 0,
  //     generation: 0,
  //     subsidy: 0,
  //     cost: 0,
  //     payable: 0,
  //     saving: 0,
  //   },
  // });

  function updateSection(section, values) {
    setWizardData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...values,
      },
    }));
  }

  return (
    <WizardContext.Provider
      value={{
        step,
        setStep,
        wizardData,
        updateSection,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  return useContext(WizardContext);
}
