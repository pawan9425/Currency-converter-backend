// conversionController.js - Controller to handle currency conversion endpoint
import { convertCurrency } from "../services/conversionService.js";

// Controller function to perform currency conversion
const performConversion = async (req, res) => {
  // Extracting sourceCrypto, amount, and targetCurrency from request query parameters
  const { sourceCrypto, amount, targetCurrency } = req.query;

  // Checking if required parameters are present, if not, return a 400 Bad Request response
  if (!sourceCrypto || !amount || !targetCurrency) {
    return res.status(400).json({
      error:
        "Please provide sourceCrypto, amount, and targetCurrency parameters",
    });
  }

  try {
    // Attempting to perform currency conversion using the convertCurrency function
    const result = await convertCurrency(sourceCrypto, amount, targetCurrency);
    // Sending the conversion result as a JSON response
    res.json(result);
  } catch (error) {
    // Handling errors by sending a 500 Internal Server Error response with the error message
    res.status(500).json({ error: error.message });
  }
};

export { performConversion };
