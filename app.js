import express from "express";
import cryptoRoutes from "./routes/cryptoRoutes.js";
import conversionRoutes from "./routes/conversionRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/crypto", cryptoRoutes);

app.use("/conversion", conversionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
