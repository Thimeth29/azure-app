import os
from urllib.parse import quote_plus

from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()


class Config:
    # Flask Configuration
    SECRET_KEY = os.getenv("SECRET_KEY", "fallback_secure_random_key")

    # Database Configuration - Read directly from environment
    SQLALCHEMY_DATABASE_URI = None  # Will be set dynamically
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    def __init__(self):
        # Set the database URI when the config is instantiated
        self.SQLALCHEMY_DATABASE_URI = self.get_database_uri()

    # Connection pool settings for MySQL (optional optimization)
    def get_engine_options(self):
        db_type = os.getenv("DB_TYPE", "sqlite").lower()
        if db_type == "mysql":
            return {
                "pool_pre_ping": True,
                "pool_recycle": 3600,
                "pool_timeout": 20,
                "max_overflow": 20,
            }
        return {}

    @staticmethod
    def get_database_uri():
        """
        Returns the appropriate database URI based on environment configuration
        """
        db_type = os.getenv("DB_TYPE", "sqlite").lower()

        if db_type == "mysql":
            # Check if using AWS RDS
            endpoint = os.getenv("RDS_ENDPOINT")
            port = os.getenv("RDS_PORT", "3306")
            username = os.getenv("RDS_USERNAME")
            password = os.getenv("RDS_PASSWORD")
            database = os.getenv("RDS_DATABASE")

            if endpoint and username and password and database:
                # AWS RDS MySQL connection
                password_encoded = quote_plus(password)
                return f"mysql+pymysql://{username}:{password_encoded}@{endpoint}:{port}/{database}"
            else:
                # Local MySQL connection
                host = os.getenv("MYSQL_HOST", "localhost")
                port = os.getenv("MYSQL_PORT", "3306")
                user = os.getenv("MYSQL_USER", "root")
                password = os.getenv("MYSQL_PASSWORD", "")
                database = os.getenv("MYSQL_DATABASE", "your_app_db")

                if password:
                    password_encoded = quote_plus(password)
                    return f"mysql+pymysql://{user}:{password_encoded}@{host}:{port}/{database}"
                else:
                    return f"mysql+pymysql://{user}@{host}:{port}/{database}"
        else:
            # Default to SQLite
            db_path = os.getenv("SQLITE_DB_PATH", "users.db")
            # Handle instance directory for SQLite
            if (
                not db_path.startswith("/")
                and not db_path.startswith("\\")
                and ":" not in db_path
            ):
                # Relative path - always use instance directory for Flask apps
                # Get the absolute path to ensure it works on Windows
                base_dir = os.path.abspath(os.path.dirname(__file__))
                instance_dir = os.path.join(base_dir, "instance")
                # Ensure instance directory exists
                if not os.path.exists(instance_dir):
                    os.makedirs(instance_dir, exist_ok=True)
                # Create absolute path to database file
                db_path = os.path.join(instance_dir, db_path)
            # Convert to absolute path if not already
            if not os.path.isabs(db_path):
                db_path = os.path.abspath(db_path)
            # Ensure directory exists
            db_dir = os.path.dirname(db_path)
            if db_dir and not os.path.exists(db_dir):
                os.makedirs(db_dir, exist_ok=True)
            # Convert Windows backslashes to forward slashes for SQLite URI
            # SQLite URIs require forward slashes even on Windows
            db_path = db_path.replace("\\", "/")
            # For Windows absolute paths (C:/...), we need three slashes: sqlite:///C:/...
            # For relative paths, we also need three slashes: sqlite:///path
            return f"sqlite:///{db_path}"


class DevelopmentConfig(Config):
    DEBUG = True
    FLASK_ENV = "development"

    def __init__(self):
        super().__init__()
        self.SQLALCHEMY_ENGINE_OPTIONS = self.get_engine_options()


class ProductionConfig(Config):
    DEBUG = False
    FLASK_ENV = "production"

    def __init__(self):
        super().__init__()
        self.SQLALCHEMY_ENGINE_OPTIONS = self.get_engine_options()


class TestingConfig(Config):
    TESTING = True
    DEBUG = True
    FLASK_ENV = "testing"

    def __init__(self):
        super().__init__()
        self.SQLALCHEMY_DATABASE_URI = "sqlite:///test_users.db"
        self.SQLALCHEMY_ENGINE_OPTIONS = {}


# Configuration dictionary
config = {
    "development": DevelopmentConfig,
    "production": ProductionConfig,
    "testing": TestingConfig,
    "default": DevelopmentConfig,
}


# Function to get config based on environment
def get_config():
    env = os.getenv("FLASK_ENV", "development")
    config_class = config.get(env, config["default"])
    return config_class()
