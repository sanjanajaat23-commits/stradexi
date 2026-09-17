from __future__ import annotations

from typing import Optional

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr, Field

from lib.db import insert_contact
from lib.dates import utc_now_iso
from lib.email import send_contact_notification


router = APIRouter(
    prefix="/api/contacts",
    tags=["contacts"],
)


class ContactRequest(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    company: str = Field(min_length=1, max_length=180)
    role: Optional[str] = Field(default="", max_length=120)
    industry: Optional[str] = Field(default="", max_length=120)
    process: Optional[str] = Field(default="", max_length=5000)
    pain: Optional[str] = Field(default="", max_length=5000)


@router.post("")
async def create_contact(payload: ContactRequest):
    contact_data = payload.model_dump()

    contact_data["email"] = str(payload.email)
    contact_data["created_at"] = utc_now_iso()

    try:
        contact = insert_contact(contact_data)
    except Exception as exc:
        raise HTTPException(
            status_code=500,
            detail="Unable to save contact submission.",
        ) from exc

    email_sent = send_contact_notification(contact)

    return {
        "success": True,
        "contact": contact,
        "notification_sent": email_sent,
    }