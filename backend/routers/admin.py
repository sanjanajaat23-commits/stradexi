import os
from datetime import datetime, timedelta, timezone

import jwt
from fastapi import APIRouter, Depends, HTTPException, Header
from pydantic import BaseModel

from lib.db import list_contacts


router = APIRouter(prefix="/api/admin", tags=["admin"])


ALGORITHM = "HS256"
TOKEN_EXPIRY_HOURS = 8


class AdminLoginRequest(BaseModel):
    password: str


class AdminLoginResponse(BaseModel):
    token: str
    expires_in: int


def get_admin_secret() -> str:
    secret = os.getenv("ADMIN_SESSION_SECRET")

    if not secret:
        raise RuntimeError(
            "ADMIN_SESSION_SECRET is not configured."
        )

    return secret


def create_token() -> str:
    now = datetime.now(timezone.utc)
    expires = now + timedelta(hours=TOKEN_EXPIRY_HOURS)

    payload = {
        "sub": "stradexi-admin",
        "iat": now,
        "exp": expires,
    }

    return jwt.encode(
        payload,
        get_admin_secret(),
        algorithm=ALGORITHM,
    )


def verify_token(authorization: str | None) -> None:
    if not authorization:
        raise HTTPException(
            status_code=401,
            detail="Missing authorization token.",
        )

    if not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=401,
            detail="Invalid authorization header.",
        )

    token = authorization.replace("Bearer ", "", 1).strip()
    configured_password = os.getenv("ADMIN_PASSWORD")

    if configured_password and token == configured_password:
        return

    try:
        payload = jwt.decode(
            token,
            get_admin_secret(),
            algorithms=[ALGORITHM],
        )

        if payload.get("sub") != "stradexi-admin":
            raise HTTPException(
                status_code=401,
                detail="Invalid admin session.",
            )

    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=401,
            detail="Admin session expired.",
        )

    except jwt.InvalidTokenError:
        raise HTTPException(
            status_code=401,
            detail="Invalid admin session.",
        )


@router.post("/login", response_model=AdminLoginResponse)
def login(payload: AdminLoginRequest):
    configured_password = os.getenv("ADMIN_PASSWORD")

    if not configured_password:
        raise HTTPException(
            status_code=503,
            detail="Admin authentication is not configured.",
        )

    if payload.password != configured_password:
        raise HTTPException(
            status_code=401,
            detail="Incorrect password.",
        )

    token = create_token()

    return {
        "token": token,
        "expires_in": TOKEN_EXPIRY_HOURS * 60 * 60,
    }


@router.get("/contacts")
def get_contacts(
    authorization: str | None = Header(default=None),
):
    verify_token(authorization)

    return {
        "items": list_contacts(),
    }