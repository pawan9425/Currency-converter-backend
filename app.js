import express from "express";
import cryptoRoutes from "./routes/cryptoRoutes.js";
import conversionRoutes from "./routes/conversionRoutes.js";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/crypto", [cors()]);
app.use("/crypto", cryptoRoutes);

app.use("/conversion", [cors()]);
app.use("/conversion", conversionRoutes);

app.use("/api/test", function (req, res) {
  res.send("This is data from the /api/test endpoint. It's from the server.");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
