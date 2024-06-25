const { connectDB } = require("../config/database");
const { encryptPassword, decryptPassword } = require("../utils/encryption");

class Password {
  static async save(appName, email, password, pin) {
    if (pin.length !== 17) {
      throw new Error("El PIN debe tener 17 dígitos");
    }

    const { encrypted, iv } = encryptPassword(password, pin);
    const connection = await connectDB();

    try {
      await connection.execute(
        "INSERT INTO passwords (app_name, email, encrypted_password, iv) VALUES (?, ?, ?, ?)",
        [appName, email, encrypted, iv]
      );
      console.log("Contraseña guardada exitosamente");
    } catch (error) {
      console.error("Error al guardar la contraseña:", error);
      throw error;
    } finally {
      await connection.end();
    }
  }

  static async get(appName, email, pin) {
    if (pin.length !== 17) {
      throw new Error("El PIN debe tener 17 dígitos");
    }

    const connection = await connectDB();

    try {
      const [rows] = await connection.execute(
        "SELECT encrypted_password, iv FROM passwords WHERE app_name = ? AND email = ?",
        [appName, email]
      );

      if (rows.length === 0) {
        throw new Error("No se encontró la contraseña");
      }

      const { encrypted_password, iv } = rows[0];
      return decryptPassword(encrypted_password, iv, pin);
    } catch (error) {
      console.error("Error al recuperar la contraseña:", error);
      throw error;
    } finally {
      await connection.end();
    }
  }
}

module.exports = Password;
