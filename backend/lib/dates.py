from datetime import datetime, timezone


def utc_now() -> datetime:
    return datetime.now(timezone.utc)


def utc_now_iso() -> str:
    return utc_now().isoformat()


def parse_datetime(value: str) -> datetime:
    normalized = value.replace("Z", "+00:00")

    parsed = datetime.fromisoformat(normalized)

    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=timezone.utc)

    return parsed