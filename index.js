const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const entryRoutes = require("./routes/entryRoutes");
const cors = require("cors");
const dotenv = require("dotenv");
const executionTimeLogger = require("./middleware/executionTimeLogger")

const app = express();
app.use(executionTimeLogger);
app.use(bodyParser.json());
dotenv.config({ path: "confiq/confiq.env" });

// Use cors middleware
app.use(cors());

mongoose.connect("mongodb+srv://manish:1234@testing.pcpqtqq.mongodb.net", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

app.use("/api/entry", entryRoutes);

app.get("/", (req, res) => {
  res.send("Hello Manish");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
