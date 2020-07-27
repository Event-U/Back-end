const event = require("../models/event");

function create({
  name,
  description,
  date,
  address,
  image,
  organizator,
  investments,
  needs,
}) {
  return event.create({
    name,
    description,
    date,
    address,
    image,
    organizator,
    investments,
    needs,
  });
}

function getAll() {
  return event
    .find()
    .populate("address")
    .populate({
      path: "needs",
      populate: {
        path: "quotation",
        populate: {
          path: "provider",
        },
      },
    })
    .populate({
      path: "needs",
      populate: {
        path: "service",
        populate: {
          path: "category",
        },
      },
    });
}

function getById(id) {
  return event
    .findById(id)
    .populate({
      path: "needs",
      populate: {
        path: "quotation",
        populate: {
          path: "provider",
        },
      },
    })
    .populate({
      path: "needs",
      populate: {
        path: "service",
        populate: {
          path: "category",
        },
      },
    });
}

function getByOrganizator(organizator) {
  return event.find({ organizator }).populate("Need");
}

function updateById(id, newData) {
  return event.findByIdAndUpdate(id, newData);
}

function deleteById(id) {
  return event.findByIdAndDelete(id);
}

module.exports = {
  create,
  getAll,
  getById,
  getByOrganizator,
  updateById,
  deleteById,
};
