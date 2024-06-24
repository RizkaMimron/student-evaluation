const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Dosen = sequelize.define(
  "Dosen",
  {
    id_dosen: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_lengkap: DataTypes.STRING,
    nip: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    tableName: "Dosen",
    timestamps: false,
  }
);

module.exports = Dosen;
