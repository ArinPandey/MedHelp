const { generateMedicineData } = require('../services/aiService');

const getMedicineInfo = async (req, res) => {
  const { name } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({ error: "Medicine name is required." });
  }

  try {
    const data = await generateMedicineData(name);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching medicine data:", error);
    return res.status(500).json({ error: "Failed to fetch medical information. Please try again." });
  }
};

module.exports = { getMedicineInfo };