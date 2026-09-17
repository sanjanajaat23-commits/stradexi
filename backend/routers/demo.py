from __future__ import annotations

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from lib.demo import demo_definition, record_demo

router = APIRouter(
    prefix="/api/demo",
    tags=["demo"],
)


class DemoRunRequest(BaseModel):
    workflow: str = Field(
        min_length=1,
        max_length=120,
    )


@router.post("/run")
async def run_demo(payload: DemoRunRequest):
    try:
        run = record_demo(payload.workflow)
    except ValueError as exc:
        raise HTTPException(
            status_code=400,
            detail=str(exc),
        ) from exc

    return {
        "success": True,
        "run": run,
        "workflow": demo_definition(payload.workflow),
    }


@router.get("/{workflow}")
async def get_demo(workflow: str):
    return demo_definition(workflow)