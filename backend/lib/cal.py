from __future__ import annotations

import os
from typing import Any

import httpx


CALCOM_API_URL = os.getenv(
    "CALCOM_API_URL",
    "https://api.cal.com/v2",
).rstrip("/")


def _headers() -> dict[str, str]:
    api_key = os.getenv("CALCOM_API_KEY", "")

    headers = {
        "Content-Type": "application/json",
    }

    if api_key:
        headers["Authorization"] = f"Bearer {api_key}"

    return headers


async def get_calcom_event_types() -> list[dict[str, Any]]:
    api_key = os.getenv("CALCOM_API_KEY")

    if not api_key:
        return []

    async with httpx.AsyncClient(timeout=15) as client:
        response = await client.get(
            f"{CALCOM_API_URL}/event-types",
            headers=_headers(),
        )

    if response.status_code >= 400:
        return []

    data = response.json()

    if isinstance(data, dict):
        return data.get("data", [])

    return []


async def get_calcom_booking_url() -> str:
    """
    Returns the configured STRADEXI booking URL.

    The public URL remains useful even when the API key is not configured.
    """

    return "https://cal.com/sanjana-jaat-kuifve/30min"