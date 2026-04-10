import teacherRepository from "../repositories/TeacherRepository.js";

const saveTeacher = (teacherModel) => {
  return teacherRepository.saveTeacher(teacherModel);
};

const getTeacherById = (id) => {
  return teacherRepository.getTeacherById(id);
};

const getAllTeachers = () => {
  return teacherRepository.getAllTeachers();
};

const deleteTeacherById = (id) => {
  return teacherRepository.deleteTeacherById();
};

const updateTeacherById = (teacherModel) => {
  return teacherRepository.updateTeacherById();
};

const service = {
  saveTeacher,
  getTeacherById,
  getAllTeachers,
  deleteTeacherById,
  updateTeacherById,
};

export default service;
