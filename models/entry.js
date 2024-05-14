const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  name: String,
  age: Number,
  hobby: String
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
