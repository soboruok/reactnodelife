const asyncHandler = require("express-async-handler");

//api/services, get
const getServices = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get services" });
});

//api/services, post
const setService = asyncHandler(async (req, res) => {
  //console.log(req.body);
  //Error handling
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add text");
  }
  res.status(200).json({ message: "set service" });
});

//api/services/1, put
const updateService = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update service ${req.params.id}` });
});

//api/services/1, delete
const deleteService = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete service ${req.params.id}` });
});

module.exports = {
  getServices,
  setService,
  updateService,
  deleteService,
};
