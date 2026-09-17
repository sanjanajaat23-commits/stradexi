import { useCallback, useState } from "react";
import { recordDemoRun } from "@/lib/api";

interface DemoRunResult {
  success: boolean;
  message?: string;
  workflow?: string;
}

export function useDemoRun() {
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);
  const [result, setResult] = useState<DemoRunResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const run = useCallback(async () => {
    setRunning(true);
    setStep(0);
    setComplete(false);
    setResult(null);
    setError(null);

    try {
      const response = await recordDemoRun({ workflow: "demo" });

      setResult({
        success: true,
        message:
          response?.message || "Workflow completed successfully.",
        workflow: "demo",
      });
      setStep(0);
      setComplete(true);
      return response;
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Unable to run the workflow.";

      setError(message);
      throw err;
    } finally {
      setRunning(false);
    }
  }, []);

  const reset = useCallback(() => {
    setRunning(false);
    setStep(0);
    setComplete(false);
    setResult(null);
    setError(null);
  }, []);

  return {
    running,
    step,
    complete,
    run,
    reset,
    result,
    error,
  };
}