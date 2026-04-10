import evaluationRepository from "../repositories/EvaluationRepository.js";

const saveEvaluation = (evaluationModel) => {
  return evaluationRepository.saveEvaluation(evaluationModel);
};

const getEvaluationById = (id) => {
  return evaluationRepository.getEvaluationById(id);
};

const getAllEvaluations = () => {
  return evaluationRepository.getAllEvaluations();
};

const deleteEvaluationById = (id) => {
  return evaluationRepository.deleteEvaluationById();
};

const updateEvaluationById = (evaluationModel) => {
  return evaluationRepository.updateEvaluationById();
};

const service = {
  saveEvaluation,
  getEvaluationById,
  getAllEvaluations,
  deleteEvaluationById,
  updateEvaluationById,
};

export default service;
