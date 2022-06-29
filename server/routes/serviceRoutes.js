const express = require("express");
const router = express.Router();
const {
  getServices,
  setService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");

router.get("/", getServices);
router.post("/", setService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

module.exports = router;
