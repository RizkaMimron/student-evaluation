const express = require("express");
const Dosen = require("../models/Dosen");
const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const dosen = await Dosen.create(req.body);
    res.status(201).json(dosen);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all
router.get("/", async (req, res) => {
  try {
    const dosens = await Dosen.findAll();
    res.json(dosens);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read one
router.get("/:id", async (req, res) => {
  try {
    const dosen = await Dosen.findByPk(req.params.id);
    if (dosen) {
      res.json(dosen);
    } else {
      res.status(404).json({ error: "Dosen not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const [updated] = await Dosen.update(req.body, {
      where: { id_dosen: req.params.id },
    });
    if (updated) {
      const updatedDosen = await Dosen.findByPk(req.params.id);
      res.json(updatedDosen);
    } else {
      res.status(404).json({ error: "Dosen not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Dosen.destroy({
      where: { id_dosen: req.params.id },
    });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Dosen not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
