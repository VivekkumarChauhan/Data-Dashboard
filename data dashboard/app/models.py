from . import db

class SalesData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    sales = db.Column(db.Float, nullable=False)
    profit = db.Column(db.Float, nullable=False)
    region = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            "date": self.date,
            "sales": self.sales,
            "profit": self.profit,
            "region": self.region
        }
