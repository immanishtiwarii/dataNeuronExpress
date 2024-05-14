const Entry = require("../models/entry");
let addCount = 0;
let updateCount = 0;

exports.addEntry = async (req, res) => {
  try {
    const { name, age, hobby } = req.body;
    const entry = new Entry({ name, age, hobby });
    await entry.save();
    addCount++;
    res.json({ message: "Entry added successfully", entry });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllEntries = async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEntry = async (req, res) => {
  try {
    const { id, name, age, hobby } = req.body;
    await Entry.findByIdAndUpdate(id, { name, age, hobby });
    updateCount++;
    res.json({ message: "Entry updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    const id = req.params.id;
    await Entry.findByIdAndDelete(id);
    res.json({ message: "Entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getApiCounts = (req, res) => {
  res.json({ addCount, updateCount });
};
