import express from "express";
import dotenv from "dotenv";

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



