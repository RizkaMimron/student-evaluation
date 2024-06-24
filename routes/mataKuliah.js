const express = require("express");
const MataKuliah = require("../models/MataKuliah");
const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const mataKuliah = await MataKuliah.create(req.body);
    res.status(201).json(mataKuliah);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all
router.get("/", async (req, res) => {
  try {
    const mataKuliahs = await MataKuliah.findAll();
    res.json(mataKuliahs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read one
router.get("/:id", async (req, res) => {
  try {
    const mataKuliah = await MataKuliah.findByPk(req.params.id);
    if (mataKuliah) {
      res.json(mataKuliah);
    } else {
      res.status(404).json({ error: "MataKuliah not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const [updated] = await MataKuliah.update(req.body, {
      where: { id_matkul: req.params.id },
    });
    if (updated) {
      const updatedMataKuliah = await MataKuliah.findByPk(req.params.id);
      res.json(updatedMataKuliah);
    } else {
      res.status(404).json({ error: "MataKuliah not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await MataKuliah.destroy({
      where: { id_matkul: req.params.id },
    });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "MataKuliah not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
