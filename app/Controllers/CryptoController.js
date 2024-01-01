// cryptoController.js - Controller to handle cryptocurrency-related endpoints
import {
  fetchTop100Cryptos,
  fetchSupportedCurrencies,
} from "../Services/CryptoService.js";

const getTop100Cryptos = async (req, res) => {
  try {
    const top100 = await fetchTop100Cryptos();
    res.json(top100);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSupportedCurrencies = async (req, res) => {
  try {
    const currencies = await fetchSupportedCurrencies();
    res.json(currencies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getTop100Cryptos, getSupportedCurrencies };
