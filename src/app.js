const express = require("express");
const path = require("path");
const Password = require("./models/Password");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/save", async (req, res) => {
  try {
    const { appName, email, password, pin } = req.body;
    await Password.save(appName, email, password, pin);
    res.json({ success: true, message: "Contraseña guardada exitosamente" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

app.post("/get", async (req, res) => {
  try {
    const { appName, email, pin } = req.body;
    const password = await Password.get(appName, email, pin);
    res.json({ success: true, password });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
