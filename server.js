const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Import routes
const adminRoutes = require("./routes/admin");
const dosenRoutes = require("./routes/dosen");
const formPenilaianRoutes = require("./routes/formPenilaian");
const penilaianRoutes = require("./routes/penilaian");
const mataKuliahRoutes = require("./routes/mataKuliah");
const mahasiswaRoutes = require("./routes/mahasiswa");

// Use routes
app.use("/admin", adminRoutes);
app.use("/dosen", dosenRoutes);
app.use("/form_penilaian", formPenilaianRoutes);
app.use("/penilaian", penilaianRoutes);
app.use("/mata_kuliah", mataKuliahRoutes);
app.use("/mahasiswa", mahasiswaRoutes);

// Connect to the database
sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
