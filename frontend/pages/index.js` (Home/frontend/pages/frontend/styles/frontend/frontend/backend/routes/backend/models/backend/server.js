const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const walletRoutes = require("./routes/walletRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/wallets", walletRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
