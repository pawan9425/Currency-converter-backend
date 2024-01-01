// conversionService.js - Service to perform currency conversion
import axios from "axios";

const convertCurrency = async (source, amount, target) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${source}&vs_currencies=${target}`
    );
    const data = response.data;

    if (!data[source] || !data[source][target]) {
      throw new Error("Conversion rate not found");
    }

    const rate = data[source][target];
    const convertedAmount = amount * rate;

    return {
      source,
      amount: parseFloat(amount),
      target,
      convertedAmount: parseFloat(convertedAmount.toFixed(6)),
    };
  } catch (error) {
    throw new Error("Failed to perform conversion");
  }
};

export { convertCurrency };
