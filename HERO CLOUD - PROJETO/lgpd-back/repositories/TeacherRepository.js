import Teacher from "../models/Teacher.js";

const saveTeacher = async (teacherModel) => {
  const save = await Teacher.create(teacherModel);
  return save;
};

const getTeacherById = async (id) => {
  return await Teacher.findByPk(id);
};

const getAllTeachers = async () => {
  return await Teacher.findAll({ order: ["id", "asc"] });
};

const deleteTeacherById = async (id) => {
  return await Teacher.destroy({ where: { id: id } });
};

const updateTeacherById = async (id, teacherModel) => {
  try {
    const result = await Teacher.update(teacherModel, { where: { id: id } });
    if (result[0] === 1) {
      return { message: "Professor atualizado com sucesso." };
    } else {
      return { message: "Professor ${id} não encontrado.", status: 404 };
    }
  } catch (error) {
    console.error();
  }
};

const factory = {
  saveTeacher,
  getTeacherById,
  getAllTeachers,
  deleteTeacherById,
  updateTeacherById,
};

export default factory;
