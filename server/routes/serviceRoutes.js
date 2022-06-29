const express = require("express");
const router = express.Router();
const {
  getServices,
  setService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getServices);
router.post("/", setService);
router.put("/:id", protect, updateService);
router.delete("/:id", protect, deleteService);

module.exports = router;
