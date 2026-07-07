const express = require("express");
const router = express.Router();
const {getMedicineInfo} = require("../controllers/medicineController");

router.post("/search", getMedicineInfo);
module.exports = router;