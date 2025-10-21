import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// Example API route
app.get("/api/greeting", (req, res) => {
  res.json({ message: "Hello from backend" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
