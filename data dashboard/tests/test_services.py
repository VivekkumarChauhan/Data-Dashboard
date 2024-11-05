import pytest
from app.services import process_sales_data  # Example function

def test_process_sales_data():
    raw_data = [
        {"date": "2024-01-01", "value": 1000},
        {"date": "2024-01-02", "value": 1200},
    ]
    processed_data = process_sales_data(raw_data)
    assert len(processed_data) == 2
    assert processed_data[0]['value'] == 1000  # Update based on your processing logic
