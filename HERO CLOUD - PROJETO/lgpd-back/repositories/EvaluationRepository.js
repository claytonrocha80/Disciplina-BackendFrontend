import Evaluation from "../models/Evaluation.js";

const saveEvaluation = async (evaluationModel) => {
  const save = await Evaluation.create(evaluationModel);
  return save;
};

const getEvaluationById = async (id) => {
  return await Evaluation.findByPk(id);
};

const getAllEvaluations = async () => {
  return await Evaluation.findAll({ order: ["id", "asc"] });
};

const deleteEvaluationById = async (id) => {
  return await Evaluation.destroy({ where: { id: id } });
};

const updateEvaluationById = async (id, evaluationModel) => {
  try {
    const result = await Evaluation.update(evaluationModel, {
      where: { id: id },
    });
    if (result[0] === 1) {
      return { message: "Evolução atualizada com sucesso." };
    } else {
      return { message: "Evolução ${id} não encontrada.", status: 404 };
    }
  } catch (error) {
    console.error();
  }
};

const factory = {
  saveEvaluation,
  getEvaluationById,
  getAllEvaluations,
  deleteEvaluationById,
  updateEvaluationById,
};

export default factory;
