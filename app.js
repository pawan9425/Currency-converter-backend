import express from "express";
import cryptoRoutes from "./routes/cryptoRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to fetch the top 100 cryptocurrencies
app.use("/crypto", cryptoRoutes);

// Endpoint to fetch supported currencies

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
