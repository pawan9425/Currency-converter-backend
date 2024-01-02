// conversionService.js - Service to perform currency conversion
import axios from "axios";

// Function to perform currency conversion using Coingecko API
const convertCurrency = async (sourceCrypto, amount, targetCurrency) => {
  try {
    // Making an API call to Coingecko's API for currency conversion
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${sourceCrypto}&vs_currencies=${targetCurrency}`
    );

    // Extracting response data
    const data = response.data;

    // Checking if the conversion rate exists in the response data
    if (!data[sourceCrypto] || !data[sourceCrypto][targetCurrency]) {
      throw new Error("Conversion rate not found");
    }

    // Calculating the converted amount based on the conversion rate
    const rate = data[sourceCrypto][targetCurrency];
    const convertedAmount = amount * rate;
    // Logging the success and returning the converted currency data
    console.log(`success`, convertedAmount);
    return {
      sourceCrypto,
      amount: parseFloat(amount),
      targetCurrency,
      convertedAmount: parseFloat(convertedAmount.toFixed(6)),
    };
  } catch (error) {
    // Handling errors by throwing an error message
    throw new Error("Failed to perform conversion");
  }
};

export { convertCurrency };
