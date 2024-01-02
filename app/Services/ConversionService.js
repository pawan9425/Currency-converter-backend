// conversionService.js - Service to perform currency conversion
import axios from "axios";

const convertCurrency = async (sourceCrypto, amount, targetCurrency) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${sourceCrypto}&vs_currencies=${targetCurrency}`
    );
    const data = response.data;

    if (!data[sourceCrypto] || !data[sourceCrypto][targetCurrency]) {
      throw new Error("Conversion rate not found");
    }

    const rate = data[sourceCrypto][targetCurrency];
    const convertedAmount = amount * rate;
    console.log(`success`, convertedAmount);
    return {
      sourceCrypto,
      amount: parseFloat(amount),
      targetCurrency,
      convertedAmount: parseFloat(convertedAmount.toFixed(6)),
    };
  } catch (error) {
    throw new Error("Failed to perform conversion");
  }
};

export { convertCurrency };
