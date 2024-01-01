// cryptoService.js - Service to interact with CoinGecko API for crypto data
import axios from "axios";

const fetchTop100Cryptos = async () => {
  try {
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
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch top 100 cryptocurrencies");
  }
};

const fetchSupportedCurrencies = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch supported currencies");
  }
};

export { fetchTop100Cryptos, fetchSupportedCurrencies };
