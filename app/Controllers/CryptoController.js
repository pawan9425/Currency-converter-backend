// cryptoController.js - Controller to handle cryptocurrency-related endpoints
import {
  fetchTop100Cryptos,
  fetchSupportedCurrencies,
} from "../Services/CryptoService.js";

// Controller function to get the top 100 cryptocurrencies
const getTop100Cryptos = async (req, res) => {
  try {
    // Fetching the top 100 cryptocurrencies using CryptoService function
    const top100 = await fetchTop100Cryptos();
    // Sending the list of top 100 cryptocurrencies as a JSON response
    res.json(top100);
  } catch (error) {
    // Handling errors by sending a 500 Internal Server Error response with the error message
    res.status(500).json({ error: error.message });
  }
};

// Controller function to get the list of supported currencies
const getSupportedCurrencies = async (req, res) => {
  try {
    // Fetching the list of supported currencies using CryptoService function
    const currencies = await fetchSupportedCurrencies();
    // Sending the list of supported currencies as a JSON response
    res.json(currencies);
  } catch (error) {
    // Handling errors by sending a 500 Internal Server Error response with the error message
    res.status(500).json({ error: error.message });
  }
};

// Exporting the controller functions
export { getTop100Cryptos, getSupportedCurrencies };
