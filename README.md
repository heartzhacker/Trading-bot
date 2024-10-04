# Trading Bot

This project is a simple stock trading bot that uses the **Relative Strength Index (RSI)** as its trading strategy. The bot fetches 7-day stock price data from a mock API, calculates the RSI for each stock, and provides buy or sell signals based on the RSI values.

- **RSI > 70**: Sell signal (stock is overbought)
- **RSI < 30**: Buy signal (stock is oversold)

The project is built using **Node.js** and **Express**.

---

## Features

- Fetches stock price data from a mock API.
- Calculates RSI for each stock based on the past 7 days of stock prices.
- Provides buy, sell, or hold signals based on RSI values.

---

## Installation & Setup

To run this project on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/rsi-trading-bot.git
   cd rsi-trading-bot
