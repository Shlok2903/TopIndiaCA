import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Configure nodemailer transporter (only if credentials are provided)
let transporter = null;

if (process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  console.log("Email transporter configured successfully");
} else {
  console.warn(
    "⚠️  SMTP credentials not found. Email functionality will be disabled."
  );
  console.warn(
    "   Please create a .env file with SMTP_USER and SMTP_PASS variables."
  );
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// Example API route
app.get("/api/greeting", (req, res) => {
  res.json({ message: "Hello from backend" });
});

// Newsletter subscription endpoint
app.post("/api/newsletter/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Valid email is required" });
    }

    // Check if transporter is configured
    if (!transporter) {
      return res.status(503).json({
        error: "Email service is not configured",
        message:
          "SMTP credentials are missing. Please configure SMTP_USER and SMTP_PASS in the .env file.",
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER || "noreply@topcaindia.com",
      to: email,
      subject: "Successfully Subscribed to Top CA India Newsletter",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
            Thank You for Subscribing!
          </h2>
          <p style="color: #666; line-height: 1.6;">
            Dear Subscriber,
          </p>
          <p style="color: #666; line-height: 1.6;">
            You have successfully subscribed to the Top CA India newsletter. We're excited to have you on board!
          </p>
          <p style="color: #666; line-height: 1.6;">
            You will now receive the latest updates, news, and insights about:
          </p>
          <ul style="color: #666; line-height: 1.8;">
            <li>Latest CA industry news and trends</li>
            <li>Tax updates and compliance guidelines</li>
            <li>Featured Chartered Accountants and firms</li>
            <li>Exclusive articles and resources</li>
            <li>Upcoming events and webinars</li>
          </ul>
          <p style="color: #666; line-height: 1.6;">
            Stay tuned for our next newsletter!
          </p>
          <p style="color: #666; line-height: 1.6; margin-top: 30px;">
            Best regards,<br>
            <strong>The Top CA India Team</strong>
          </p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
            <p>This is an automated email. Please do not reply to this message.</p>
            <p>© 2025 topcaindia.com | Design by IMI Advertising</p>
          </div>
        </div>
      `,
      text: `
Thank You for Subscribing!

Dear Subscriber,

You have successfully subscribed to the Top CA India newsletter. We're excited to have you on board!

You will now receive the latest updates, news, and insights about:
- Latest CA industry news and trends
- Tax updates and compliance guidelines
- Featured Chartered Accountants and firms
- Exclusive articles and resources
- Upcoming events and webinars

Stay tuned for our next newsletter!

Best regards,
The Top CA India Team

---
This is an automated email. Please do not reply to this message.
© 2025 topcaindia.com | Design by IMI Advertising
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Subscription email sent successfully",
    });
  } catch (error) {
    console.error("Error sending subscription email:", error);
    res.status(500).json({
      error: "Failed to send subscription email",
      details: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
