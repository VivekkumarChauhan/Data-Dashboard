import os
from app import create_app
from dotenv import load_dotenv

# Load environment variables from .env file if it exists
load_dotenv()

# Create the Flask application
app = create_app()

if __name__ == "__main__":
    # Set the host and port
    host = os.getenv("FLASK_HOST", "0.0.0.0")  # Default to all interfaces
    port = int(os.getenv("FLASK_PORT", 5000))  # Default port is 5000

    # Run the application
    app.run(host=host, port=port, debug=True)
