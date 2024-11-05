import pytest
from app import app, db
from app.models import SalesData

@pytest.fixture
def client():
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    with app.test_client() as client:
        with app.app_context():
            db.create_all()  # Create the database schema
        yield client

def test_index(client):
    response = client.get('/')
    assert response.status_code == 200
    assert b'Welcome to the Dashboard' in response.data  # Update with actual content

def test_sales(client):
    response = client.get('/sales')
    assert response.status_code == 200
    assert b'Sales Dashboard' in response.data  # Update with actual content

def test_sales_data(client):
    # Add a sample sales data to the in-memory database
    sample_data = SalesData(date="2024-01-01", value=1000)
    db.session.add(sample_data)
    db.session.commit()
    
    response = client.get('/sales-data')
    assert response.status_code == 200
    json_data = response.get_json()
    assert len(json_data) > 0
    assert json_data[0]['date'] == "2024-01-01"
    assert json_data[0]['value'] == 1000
