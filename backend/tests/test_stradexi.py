def test_root(client):
    response = client.get("/")

    assert response.status_code == 200

    data = response.json()

    assert data["name"] == "STRADEXI API"
    assert data["status"] == "online"


def test_health(client):
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json()["status"] == "healthy"


def test_demo_definition(client):
    response = client.get(
        "/api/demo/healthcare-staffing-demo"
    )

    assert response.status_code == 200

    data = response.json()

    assert data["mode"] == "simulation"
    assert len(data["steps"]) == 5


def test_demo_run(client):
    response = client.post(
        "/api/demo/run",
        json={
            "workflow": "healthcare-staffing-demo",
        },
    )

    assert response.status_code == 200

    data = response.json()

    assert data["success"] is True
    assert data["run"]["workflow"] == (
        "healthcare-staffing-demo"
    )


def test_contact_submission(client):
    response = client.post(
        "/api/contacts",
        json={
            "name": "Test User",
            "email": "test@example.com",
            "company": "Test Company",
            "role": "Operations",
            "industry": "Logistics",
            "process": "Manual shipment updates",
            "pain": "Copying data between systems",
        },
    )

    assert response.status_code == 200

    data = response.json()

    assert data["success"] is True
    assert data["contact"]["name"] == "Test User"


def test_admin_requires_auth(client):
    response = client.get("/api/admin/contacts")

    assert response.status_code == 401


def test_admin_with_auth(client):
    response = client.get(
        "/api/admin/contacts",
        headers={
            "Authorization": "Bearer test-password",
        },
    )

    assert response.status_code == 200

    data = response.json()

    assert "items" in data