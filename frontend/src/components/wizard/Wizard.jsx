import { WizardProvider, useWizard } from "./WizardContext";

import Step1Heat from "./steps/Step1Heat";
import Step2Solar from "./steps/Step2Solar";
import Step3Summary from "./steps/Step3Summary";
import Step4Order from "./steps/Step4Order";
import Step5Complete from "./steps/Step5Complete";

import WizardFooter from "./WizardFooter";

function WizardBody() {
  const { step } = useWizard();

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Progress */}

      <div className="border-b p-6">
        <div className="flex justify-between text-sm mb-2">
          <span>Planning Progress</span>

          <span>{Math.min(step, 4)}/4</span>
        </div>

        <div className="h-2 rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-green-600 transition-all"
            style={{
              width: `${Math.min(step, 4) * 25}%`,
            }}
          />
        </div>
      </div>

      {/* Step */}

      <div className="flex-1 overflow-y-auto p-6">
        {step === 1 && <Step1Heat />}

        {step === 2 && <Step2Solar />}

        {step === 3 && <Step3Summary />}

        {step === 4 && <Step4Order />}

        {step === 5 && <Step5Complete />}
      </div>

      {step < 5 && (
        <div className="border-t p-6">
          <WizardFooter />
        </div>
      )}
    </div>
  );
}

export default function Wizard(props) {
  return (
    <WizardProvider initialData={props}>
      <WizardBody />
    </WizardProvider>
  );
}
