const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const MataKuliah = sequelize.define(
  "MataKuliah",
  {
    id_matkul: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_matkul: DataTypes.STRING,
  },
  {
    tableName: "Mata_Kuliah",
    timestamps: false,
  }
);

module.exports = MataKuliah;
