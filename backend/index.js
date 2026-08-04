require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const dashboardRouter = require("./routes/dashboardRoutes.js");
const userRouter = require("./routes/userRoutes.js");

if (!process.env.MONGO_URL) {
  throw new Error("MONGO_URL is missing");
}

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;


app.use(
  cors({
    origin: [process.env.CLIENT_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api", dashboardRouter);
app.use("/api/auth", userRouter);

app.use((req, res) => {
  res.status(404).json({
    status: false,
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    status: false,
    message: err.message || "Internal Server Error",
  });
});

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ Connected to DB");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
}

startServer();
