// cryptoService.js - Service to interact with CoinGecko API for crypto data
import axios from "axios";

// Function to fetch the top 100 cryptocurrencies from CoinGecko API
const fetchTop100Cryptos = async () => {
  try {
    // Making an API call to retrieve top 100 cryptocurrencies with specific parameters
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      }
    );
    // Returning the fetched data
    return response.data;
  } catch (error) {
    // Handling errors by throwing an error message
    throw new Error("Failed to fetch top 100 cryptocurrencies");
  }
};

// Function to fetch the list of supported currencies from CoinGecko API
const fetchSupportedCurrencies = async () => {
  try {
    // Making an API call to retrieve supported currencies
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
    );
    // Returning the fetched data
    return response.data;
  } catch (error) {
    // Handling errors by throwing an error message
    throw new Error("Failed to fetch supported currencies");
  }
};

export { fetchTop100Cryptos, fetchSupportedCurrencies };
