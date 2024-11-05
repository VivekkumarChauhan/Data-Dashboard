import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_sales_ui(client):
    response = client.get('/sales')
    assert response.status_code == 200
    assert b'Sales Dashboard' in response.data  # Check if the title is present
    assert b'canvas' in response.data  # Ensure the canvas element for the chart is present
