import dotenv from "dotenv";
import express from "express";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("public"));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("LICHTARA Companion está vivo 🌱");
});

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: message
    });

    res.json({ reply: response.output[0].content[0].text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao falar com a IA" });
  }
});

app.listen(3000, () => {
  console.log("🌿 LICHTARA Companion vivo em http://localhost:3000");
});
