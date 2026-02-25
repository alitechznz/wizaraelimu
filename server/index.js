import express from "express";
import cors from "cors";
import { query } from "./db.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email na password zinahitajika." });
    }
    
    const rows = await query("SELECT * FROM users WHERE email = ? LIMIT 1", [
      email.trim().toLowerCase(),
    ]);

    if (rows.length == 0) {
      return res.status(401).json({ success: false, message: "Barua pepe au nenosiri si sahihi." });
    }

    const user = rows[0];
    console.log("DB columns:", Object.keys(user));

    const columns = Object.keys(user);
    const pwdCol = columns.find((c) => c.toLowerCase().includes("pass"));
    const storedPassword = pwdCol ? user[pwdCol] : "";

    if (!storedPassword || storedPassword !== password) {
      console.log("Password mismatch. Column used:", pwdCol, "| Stored:", storedPassword);
      return res.status(401).json({ success: false, message: "Barua pepe au nenosiri si sahihi." });
    }

    const userId = user.user_id || user.user_id;
    const userName = user.name || user.name || "";

    res.json({
      success: true,
      message: "Umefanikiwa kuingia.",
      user: { id: userId, email: user.email, name: userName },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({
      success: false,
      message: err.code === "ER_NO_SUCH_TABLE"
        ? "Database haijaandaliwa. Tengeneza table 'users'."
        : "Hitilafu ya server. Jaribu tena.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server inaendesha http://localhost:${PORT}`);
});
