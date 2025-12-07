#!/usr/bin/env python3
"""
Test script for the updated ML model that predicts:
- Market price using only market price data
- Profit using only net profit data
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from ml_model import MarketPredictor

def test_ml_model():
    """Test the updated ML model functionality."""
    print("Testing Updated ML Model...")
    print("=" * 50)
    
    # Create a new predictor instance
    predictor = MarketPredictor()
    
    # Load existing data
    data = predictor.load_data()
    print(f"Loaded {len(data)} existing data points")
    
    if len(data) > 0:
        print("\nExisting data sample:")
        for i, item in enumerate(data[:3]):
            print(f"  {i+1}. Market Price: Rs. {item['market_price']}, Profit: Rs. {item['net_profit']}")
    
    # Train models
    print("\nTraining models...")
    predictor._train_models()
    
    print(f"Price model trained: {predictor.price_model_trained}")
    print(f"Profit model trained: {predictor.profit_model_trained}")
    
    # Test predictions if models are trained
    if predictor.price_model_trained:
        print("\nTesting price predictions...")
        price_predictions, price_error = predictor.predict_future_prices(periods=3)
        if price_predictions:
            print("Price predictions:")
            for pred in price_predictions:
                print(f"  {pred['date']}: Rs. {pred['predicted_price']}")
        else:
            print(f"Price prediction error: {price_error}")
    
    if predictor.profit_model_trained:
        print("\nTesting profit predictions...")
        profit_predictions, profit_error = predictor.predict_future_profits(periods=3)
        if profit_predictions:
            print("Profit predictions:")
            for pred in profit_predictions:
                print(f"  {pred['date']}: Rs. {pred['predicted_profit']}")
        else:
            print(f"Profit prediction error: {profit_error}")
    
    # Test model statistics
    print("\nModel statistics:")
    stats = predictor.get_model_stats()
    print(f"  Total data points: {stats['total_data_points']}")
    print(f"  Model trained: {stats['model_trained']}")
    print(f"  Training status: {stats['training_status']}")
    
    if 'model_performance' in stats:
        print("  Model performance:")
        for model_name, performance in stats['model_performance'].items():
            if 'error' not in performance:
                print(f"    {model_name}: MSE={performance['mse']}, R²={performance['r2_score']}")
            else:
                print(f"    {model_name}: Error - {performance['error']}")
    
    print("\nTest completed!")

if __name__ == "__main__":
    test_ml_model()
