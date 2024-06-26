// app.js
const express = require("express");
const path = require("path");
const mainRoute = require("./routes/main.js");
const gamesRouter = require("./routes/games");
const bodyParser = require("body-parser");
const { cors } = require("./middlewares/cors");
const PORT = 3000;
const app = express();

// Теперь клиент имеет доступ только к публичным файлам
app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  mainRoute,
  gamesRouter
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
