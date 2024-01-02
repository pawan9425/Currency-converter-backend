// conversionController.js - Controller to handle currency conversion endpoint
import { convertCurrency } from "../Services/ConversionService.js";

const performConversion = async (req, res) => {
  const { sourceCrypto, amount, targetCurrency } = req.query;

  if (!sourceCrypto || !amount || !targetCurrency) {
    return res.status(400).json({
      error:
        "Please provide sourceCrypto, amount, and targetCurrency parameters",
    });
  }

  try {
    const result = await convertCurrency(sourceCrypto, amount, targetCurrency);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { performConversion };
