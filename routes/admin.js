const express = require("express");
const Admin = require("../models/Admin");
const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all
router.get("/", async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.json(admins);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read one
router.get("/:id", async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (admin) {
      res.json(admin);
    } else {
      res.status(404).json({ error: "Admin not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const [updated] = await Admin.update(req.body, {
      where: { id_admin: req.params.id },
    });
    if (updated) {
      const updatedAdmin = await Admin.findByPk(req.params.id);
      res.json(updatedAdmin);
    } else {
      res.status(404).json({ error: "Admin not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Admin.destroy({
      where: { id_admin: req.params.id },
    });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Admin not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
