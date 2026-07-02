import express from "express";
import cors from "cors";
// import { calculateSolar } from "./utils/solarCalculator.js";
import plannerRoutes from "./routes/planner.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

/*
    POST /api/planner/calculate

    Body

    {
        "address":"Odisha",
        "monthlyBill":2500,
        "houseArea":120
    }
*/

app.use("/api/planner", plannerRoutes);


app.get("/", (req, res) => {
  res.send("HeatShield India Backend Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
1