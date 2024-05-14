const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const entryRoutes = require("./routes/entryRoutes")
const cors = require("cors")

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
