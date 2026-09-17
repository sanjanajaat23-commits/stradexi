from __future__ import annotations

from typing import Any

from .db import insert_demo_run
from .dates import utc_now_iso


def record_demo(workflow: str) -> dict[str, Any]:
    if not workflow.strip():
        raise ValueError("Workflow is required.")

    return insert_demo_run(
        workflow=workflow.strip(),
        created_at=utc_now_iso(),
    )


def demo_definition(workflow: str) -> dict[str, Any]:
    definitions = {
        "healthcare-staffing-demo": [
            "Candidate Applies",
            "Resume Parsed",
            "AI Screening",
            "Job Matching",
            "Recruiter Alert",
        ],
        "logistics-demo": [
            "Shipment Update",
            "Exception Detected",
            "Operations Alert",
            "TMS Updated",
            "Customer Notification",
        ],
    }

    steps = definitions.get(
        workflow,
        [
            "Trigger",
            "Extract",
            "Decide",
            "Execute",
            "Notify",
        ],
    )

    return {
        "workflow": workflow,
        "steps": steps,
        "mode": "simulation",
    }