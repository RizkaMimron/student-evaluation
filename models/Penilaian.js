const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Dosen = require("./Dosen");
const Mahasiswa = require("./Mahasiswa");
const FormPenilaian = require("./FormPenilaian");
const MataKuliah = require("./MataKuliah");

const Penilaian = sequelize.define(
  "Penilaian",
  {
    id_penilaian: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_dosen: {
      type: DataTypes.INTEGER,
      references: {
        model: Dosen,
        key: "id_dosen",
      },
    },
    id_mahasiswa: {
      type: DataTypes.INTEGER,
      references: {
        model: Mahasiswa,
        key: "id_mahasiswa",
      },
    },
    id_form: {
      type: DataTypes.INTEGER,
      references: {
        model: FormPenilaian,
        key: "id_form",
      },
    },
    id_matkul: {
      type: DataTypes.INTEGER,
      references: {
        model: MataKuliah,
        key: "id_matkul",
      },
    },
    tugas_mandiri: DataTypes.INTEGER,
    uts: DataTypes.INTEGER,
    uas: DataTypes.INTEGER,
    komentar: DataTypes.TEXT,
  },
  {
    tableName: "Penilaian",
    timestamps: false,
  }
);

module.exports = Penilaian;
