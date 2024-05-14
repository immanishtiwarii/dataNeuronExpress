const express = require("express");
const entryController = require("../controllers/entryController");

const router = express.Router();

router.post("/add", entryController.addEntry);
router.put("/update", entryController.updateEntry);
router.get("/count", entryController.getApiCounts);
router.get("/", entryController.getAllEntries);
router.delete("/:id", entryController.deleteEntry);

module.exports = router;
