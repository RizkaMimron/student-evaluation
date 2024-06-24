const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Dosen = require("./Dosen");

const FormPenilaian = sequelize.define(
  "FormPenilaian",
  {
    id_form: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_form: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    nilai: DataTypes.INTEGER,
    id_dosen: {
      type: DataTypes.INTEGER,
      references: {
        model: Dosen,
        key: "id_dosen",
      },
    },
  },
  {
    tableName: "Form_Penilaian",
    timestamps: false,
  }
);

module.exports = FormPenilaian;
