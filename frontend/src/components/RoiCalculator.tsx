import { useMemo, useState } from "react";
import { Calculator, Clock3, DollarSign, Users } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function RoiCalculator() {
  const [people, setPeople] = useState(5);
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(35);

  const result = useMemo(() => {
    const weeklyHours = people * hours;
    const weeklyCost = weeklyHours * rate;
    const monthlyCost = weeklyCost * 4.33;

    return {
      weeklyHours,
      monthlyHours: Math.round(weeklyHours * 4.33),
      monthlyCost: Math.round(monthlyCost),
      annualCost: Math.round(monthlyCost * 12),
    };
  }, [people, hours, rate]);

  return (
    <Card className="overflow-hidden">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-white/7 p-7 lg:border-b-0 lg:border-r">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/6">
            <Calculator className="h-5 w-5 text-emerald-300" />
          </div>

          <h3 className="mt-5 text-xl font-semibold text-white">
            Estimate the cost of repetitive work
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/40">
            Illustrative estimate only. Change the assumptions to model your
            own team's manual workload.
          </p>

          <div className="mt-7 space-y-5">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs text-white/55">
                  People involved
                </label>
                <span className="font-mono text-xs text-white">
                  {people}
                </span>
              </div>

              <Input
                type="number"
                min={1}
                max={100}
                value={people}
                onChange={(e) => setPeople(Number(e.target.value) || 1)}
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs text-white/55">
                  Hours / person / week
                </label>
                <span className="font-mono text-xs text-white">
                  {hours}
                </span>
              </div>

              <Input
                type="number"
                min={1}
                max={80}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value) || 1)}
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs text-white/55">
                  Loaded hourly cost
                </label>
                <span className="font-mono text-xs text-white">
                  ${rate}
                </span>
              </div>

              <Input
                type="number"
                min={10}
                max={500}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value) || 10)}
              />
            </div>
          </div>
        </div>

        <div className="p-7">
          <div className="font-mono text-[9px] tracking-[0.2em] text-white/25 uppercase">
            Illustrative workload estimate
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Metric
              icon={Users}
              label="People involved"
              value={`${people}`}
            />

            <Metric
              icon={Clock3}
              label="Monthly manual hours"
              value={`${result.monthlyHours}`}
            />

            <Metric
              icon={DollarSign}
              label="Estimated monthly labor"
              value={`$${result.monthlyCost.toLocaleString()}`}
            />

            <Metric
              icon={Calculator}
              label="Estimated annual labor"
              value={`$${result.annualCost.toLocaleString()}`}
            />
          </div>

          <div className="mt-5 rounded-xl border border-emerald-400/10 bg-emerald-400/2.5 p-5">
            <div className="text-sm font-medium text-white">
              What automation changes
            </div>

            <p className="mt-2 text-xs leading-5 text-white/40">
              The purpose of the exercise is not to assume every hour
              disappears. It is to identify which repetitive steps can be
              handled by software so the team can spend more time on work that
              requires judgment.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Users;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/6 bg-black/15 p-4">
      <Icon className="h-4 w-4 text-emerald-300/80" />
      <div className="mt-4 text-lg font-semibold text-white">{value}</div>
      <div className="mt-1 text-[10px] text-white/30">{label}</div>
    </div>
  );
}