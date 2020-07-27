const Service = require("../models/service");

function create({
  name,
  description,
  measurementUnit,
  unitPrice,
  image,
  category,
}) {
  return Service.create({
    name,
    description,
    measurementUnit,
    unitPrice,
    image,
    category,
  });
}

function getAll() {
  return Service.find().populate("category");
}

function getById(id) {
  return Service.findById(id).populate("category");
}

async function getByNameCategory(category) {
  category = category.toLowerCase();

  const services = await Service.find().populate("category");

  const serviceFilter = services.filter((service) => {
    return service.category.name.toLowerCase().includes(category);
  });

  if (!serviceFilter.length)
    throw new Error("No se encontro la categoria de este servicio");
  return serviceFilter;
}

async function getByServiceCaterogy(services) {
  const servicios = await Service.find().populate("category");

  const serviceFilter = services.filter((servicios) => {
    return service.category.name.toLowerCase().includes(category);
  });

  if (!serviceFilter.length)
    throw new Error("No se encontro la categoria de este servicio");
  return serviceFilter;
}

function updateById(id, newData) {
  return Service.findOneAndUpdate(id, newData);
}

function deleteById(id) {
  return Service.findByIdAndDelete(id);
}

module.exports = {
  create,
  getAll,
  getById,
  getByNameCategory,
  updateById,
  deleteById,
};
