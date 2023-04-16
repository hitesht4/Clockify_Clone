const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandle } = require("./src/middleware/errorMiddleware");
const connectDB = require("./src/config/db");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Welcome to clockify Backend");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require("./src/routes/goalRoutes"));
app.use("/api/users", require("./src/routes/userRoutes"));

app.use(errorHandle);

app.listen(port, () => {
  connectDB();
  console.log(`Server stated on port ${port}`);
});
