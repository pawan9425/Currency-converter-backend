// conversionRoutes.js - Route definition for currency conversion endpoint
import express from "express";
import { performConversion } from "../app/Controllers/ConversionController.js";

const router = express.Router();

router.get("/convert", performConversion);

export default router;
