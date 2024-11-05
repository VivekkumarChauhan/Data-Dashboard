import pytest
from app import db
from app.models import SalesData

@pytest.fixture
def client():
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client

def test_sales_data_model(client):
    sales_data = SalesData(date="2024-01-01", value=1000)
    db.session.add(sales_data)
    db.session.commit()
    
    assert sales_data.id is not None
    retrieved_data = SalesData.query.first()
    assert retrieved_data.date == "2024-01-01"
    assert retrieved_data.value == 1000
