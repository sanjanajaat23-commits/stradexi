from __future__ import annotations

import os
from contextlib import asynccontextmanager

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from lib.db import initialize_database
from lib.cal import get_calcom_booking_url
from routers.admin import router as admin_router
from routers.contacts import router as contacts_router
from routers.demo import router as demo_router


load_dotenv()


APP_NAME = os.getenv(
    "APP_NAME",
    "STRADEXI API",
)


def get_cors_origins() -> list[str]:
    configured = os.getenv(
        "CORS_ORIGINS",
        "http://localhost:5173",
    )

    return [
        origin.strip()
        for origin in configured.split(",")
        if origin.strip()
    ]


@asynccontextmanager
async def lifespan(app: FastAPI):
    initialize_database()
    yield


app = FastAPI(
    title=APP_NAME,
    version="1.0.0",
    description=(
        "STRADEXI intelligent workflow systems API."
    ),
    lifespan=lifespan,
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=get_cors_origins(),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(contacts_router)
app.include_router(demo_router)
app.include_router(admin_router)


@app.get("/")
async def root():
    return {
        "name": "STRADEXI API",
        "status": "online",
        "version": "1.0.0",
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy",
    }


@app.get("/api/booking")
async def booking():
    return {
        "url": await get_calcom_booking_url(),
    }