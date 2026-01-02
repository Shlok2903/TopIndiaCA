import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

app.use(cors());
app.use(express.json());

// transporter
let transporter = null;
if (process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// IMPORTANT: routes must NOT start with /api
app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/greeting", (req, res) => {
  res.json({ message: "Hello from backend" });
});

app.post("/newsletter/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Valid email is required" });
    }

    if (!transporter) {
      return res.status(503).json({
        error: "Email service not configured",
      });
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Successfully Subscribed",
      text: "Thanks for subscribing",
    });

    return res.json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
});

// 🚫 NO app.listen()
// ✅ EXPORT THE APP
export default app;