export interface DemoWorkflowStep {
  id: string;
  title: string;
  description: string;
}

export const healthcareDemo: DemoWorkflowStep[] = [
  {
    id: "apply",
    title: "Candidate Applies",
    description:
      "A new candidate enters the workflow through an inbound source.",
  },
  {
    id: "parse",
    title: "Resume Parsed",
    description:
      "Relevant resume information is extracted into structured fields.",
  },
  {
    id: "screen",
    title: "AI Screening",
    description:
      "The workflow evaluates predefined criteria and produces a screening result.",
  },
  {
    id: "match",
    title: "Job Matching",
    description:
      "Candidate attributes are compared against available opportunities.",
  },
  {
    id: "notify",
    title: "Recruiter Alert",
    description:
      "The recruiter receives an actionable notification.",
  },
];