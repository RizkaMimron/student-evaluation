const express = require("express");
const Penilaian = require("../models/Penilaian");
const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const penilaian = await Penilaian.create(req.body);
    res.status(201).json(penilaian);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all
router.get("/", async (req, res) => {
  try {
    const penilaians = await Penilaian.findAll();
    res.json(penilaians);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read one
router.get("/:id", async (req, res) => {
  try {
    const penilaian = await Penilaian.findByPk(req.params.id);
    if (penilaian) {
      res.json(penilaian);
    } else {
      res.status(404).json({ error: "Penilaian not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const [updated] = await Penilaian.update(req.body, {
      where: { id_penilaian: req.params.id },
    });
    if (updated) {
      const updatedPenilaian = await Penilaian.findByPk(req.params.id);
      res.json(updatedPenilaian);
    } else {
      res.status(404).json({ error: "Penilaian not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Penilaian.destroy({
      where: { id_penilaian: req.params.id },
    });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Penilaian not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
