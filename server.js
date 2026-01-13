import dotenv from "dotenv";
import express from "express";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("LICHTARA Companion está vivo 🌱");
});

app.listen(3000, () => {
  console.log("🌿 Servidor ativo em http://localhost:3000");
});

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("public"));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/lichtara", async (req, res) => {
  const userText = req.body.text;

  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [
      { role: "system", content: "Você é um companheiro de escrita consciente." },
      { role: "user", content: userText }
    ]
  });

  res.json({ answer: response.output[0].content[0].text });
});

app.listen(3000, () => {
  console.log("🌿 LICHTARA Companion vivo em http://localhost:3000");
});
