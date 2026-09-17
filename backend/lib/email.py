from __future__ import annotations

import os
import smtplib
from email.message import EmailMessage
from typing import Any


def _smtp_configured() -> bool:
    required = [
        os.getenv("SMTP_HOST"),
        os.getenv("SMTP_USERNAME"),
        os.getenv("SMTP_PASSWORD"),
        os.getenv("SMTP_FROM"),
    ]

    return all(required)


def send_contact_notification(contact: dict[str, Any]) -> bool:
    """
    Sends a notification email when SMTP credentials are configured.

    If SMTP is not configured, the API continues to work and the submission
    remains stored in SQLite.
    """

    if not _smtp_configured():
        return False

    host = os.getenv("SMTP_HOST", "")
    port = int(os.getenv("SMTP_PORT", "587"))

    username = os.getenv("SMTP_USERNAME", "")
    password = os.getenv("SMTP_PASSWORD", "")
    sender = os.getenv("SMTP_FROM", "")
    recipient = os.getenv(
        "NOTIFY_EMAIL",
        "sanjanajaat23@gmail.com",
    )

    message = EmailMessage()

    message["Subject"] = (
        f"New STRADEXI workflow request — {contact['company']}"
    )
    message["From"] = sender
    message["To"] = recipient

    body = f"""
New STRADEXI workflow request

Name: {contact.get('name', '')}
Email: {contact.get('email', '')}
Company: {contact.get('company', '')}
Role: {contact.get('role', '')}
Industry: {contact.get('industry', '')}

Current process:
{contact.get('process', '')}

Biggest time sink:
{contact.get('pain', '')}

Submitted:
{contact.get('created_at', '')}
""".strip()

    message.set_content(body)

    try:
        with smtplib.SMTP(host, port, timeout=15) as smtp:
            smtp.starttls()
            smtp.login(username, password)
            smtp.send_message(message)

        return True

    except Exception:
        return False