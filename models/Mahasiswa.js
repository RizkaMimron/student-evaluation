const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Mahasiswa = sequelize.define(
  "Mahasiswa",
  {
    id_mahasiswa: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: DataTypes.STRING,
    nim: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    tableName: "Mahasiswa",
    timestamps: false,
  }
);

module.exports = Mahasiswa;
