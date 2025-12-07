from datetime import datetime, timedelta

import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler


class MarketPredictor:
    """
    A stateless predictor for market prices and profits.
    It receives historical data, trains a model on-the-fly, and makes predictions.
    Data persistence is handled by the main application.
    """

    def __init__(self):
        # The models and scalers are temporary for each prediction request.
        self.price_model = LinearRegression()
        self.profit_model = LinearRegression()
        self.price_scaler = StandardScaler()
        self.profit_scaler = StandardScaler()

    def _prepare_features(self, data_list):
        """
        Prepare features and targets from a list of values.
        Uses the last 2 values to predict the next one.
        """
        features, targets = [], []
        if len(data_list) < 3:
            return [], []

        for i in range(2, len(data_list)):
            features.append([data_list[i - 2], data_list[i - 1]])
            targets.append(data_list[i])
        return np.array(features), np.array(targets)

    def _train_model(self, historical_data, model, scaler):
        """
        Trains a model based on the provided list of historical data.
        Returns True if training was successful, False otherwise.
        """
        if len(historical_data) < 3:
            return False

        try:
            features, targets = self._prepare_features(historical_data)
            if len(features) == 0:
                return False

            features_scaled = scaler.fit_transform(features)
            model.fit(features_scaled, targets)
            return True
        except Exception as e:
            print(f"Error training model: {e}")
            return False

    def _predict_future(self, model, scaler, recent_data, periods, is_price=True):
        """
        Generic prediction function for both price and profit.
        """
        predictions = []
        current_data = list(recent_data)
        current_date = datetime.now()

        for i in range(periods):
            future_date = current_date + timedelta(days=(i + 1) * 30)

            # Prepare features from the last 2 available data points
            features = np.array([[current_data[-2], current_data[-1]]])
            features_scaled = scaler.transform(features)

            # Predict the next value
            predicted_value = model.predict(features_scaled)[0]

            # Ensure price is not negative
            if is_price:
                predicted_value = max(0, predicted_value)

            # Add to predictions list
            prediction_key = "predicted_price" if is_price else "predicted_profit"
            predictions.append(
                {
                    "date": future_date.strftime("%Y-%m-%d"),
                    prediction_key: round(predicted_value, 2),
                }
            )

            # Append the new prediction to the data for the next iteration
            current_data.append(predicted_value)

        return predictions, None

    def predict_future_prices(self, historical_data, periods=3):
        """
        Predict future market prices based on historical price data.
        """
        if not historical_data or len(historical_data) < 3:
            return (
                [],
                "Not enough historical data to make a prediction (at least 3 records required).",
            )

        # Train the model on the provided data
        model_trained = self._train_model(
            historical_data, self.price_model, self.price_scaler
        )

        if not model_trained:
            return [], "Model training failed. Unable to make predictions."

        # Use the last 2 historical points to start predicting
        recent_prices = historical_data[-2:]
        return self._predict_future(
            self.price_model, self.price_scaler, recent_prices, periods, is_price=True
        )

    def predict_future_profits(self, historical_data, periods=3):
        """
        Predict future profits based on historical profit data.
        """
        if not historical_data or len(historical_data) < 3:
            return (
                [],
                "Not enough historical data to make a prediction (at least 3 records required).",
            )

        # Train the model on the provided data
        model_trained = self._train_model(
            historical_data, self.profit_model, self.profit_scaler
        )

        if not model_trained:
            return [], "Model training failed. Unable to make predictions."

        # Use the last 2 historical points to start predicting
        recent_profits = historical_data[-2:]
        return self._predict_future(
            self.profit_model,
            self.profit_scaler,
            recent_profits,
            periods,
            is_price=False,
        )


# Global instance of the predictor
market_predictor = MarketPredictor()
