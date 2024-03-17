// Importaciones
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const bodyParser = require("body-parser");
const errorHandler = require("./api/middlewares/errorHandler");
const vehicleRoutes = require("./api/routes/vehicleRoutes");
const mongoose = require("mongoose");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
require("dotenv").config();

// Inicializaciones
const app = express();
const server = http.createServer(app);

// Configuración de CORS para Socket.IO
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
      "X-CSRF-Token",
    ],
    credentials: true,
  },
});

// Middleware para hacer disponible io en todas las rutas
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Middlewares básicos
app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: "10kb" }));

// Limitador de tasa de solicitud
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Successful connection to MongoDB"))
  .catch((err) => console.log("Error connection to MongoDB", err));

// Rutas
app.use("/api/vehicles", vehicleRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

// Gestión de conexiones Socket.IO
io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Manejo de cierre
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  server.close(() => {
    console.log("HTTP server closed");
  });
  process.exit(0);
});

// Inicio del servidor
const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
