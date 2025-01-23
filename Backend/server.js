const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");
const landRoutes = require("../Backend/routes/land");

dotenv.config();

const app = express();
app.use(cors());
app.use("/api/lands", landRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
