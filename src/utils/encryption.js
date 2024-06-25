const crypto = require("crypto");

function encryptPassword(password, pin) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(pin.padEnd(32)),
    iv
  );
  let encrypted = cipher.update(password, "utf8", "hex");
  encrypted += cipher.final("hex");
  return { encrypted, iv: iv.toString("hex") };
}

function decryptPassword(encryptedPassword, iv, pin) {
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(pin.padEnd(32)),
    Buffer.from(iv, "hex")
  );
  let decrypted = decipher.update(encryptedPassword, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

module.exports = { encryptPassword, decryptPassword };
