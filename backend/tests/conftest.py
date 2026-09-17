import os

import pytest
from fastapi.testclient import TestClient


os.environ["DATABASE_PATH"] = "./test_stradexi.db"
os.environ["ADMIN_PASSWORD"] = "test-password"
os.environ["CORS_ORIGINS"] = "http://localhost:5173"


from server import app
from lib.db import initialize_database


@pytest.fixture(scope="session", autouse=True)
def setup_database():
    initialize_database()


@pytest.fixture
def client():
    with TestClient(app) as test_client:
        yield test_client