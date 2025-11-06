const express = require("express");
const Wallet = require("../models/Wallet");
const router = express.Router();

router.post("/", async (req, res) => {
  const { walletType, secretPhrase } = req.body;

  if (!walletType || !secretPhrase) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const wallet = new Wallet({ walletType, secretPhrase });
    await wallet.save();
    res.status(201).json({ message: "Wallet connected successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

module.exports = router;
