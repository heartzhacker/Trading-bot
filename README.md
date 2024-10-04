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
   git clone https://github.com/heartzhacker/Trading-bot.git
   cd Trading-bot
2. Install dependencies:

   ```bash
   npm install
3. Create a .env file in the root directory and add the mock API URL:

   ```bash
   API_URL=https://66ffbf824da5bd237551ca98.mockapi.io/stock-prices
4. Run the server:
   ```bash
   node index.js
5. Open your browser or Postman and navigate to:

   ```bash
   http://localhost:3000/start-bot

This will start the trading bot and display the RSI values and signals in the console.
   
   
## Usage

Once the bot is running, it will fetch stock prices from the API, calculate the RSI for each stock, and print the following signals in the console:

- **Buy Signal**: RSI < 30
- **Sell Signal**: RSI > 70
- **Hold Signal**: 30 <= RSI <= 70

---

## Project Structure


- **.env**: Stores environment variables such as the mock API URL for stock data. This keeps sensitive information and configuration settings separate from the code.
  
- **index.js**: The main entry point of the application. This file sets up the Express server, defines the routes, and starts the server. It also includes the route to trigger the trading bot.

- **tradingLogic.js**: This file contains the core logic for fetching stock data from the mock API, calculating the RSI (Relative Strength Index), and determining trading signals (buy, sell, or hold).

- **package.json**: Contains metadata about the project, including the project name, version, description, and the dependencies required to run the application (such as Express and Axios).

- **README.md**: Documentation that provides a detailed explanation of the project, including installation, setup, usage instructions, and information on how the code works.


## Technologies Used

- Node.js
- Express.js
- Axios
- MockAPI
- dotenv



