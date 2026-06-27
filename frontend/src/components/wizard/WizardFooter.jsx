import { useWizard } from "./WizardContext";

export default function WizardFooter() {
  const { step, setStep } = useWizard();

  return (
    <div className="flex gap-3 mt-6">
      {step > 1 && step < 5 && (
        <button
          className="flex-1 border rounded-lg py-3"
          onClick={() => setStep(step - 1)}
        >
          Previous
        </button>
      )}

      {step < 4 && (
        <button
          className="flex-1 bg-green-600 text-white rounded-lg py-3"
          onClick={() => setStep(step + 1)}
        >
          Next
        </button>
      )}

      {step === 4 && (
        <button
          className="flex-1 bg-green-600 text-white rounded-lg py-3"
          onClick={() => setStep(5)}
        >
          Purchase
        </button>
      )}
    </div>
  );
}
