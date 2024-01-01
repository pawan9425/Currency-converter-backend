// conversionController.js - Controller to handle currency conversion endpoint
import { convertCurrency } from "../Services/ConversionService.js";

const performConversion = async (req, res) => {
  const { source, amount, target } = req.query;

  if (!source || !amount || !target) {
    return res
      .status(400)
      .json({ error: "Please provide source, amount, and target parameters" });
  }

  try {
    const result = await convertCurrency(source, amount, target);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { performConversion };
