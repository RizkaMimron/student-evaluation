const express = require("express");
const Mahasiswa = require("../models/Mahasiswa");
const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.create(req.body);
    res.status(201).json(mahasiswa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all
router.get("/", async (req, res) => {
  try {
    const mahasiswas = await Mahasiswa.findAll();
    res.json(mahasiswas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read one
router.get("/:id", async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findByPk(req.params.id);
    if (mahasiswa) {
      res.json(mahasiswa);
    } else {
      res.status(404).json({ error: "Mahasiswa not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const [updated] = await Mahasiswa.update(req.body, {
      where: { id_mahasiswa: req.params.id },
    });
    if (updated) {
      const updatedMahasiswa = await Mahasiswa.findByPk(req.params.id);
      res.json(updatedMahasiswa);
    } else {
      res.status(404).json({ error: "Mahasiswa not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Mahasiswa.destroy({
      where: { id_mahasiswa: req.params.id },
    });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Mahasiswa not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
