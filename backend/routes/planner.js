import express from "express";
import { calculateSolar } from "../utils/solarCalculator.js";

const router = express.Router();

router.post("/calculate", (req, res) => {
  console.log("BODY =", req.body);

  try {
    const result = calculateSolar(req.body);

    res.json({
      success: true,
      result,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

export default router;
