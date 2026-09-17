import { CheckCircle2, Mail } from "lucide-react";

import { Card } from "@/components/ui/card";

export function ReplyPanel({
  submitted = false,
}: {
  submitted?: boolean;
}) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/6">
          {submitted ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-300" />
          ) : (
            <Mail className="h-5 w-5 text-emerald-300" />
          )}
        </div>

        <div>
          <div className="text-sm font-semibold text-white">
            {submitted ? "Request received" : "What happens next"}
          </div>

          <p className="mt-1 text-xs leading-5 text-white/40">
            {submitted
              ? "Your workflow information has been captured. We'll use it to understand where automation can remove repetitive work."
              : "Once you submit your workflow details, the next conversation can focus on the actual process instead of a generic software pitch."}
          </p>
        </div>
      </div>
    </Card>
  );
}