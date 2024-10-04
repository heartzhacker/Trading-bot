const express = require('express');
const { startTradingBot } = require('./tradingLogic');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to start the RSI trading bot
app.get('/start-bot', async (req, res) => {
  await startTradingBot();
  res.send('RSI Trading Bot started! Check the console for the results.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
