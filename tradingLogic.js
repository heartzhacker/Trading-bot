const axios = require('axios');
require('dotenv').config();

// Load the API endpoint from the environment variable
// const apiUrl = '';

const apiUrl = new URL('https://66ffbf824da5bd237551ca98.mockapi.io/stock-prices');

// Function to calculate RSI
function calculateRSI(prices) {
  const period = prices.length; // For 7 days of prices

  let gains = 0;
  let losses = 0;

  for (let i = 1; i < period; i++) {
    const change = prices[i] - prices[i - 1];
    if (change > 0) {
      gains += change;
    } else {
      losses -= change; // Make losses positive
    }
  }

  const averageGain = gains / period;
  const averageLoss = losses / period;

  const rs = averageGain / averageLoss;
  const rsi = 100 - (100 / (1 + rs));
  return rsi;
}

// Function to analyze stock data and apply RSI logic
async function analyzeStockData(stock) {
  const prices = [
    stock.day1,
    stock.day2,
    stock.day3,
    stock.day4,
    stock.day5,
    stock.day6,
    stock.day7
  ];

  const rsi = calculateRSI(prices);
  console.log(`RSI for ${stock.companyName}: ${rsi.toFixed(2)}`);

  // Implement trading decisions based on RSI values
  if (rsi > 70) {
    console.log(`Selling signal for ${stock.companyName} (RSI: ${rsi.toFixed(2)})`);
  } else if (rsi < 30) {
    console.log(`Buying signal for ${stock.companyName} (RSI: ${rsi.toFixed(2)})`);
  } else {
    console.log(`No trade signal for ${stock.companyName} (RSI: ${rsi.toFixed(2)})`);
  }
}

// Function to fetch stock data from the API and start trading logic
async function startTradingBot() {
  try {
    const response = await axios.get(apiUrl);
    const stockData = response.data;

    for (const stock of stockData) {
      await analyzeStockData(stock);
    }
  } catch (error) {
    console.error('Error fetching stock data:', error);
  }
}

module.exports = { startTradingBot };
