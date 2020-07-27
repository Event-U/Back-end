const jwt = require("../lib/jwt");
const User = require("../models/user");

async function create({
  typeUser,
  services,
  isActiveNotification,
  bussinesName,
  rfc,
  email,
  phone,
  addresses,
}) {
  return User.create({
    typeUser,
    services,
    isActiveNotification,
    bussinesName,
    rfc,
    email,
    phone,
    addresses,
  });
}

function getAll() {
  return User.find()
    .select({ password: false })
    .populate("addresses")
    .populate("services");
}

function getById(id) {
  return User.findById(id).populate("addresses").populate("services");
}

async function getLogin(email, password) {
  const userFound = await User.findOne({ email });
  if (!userFound) throw new Error("No se encontro un usuario con este email");

  const validPassword = await bcrypt.compare(password, userFound.password);
  if (!validPassword) throw new Error("Password incorrecto");

  return {
    usuario: userFound,
    token: jwt.sign({ id: userFound._id }),
  };
}

function updateById(id, newData) {
  return User.findByIdAndUpdate(id, newData);
}

function deleteById(id) {
  return User.findByIdAndDelete(id);
}

module.exports = {
  create,
  getAll,
  getById,
  getLogin,
  deleteById,
  updateById,
};
