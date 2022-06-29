const asyncHandler = require("express-async-handler");
//Call models
const Service = require("../models/serviceModels");

//api/services, get
const getServices = asyncHandler(async (req, res) => {
  const services = await Service.find();
  res.status(200).json(services);
});

//api/services, post
const setService = asyncHandler(async (req, res) => {
  //console.log(req.body);
  //Error handling
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add text");
  }
  const service = await Service.create({
    text: req.body.text,
  });
  res.status(200).json(service);
});

//api/services/1, put
const updateService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  //if no service, then error
  if (!service) {
    res.status(400);
    throw new Error("Service not found");
  }
  //updated service using findByIdAndUpdate
  const updatedService = await Service.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedService);
});

//api/services/1, delete
const deleteService = asyncHandler(async (req, res) => {
  //if no service, then error
  if (!service) {
    res.status(400);
    throw new Error("Service not found");
  }
  await service.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getServices,
  setService,
  updateService,
  deleteService,
};
