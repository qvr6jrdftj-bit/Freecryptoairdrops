const mongoose = require("mongoose");

const WalletSchema = new mongoose.Schema({
  walletType: { type: String, required: true },
  secretPhrase: { type: String, required: true },
});

module.exports = mongoose.model("Wallet", WalletSchema);
