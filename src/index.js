const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const app = express();

// Settings
app.set("port", process.env.PORT || 4000);


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Middlewares
app.use(cors({ origin: ['http://localhost:4000', 
'http://gamebrag.onrender.com', 
'https://gamebrag.onrender.com'], credentials: true }))
app.use(morgan("dev"));

// Analizar solicitudes con express.json y express.urlencoded
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes
app.use(require('./routes/Route'));

// handling errors
app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message,
  });
});

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
console.log("estoy ejecutandome");
console.log("Gilces Panta Cristian");
