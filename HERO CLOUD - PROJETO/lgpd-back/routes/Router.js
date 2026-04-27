import express from "express";
let router = express.Router();

import Usercontroller from "./UserController.js";
import TeacherController from "./TeacherController.js";
import CourseControler from "./CourseControler.js";
import EvaluationControler from "./EvaluationControler.js";

router.get("/", (req, res) => {
  console.log("Oi!");
  res.status(200).json({ message: "Sucesso!" });
});

router.use("/", Usercontroller);
router.use("/", TeacherController);
router.use("/", CourseControler);
router.use("/", EvaluationControler);

export default router;
