import User from "../models/User.js";

const saveUser = async (userModel) => {
  const save = await User.create(userModel);
  return save;
};

const getUserById = async (id) => {
  return await User.findByPk(id);
};

const getAllUsers = async () => {
  return await User.findAll({ order: ["id", "asc"] });
};

const deleteUserById = async (id) => {
  return await User.destroy({ where: { id: id } });
};

const updateUserById = async (id, userModel) => {
  try {
    const result = await User.update(userModel, { where: { id: id } });
    if (result[0] === 1) {
      return { message: "Usuário atualizado com sucesso." };
    } else {
      return { message: "Usuário ${id} não encontrado.", status: 404 };
    }
  } catch (error) {
    console.error();
  }
};

const factory = {
  saveUser,
  getUserById,
  getAllUsers,
  deleteUserById,
  updateUserById,
};

export default factory;
