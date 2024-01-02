// cryptoRoutes.js - Route definitions for cryptocurrency-related endpoints
import express from "express";
import {
  getTop100Cryptos,
  getSupportedCurrencies,
} from "../app/controllers/cryptoController.js";

const router = express.Router();

// Endpoint to fetch the top 100 cryptocurrencies
router.get("/top100", getTop100Cryptos);
// Endpoint to fetch supported currencies
router.get("/supportedCurrencies", getSupportedCurrencies);

export default router;
