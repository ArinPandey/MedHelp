const express = require("express");
const cors = require("cors");
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '.env') });

const medicineRoutes = require("./routes/medicine");

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/medicine', medicineRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));