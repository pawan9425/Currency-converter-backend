// conversionRoutes.js - Route definition for currency conversion endpoint
import express from "express";
import { performConversion } from "../app/controllers/conversionController.js";

const router = express.Router();

router.get("/convert", performConversion);

export default router;
