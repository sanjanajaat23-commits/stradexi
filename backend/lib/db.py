from __future__ import annotations

import os
import sqlite3
from contextlib import contextmanager
from pathlib import Path
from typing import Any


BASE_DIR = Path(__file__).resolve().parent.parent

DATABASE_PATH = Path(
    os.getenv(
        "DATABASE_PATH",
        str(BASE_DIR / "stradexi.db"),
    )
)


def get_connection() -> sqlite3.Connection:
    DATABASE_PATH.parent.mkdir(parents=True, exist_ok=True)

    connection = sqlite3.connect(
        DATABASE_PATH,
        check_same_thread=False,
    )

    connection.row_factory = sqlite3.Row

    return connection


@contextmanager
def db_connection():
    connection = get_connection()

    try:
        yield connection
        connection.commit()
    except Exception:
        connection.rollback()
        raise
    finally:
        connection.close()


def initialize_database() -> None:
    with db_connection() as connection:
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                company TEXT NOT NULL,
                role TEXT,
                industry TEXT,
                process TEXT,
                pain TEXT,
                created_at TEXT NOT NULL,
                status TEXT NOT NULL DEFAULT 'new'
            )
            """
        )

        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS demo_runs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                workflow TEXT NOT NULL,
                created_at TEXT NOT NULL
            )
            """
        )


def insert_contact(data: dict[str, Any]) -> dict[str, Any]:
    with db_connection() as connection:
        cursor = connection.execute(
            """
            INSERT INTO contacts (
                name,
                email,
                company,
                role,
                industry,
                process,
                pain,
                created_at,
                status
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                data["name"],
                data["email"],
                data["company"],
                data.get("role", ""),
                data.get("industry", ""),
                data.get("process", ""),
                data.get("pain", ""),
                data["created_at"],
                "new",
            ),
        )

        contact_id = cursor.lastrowid

        row = connection.execute(
            """
            SELECT *
            FROM contacts
            WHERE id = ?
            """,
            (contact_id,),
        ).fetchone()

    return dict(row)


def list_contacts() -> list[dict[str, Any]]:
    with db_connection() as connection:
        rows = connection.execute(
            """
            SELECT *
            FROM contacts
            ORDER BY datetime(created_at) DESC
            """
        ).fetchall()

    return [dict(row) for row in rows]


def insert_demo_run(
    workflow: str,
    created_at: str,
) -> dict[str, Any]:
    with db_connection() as connection:
        cursor = connection.execute(
            """
            INSERT INTO demo_runs (
                workflow,
                created_at
            )
            VALUES (?, ?)
            """,
            (
                workflow,
                created_at,
            ),
        )

        run_id = cursor.lastrowid

    return {
        "id": run_id,
        "workflow": workflow,
        "created_at": created_at,
    }