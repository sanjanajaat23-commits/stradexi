import { FormEvent, useState } from "react";
import { LoaderCircle, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/lib/api";

interface FormState {
  name: string;
  email: string;
  company: string;
  role: string;
  industry: string;
  process: string;
  pain: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  industry: "",
  process: "",
  pain: "",
};

export function ContactForm({
  onSubmitted,
}: {
  onSubmitted?: () => void;
}) {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.company) {
      toast.error("Please complete your name, work email and company.");
      return;
    }

    setSubmitting(true);

    try {
      await submitContact(form);

      toast.success("Workflow request submitted.");
      setForm(initialState);
      onSubmitted?.();
    } catch {
      toast.error(
        "The request could not be submitted right now. Please use the booking link instead."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Work email *</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@company.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company *</Label>
          <Input
            id="company"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Company name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Input
            id="role"
            value={form.role}
            onChange={(e) => update("role", e.target.value)}
            placeholder="Operations / Founder / Recruiting"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="industry">Industry</Label>

          <Select
            id="industry"
            value={form.industry}
            onChange={(e) => update("industry", e.target.value)}
          >
            <option value="">Select your industry</option>
            <option value="Healthcare Staffing">Healthcare Staffing</option>
            <option value="Logistics">Logistics</option>
            <option value="Recruiting">Recruiting</option>
            <option value="B2B Operations">B2B Operations</option>
            <option value="Sales / CRM">Sales / CRM</option>
            <option value="Other">Other</option>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="process">Current process</Label>
          <Textarea
            id="process"
            value={form.process}
            onChange={(e) => update("process", e.target.value)}
            placeholder="Describe the process your team currently handles manually..."
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="pain">Biggest time sink</Label>
          <Textarea
            id="pain"
            value={form.pain}
            onChange={(e) => update("pain", e.target.value)}
            placeholder="What repetitive work consumes the most time?"
          />
        </div>
      </div>

      <Button type="submit" size="lg" disabled={submitting}>
        {submitting ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" />
            SUBMITTING...
          </>
        ) : (
          <>
            BUILD MY AUTOMATION
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}