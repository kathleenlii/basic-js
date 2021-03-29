const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machineType) {
    if (machineType !== false) {
      this.machineType = "direct";
    } else {
      this.machineType = "reverse";
    }
    this.table = new Map();
    for (let codeRow = 65; codeRow < 91; codeRow++) {
      let row = new Map();
      for (let codeCol = codeRow; codeCol < codeRow + 26; codeCol++) {
        const newCode = codeCol % 91 < 65 ? (codeCol % 91) + 65 : codeCol;
        row.set(
          String.fromCharCode(codeCol - codeRow + 65),
          String.fromCharCode(newCode)
        );
      }
      this.table.set(String.fromCharCode(codeRow), row);
    }
  }
  encrypt(message, key) {
    let result = [];
    if (!(message && key)) {
      throw "Error";
    }
    let keyIndex = 0;
    for (let v of message) {
      if (
        !(v.charCodeAt(0) < 97 && v.charCodeAt(0) > 90) &&
        v.charCodeAt(0) >= 65 &&
        v.charCodeAt(0) <= 122
      ) {
        result.push(
          this.table
            .get(v.toUpperCase())
            .get(key[keyIndex % key.length].toUpperCase())
        );
        keyIndex++;
      } else {
        result.push(v);
      }
    }
    if (this.machineType === "reverse") result.reverse();
    return result.join("");
  }
  decrypt(encryptedMessage, key) {
    let result = [];
    if (!(encryptedMessage && key)) {
      throw "Error";
    }
    let keyIndex = 0;
    for (let v of encryptedMessage) {
      if (
        !(v.charCodeAt(0) < 97 && v.charCodeAt(0) > 90) &&
        v.charCodeAt(0) >= 65 &&
        v.charCodeAt(0) <= 122
      ) {
        const row = this.table.get(key[keyIndex % key.length].toUpperCase());
        for (let k of row.keys()) {
          if (row.get(k) === v.toUpperCase()) {
            result.push(k);
            break;
          }
        }
        keyIndex++;
      } else result.push(v.toUpperCase());
    }
    if (this.machineType === "reverse") result.reverse();
    return result.join("");
  }
};

module.exports = VigenereCipheringMachine;
