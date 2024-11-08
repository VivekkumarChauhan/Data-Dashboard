from flask import render_template, jsonify
from . import db
from .models import SalesData

def init_routes(app):  # Initialize routes with the app instance
    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/sales-data")
    def sales_data():
        # Fetching sales data from the database
        data = SalesData.query.all()
        return jsonify([item.to_dict() for item in data])

    @app.route("/sales")
    def sales():
        # Example sales data if you want to hardcode it
        sales_data = [
            {"date": "2024-01-01", "value": 1000},
            {"date": "2024-01-02", "value": 1200},
            {"date": "2024-01-03", "value": 800},
            {"date": "2024-01-04", "value": 1500},
            {"date": "2024-01-05", "value": 1700},
            {"date": "2024-01-06", "value": 1300},
            {"date": "2024-01-07", "value": 1900},
        ]
        return render_template('sales.html', sales_data=sales_data)

    @app.route("/analytics")  # Single definition for the analytics route
    def analytics():
        print("Analytics route accessed")  # Debug print
        return render_template("analytics.html")  # Create an analytics.html template
