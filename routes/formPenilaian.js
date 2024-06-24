const express = require("express");
const FormPenilaian = require("../models/FormPenilaian");
const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const formPenilaian = await FormPenilaian.create(req.body);
    res.status(201).json(formPenilaian);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all
router.get("/", async (req, res) => {
  try {
    const formPenilaians = await FormPenilaian.findAll();
    res.json(formPenilaians);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read one
router.get("/:id", async (req, res) => {
  try {
    const formPenilaian = await FormPenilaian.findByPk(req.params.id);
    if (formPenilaian) {
      res.json(formPenilaian);
    } else {
      res.status(404).json({ error: "FormPenilaian not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const [updated] = await FormPenilaian.update(req.body, {
      where: { id_form: req.params.id },
    });
    if (updated) {
      const updatedFormPenilaian = await FormPenilaian.findByPk(req.params.id);
      res.json(updatedFormPenilaian);
    } else {
      res.status(404).json({ error: "FormPenilaian not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await FormPenilaian.destroy({
      where: { id_form: req.params.id },
    });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "FormPenilaian not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
